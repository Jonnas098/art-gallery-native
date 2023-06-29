import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Route, Routes } from 'react-router-native';

import Home from './src/components/Home'
import Header from './src/components/Header';
import ArtistView from './src/components/ArtistView';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ArtistView/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
