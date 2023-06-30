import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
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
          <Route path='/art' element={<ArtistView/>}/>
        </Routes>
        <Footer/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'steelblue',
    alignItems: 'center'
  }
});
