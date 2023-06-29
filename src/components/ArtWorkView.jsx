import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Separator = () => <View style={styles.hr}/>

const ArtWorkView = ({ likeFunction, content }) => {

  return(
    <View style={styles.artWorkView}>
      <Image
        source={{ uri: content.img }}
        style={styles.artWork}
      />
      <Button
        title='Like'
        onPress={likeFunction}
      />
      <Separator/>
      <View style={styles.authorInfo}>
        <Text style={styles.authorInfo.title}>Author:</Text>
        <Text>{content.author}</Text>
        <Text>Likes: {content.likes}</Text>
      </View>
      <View style={styles.authorInfo}>
        <Text style={styles.authorInfo.title}>Place:</Text>
        <Text>{content.place}</Text>
      </View>
      <View>
        <Text style={styles.authorInfo.title}>Description:</Text>
        <Text>{content.description}</Text>
      </View>
    </View>
  )
}

export default ArtWorkView

const styles = StyleSheet.create({
  artWorkView: {
    width: '100%',
    marginVertical: 10
  },
  artWork: {
    width: 400,
    height: 400
  },
  hr: {
    width: '100%',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  authorInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    title: {
      fontSize: 20,
      marginRight: 5,
    }
  }
});