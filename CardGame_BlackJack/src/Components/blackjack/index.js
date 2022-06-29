import { Button, StyleSheet, Text, View, Image} from 'react-native';
import { useState } from 'react'
import api from '../../services/api';

export const Blackjack = (props) => {

    const [playerCards, setPlayerCards] = useState([{
        cartas: {
            valor: undefined,
            img: undefined
        }
    }]);

    const [botCards, setBotCards] = useState([{
        cartas: {
            valor: undefined,
            img: undefined
        } 
    }])

    const [card, setCard] = useState([]);
    const [cardBot, setCardBot] = useState([]);
    const [botPoints, setBotPoints] = useState([]);
    const [playerPoints, setPlayerPoints] = useState([]);
    const [total, setTotal] = useState(null);
    const [totalBot, setTotalBot] = useState(null); 
    const [click, setClick] = useState(false);


    const handleBotDeck = () =>{
        cardBot.map(cards =>{
            handleValorBot(),
            setBotCards([...botCards, {
                cartas: {
                    valor: cards.value,
                    img: cards.images.png
                }
            }]),
            setBotPoints([...botPoints, parseInt(cards.value)])
        })
        if (botCards.indexOf(undefined)) {
            botCards.shift();
        }
    }


    const handlePlayerDeck = () =>{
        card.map(cards => {
            handleValorPlayer(),
                setPlayerCards([...playerCards, {
                    cartas: {
                        valor: cards.value,
                        img: cards.images.png
                    }
                }]),
            setPlayerPoints([...playerPoints, parseInt(cards.value)]);
        })
        if (playerCards.indexOf(undefined)) {
            playerCards.shift();
        }
    }

    const getCardsBot = async () =>{
        const {data} = await api.get('new/draw/?count=2')
        setCardBot(data.cards);
        handleBotDeck();
    }

    const getCards = async () => {
        const { data } = await api.get(`new/draw/?count=1`);
        setCard(data.cards);
        handlePlayerDeck();
        setClick(true);
        getCardsBot();
    }

    const handleValorBot = () =>{
        cardBot.map(cards => {
            if (isNaN(cards.value)) {
                return cards.value = parseInt(10)
            }
            else {
                return parseInt(cards.value);
            }
        })
    }

    const handleValorPlayer = () => {
        card.map(cards => {
            if (isNaN(cards.value)) {
                return cards.value = parseInt(10)
            }
            else {
                return parseInt(cards.value);
            }
        })
    }
    
    const somaValor = async () => {
        setTotal(playerPoints.reduce(function (a, b) { return a + b}, 0))
        setTotalBot(botPoints.reduce(function (a, b) {return a + b},0))
        if (total > 21) {
            alert("VOCÊ PERDEU!!! 😜")
            props.nav.navigate("Home")
        }
        setClick(false)
    }

    const handleParar = () => {
        if (total > 21) {
            alert("VOCÊ PERDEU!!!")
            setPlayerCards(null)
            props.nav.navigate("Home")
        }
        else if (total <= 21 && total !== 0) {
            alert("VOCÊ VENCEU")
            setPlayerCards(null)
            props.nav.navigate("Home")
        }
    }

    // useEffect(() => {
    //     getCards();
    // }, []);

    return (
        <View style={styles.container}>
            {botCards && <Text style={{paddingTop: '5%'}}>PONTOS BOT: {totalBot}</Text>}
            <View style={{ flex: 4, justifyContent: 'space-evenly', flexDirection: 'column', flexWrap: 'wrap' }}>
                {botCards.map(card => {
                    return (
                        <Image style={styles.card} source={{ uri: card.cartas.img }} />
                    )
                })}
                {playerCards && <Text style={{ paddingTop: '5%' }}>PONTOS JOGADOR: {total}</Text>}
                {playerCards.map(card => {
                    return (
                        <Image style={styles.card} source={{ uri: card.cartas.img }} />
                    )
                })} 
            </View>
            <View style={{margin: '20%',flexDirection: 'row' }}>
                {click ? <Button title='Continuar?' onPress={somaValor}></Button> : 
                <Button title='Pegar carta' onPress={getCards}></Button> }
                {total > 0 && <Button title='Parar?' onPress={handleParar}></Button>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#289B49',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      shadowRadius: 3,
      margin: 10,
      height: 150,
      width: 100,
      borderRadius: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
  });