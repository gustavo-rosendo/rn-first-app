import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

var toggle = true;

export default function App() {
  const [outputText, setOutputText] = useState('Gustavo Matsumoto Rosendo dos Santos');

  return (
    <View style={styles.container}>
      <Text>Hi, I'm {outputText}.</Text>
      <Text>This is my first React Native app! :-)</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
        title='Change Text' 
        onPress={() => {
          toggle = !toggle; 
          setOutputText(toggle? 'Gustavo Matsumoto Rosendo dos Santos':'the Software Engineer');}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4fac',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
  },
});
