import {ScrollView, StyleSheet, Text, View, RefreshControl, Vibration} from 'react-native';
import React, { useState, useEffect, useCallback} from 'react';
import artService from '../services/artServices';
import ArtWorkView from './ArtWorkView';

const ArtistView = () => {
  const [artists, setArtists] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  useEffect(()=>{
    console.log("Effect");
    artService.getAll().then(arts => {
      console.log("Promise fulfilled");
      setArtists(arts)
    });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    artService.getAll().then(arts => {
      console.log("Promise fulfilled on refresh")
      setArtists(arts)
      setRefreshing(false)
    })
  }, [])

  return (
    <ScrollView
      style={styles.artistView}
      refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
      {artists.length === 0 ? <Text style={styles.authorName}>Loading...</Text> :
        artists.map(element => (
          <View key={element.id}>
            <Text style={styles.authorName}>{element.nombre}</Text>
            <ArtWorkView
              arr={artists}
              content={element}
            />
          </View>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  artistView: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15
  },
  authorName: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'serif',
    marginVertical: 10
  },
  contentContainer: {
    //backgroundColor: 'powderblue',
  }
})

export default ArtistView