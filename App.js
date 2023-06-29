import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Route, Routes } from 'react-router-native';

import Home from './src/components/Home'
import Header from './src/components/Header';
import ArtistView from './src/components/ArtistView';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <ScrollView style={styles.scrollArea}>
          <ArtistView/>      
        </ScrollView>
        <Footer/>
        <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'steelblue',
    alignItems: 'center'
  },
  scrollArea: {
    //backgroundColor: 'aquamarine',
    width: '100%',
  }
});
