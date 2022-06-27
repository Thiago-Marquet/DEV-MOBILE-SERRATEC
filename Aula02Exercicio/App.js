import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './src/components/flex';

export default function App() {
  return (
    <View>
      <View style={[styles.ret1, {backgroundColor: '#50E3C2'}]}></View>
      <View style={{flex: 1, alignItems: 'center', margin: 20}}>
        <View style={[styles.qrd1, {backgroundColor: '#F5A623'}]}></View>
        <View style={[styles.ret2, {backgroundColor: '#F5A623',margin:20}]}></View>
      </View>
      <View style={{alignContent: 'center', flexDirection: 'row', justifyContent: 'center'}}>
        <View style={[styles.ret3e4, {backgroundColor: '#9013FE'}]}></View>
        <View style={[styles.ret3e4, {backgroundColor: '#4A90E2'}]}></View>
      </View>
      <View style={{backgroundColor: '#50E3C2', alignContent: "stretch", flexDirection: 'row', justifyContent: 'center'}}>
        <View style={[styles.ret5, {backgroundColor: '#50E3C2'}]}></View>
      </View>
      <View style={{padding: 20,flex: 2, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', flexWrap:'wrap'}}>
        <View style={[styles.qrd1, {backgroundColor: '#F5A623'}]}></View>
        <View style={[styles.qrd1, {backgroundColor: '#F5A623'}]}></View>
        <View style={[styles.qrd1, {backgroundColor: '#F5A623'}]}></View>
        <View style={[styles.qrd1, {backgroundColor: '#F5A623'}]}></View>
        <View style={[styles.qrd1, {backgroundColor: '#F5A623'}]}></View>
        <View style={[styles.qrd1, {backgroundColor: '#F5A623'}]}></View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <View style={[styles.ret6, {backgroundColor: '#50E3C2'}]}></View> 
      </View>
    </View>

  );
}

