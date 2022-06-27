import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {useState} from 'react'

export default function App() {
  
  const [count, setCount] = useState(10);

  const handleCount = () =>{
    setCount(count - 1)
    if(count <= 0){
      setCount(0)
    }
  }

  const handleResetCount = () =>{
    setCount(10)
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, color: '#fff', marginBottom: 200 }}>{count}</Text>
      
      <TouchableHighlight onPress={handleCount} style={styles.button} underlayColor="#73B0FF">
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Contagem Regressiva</Text>
      </TouchableHighlight>
      
      <TouchableHighlight onPress={handleResetCount} style={styles.button} underlayColor="#73B0FF">
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Reiniciar</Text>
      </TouchableHighlight>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: "center",
  },
  button: {
    backgroundColor: 'white',
    margin:10,
    borderRadius: 8, 
    padding: 6, 
    height: 50, 
    width: '70%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 5, 
  }
});
