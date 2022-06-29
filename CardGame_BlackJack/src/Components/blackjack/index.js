import { Button, StyleSheet, Text, View, Image} from 'react-native';
import { useState } from 'react'
import api from '../../services/api';

export const Blackjack = () => {

    const [playerCards, setPlayerCards] = useState([{
        cartas: {
            valor: undefined,
            img: undefined
        }
    }]);

    const [card, setCard] = useState([]);
    const [playerPoints, setPlayerPoints] = useState([]);
    const [total, setTotal] = useState(null);
    const [click, setClick] = useState(false);

    const handlePlayer = () =>{
        somaValor();
        card.map(cards => {
            handleValor(),
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

    const getCards = async () => {
        const { data } = await api.get(`new/draw/?count=1`);
        setCard(data.cards);
        handlePlayer();
        setClick(true);
    }


    const handleValor = () => {
        card.map(cards => {
            if (isNaN(cards.value)) {
                return cards.value = parseInt(10)
            }
            else {
                return parseInt(cards.value);
            }
        })
    }
    
    const somaValor = () => {
        setTotal(playerPoints.reduce(function (a, b) { return a + b}, 0))
        if (total > 21) {
            alert("VOCÊ PERDEU!!! 😜")
        }
        setClick(false)
    }

    const handleParar = () => {
        if (total > 21) {
            alert("VOCÊ PERDEU!!!")
        }
        else if (total <= 21 && total !== 0) {
            alert("VOCÊ VENCEU")
        }
    }

    // useEffect(() => {
    //     getCards();
    // }, []);

    return (
        <View style={styles.container}>
            {playerCards && <Text style={{paddingTop: '5%'}}>PONTOS JOGADOR: {total}</Text>}
            <View style={{ flex: 4, justifyContent: 'flex-start', flexDirection: 'row', flexWrap: 'wrap' }}>
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