import {TouchableHighlight, StyleSheet, Text, View, Image, Vibration} from 'react-native';
import React, {useState} from "react/index";
import artService from "../services/artServices";

const Separator = () => <View style={styles.separator}/>

const ArtWorkView = ({ content, arr }) => {
  const [liked, setLiked] = useState(false)
  const [backCount, setBackCount] = useState(0)

  const label = liked ? '❤️' : '🖤'

  const testFun = (id, idArtWork) => {
    const artist = arr.findIndex(a => a.id === content.id)
    const artWorks = arr[artist].obras.findIndex(o => o._id === idArtWork)
    const updatedArts = [...arr]

    setBackCount(backCount + 1)
    setTimeout(()=> setBackCount(0), 500)

    if(backCount === 1 && !liked) {
      setBackCount(0)
      setLiked(true)
      updatedArts[artist].obras[artWorks].likes += 1
      artService.update(id, updatedArts[artist])
        .then(updated => {
          console.log(updated);
        })
      Vibration.vibrate(12)
    } else if (backCount === 1 && liked) {
      setBackCount(0)
      setLiked(false)
      updatedArts[artist].obras[artWorks].likes -= 1
      artService.update(id, updatedArts[artist])
        .then(updated => {
          console.log(updated);
        })
      Vibration.vibrate(12)
    }
  }

  return(
    content.obras.map(artWork => (
      <View key={artWork._id} style={styles.artWorkView}>
        <TouchableHighlight onPress={()=> {testFun(content.id, artWork._id)}}>
          <Image
            source={{ uri: artWork.img }}
            style={styles.artWork}
          />
        </TouchableHighlight>
        <Separator/>
        <View style={styles.info}>
          <Text style={styles.info.title}>Author:</Text>
          <Text style={styles.info.content}>{artWork.author}</Text>
          <Text style={styles.likes}>{label} {artWork.likes}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.info.title}>Place:</Text>
          <Text style={styles.info.content}>{artWork.place}</Text>
        </View>
        <View>
          <Text style={styles.info.title}>Description:</Text>
          <Text>{artWork.description}</Text>
        </View>
      </View>
    ))
  )
}

export default ArtWorkView

const styles = StyleSheet.create({
  artWorkView: {
    width: '100%',
    marginVertical: 10,
    //backgroundColor: 'steelblue'
  },
  artWork: {
    width: 'auto',
    height: 'auto',
    aspectRatio: '3/4'
  },
  separator: {
    width: '100%',
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  info: {
    flexDirection: 'row',
    alignItems: 'baseline',
    title: {
      fontSize: 21,
      marginRight: 5,
      fontWeight: 600,
      fontFamily: 'serif'
    },
    content: {
      fontSize: 19,
      fontFamily: ''
    }
  },
  likes: {
    position: 'absolute',
    right: 0,
    fontSize: 16
  }
});