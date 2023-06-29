import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect} from 'react';
import artService from '../services/artServices';
import ArtWorkView from './ArtWorkView';

const ArtistView = () => {
  const [artists, setArtists] = useState([])

  useEffect(()=>{
    console.log("Effect");
    artService.getAll().then(arts => {
      console.log("Promise fulfilled");
      setArtists(arts)
    });
  }, []);

  const likeArt = (id, idArtWork) => {
    const artist = artists.findIndex(a => a.id === id)
    const artWork = artists[artist].obras.findIndex(o => o._id === idArtWork)
    const updatedArtWorks = [...artists]

    updatedArtWorks[artist].obras[artWork].likes += 1
    setArtists(updatedArtWorks)

    artService.update(id, updatedArtWorks[artist])
    .then(updated => {
      console.log(updated);
    })
  };

  return(
    <View style={styles.artistView}>
      {artists.map(element => (
        <View key={element.id}>
          <Text style={styles.authorName}>{element.nombre}</Text>
          {element.obras.map(obra => (
            <ArtWorkView
              key={obra._id}
              content={obra}
              likeFunction={()=> likeArt(element.id, obra._id)}
            />
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  artistView: {
    width: '100%',
    paddingHorizontal: 15
  },
  authorName: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10
  }
})

export default ArtistView