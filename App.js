import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';

import Home from './src/components/Home'
import Profile from './src/components/Profile'
import Header from './src/components/Header';
import ArtistView from './src/components/ArtistView';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/art' element={
          <ScrollView style={styles.scrollArea}>
            <ArtistView/>      
          </ScrollView>
          }/>
        </Routes>
        <Footer/>
        <StatusBar style="dark" />
      </SafeAreaView>
    </NativeRouter>
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
