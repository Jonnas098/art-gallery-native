import {ScrollView, StyleSheet, Text, View, RefreshControl, Vibration} from 'react-native';
import React, { useState, useEffect, useCallback} from 'react';
import artService from '../services/artServices';
import ArtWorkView from './ArtWorkView';

const ArtistView = () => {
  const [artists, setArtists] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [liked, setLiked] = useState(false)
  const [backCount, setBackCount] = useState(0)

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

  const likeArt = (id, idArtWork) => {
    const artist = artists.findIndex(a => a.id === id)
    const artWork = artists[artist].obras.findIndex(o => o._id === idArtWork)
    const updatedArtWorks = [...artists]

    setBackCount(backCount + 1)
    setTimeout(()=> setBackCount(0), 500)
    console.log(backCount)

    if(backCount === 1) {
      setBackCount(0)
      updatedArtWorks[artist].obras[artWork].likes += 1
      setArtists(updatedArtWorks)
      artService.update(id, updatedArtWorks[artist])
      .then(updated => {
        console.log(updated);
      })
    }

    Vibration.vibrate(10)
  };

  return (
    <ScrollView
      style={styles.artistView}
      refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
      {artists.length === 0 ? <Text style={styles.authorName}>Loading...</Text> :
        artists.map(element => (
          <View key={element.id}>
            <Text style={styles.authorName}>{element.nombre}</Text>
            {element.obras.map(artWork => (
              <ArtWorkView
                key={artWork._id}
                content={artWork}
                liked={liked}
                likeFunction={() => likeArt(element.id, artWork._id)}
              />
            ))}
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