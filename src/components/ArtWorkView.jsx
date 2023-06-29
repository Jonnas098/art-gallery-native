import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Separator = () => <View style={styles.separator}/>

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
      <View style={styles.info}>
        <Text style={styles.info.title}>Author:</Text>
        <Text style={styles.info.content}>{content.author}</Text>
        <Text>Likes: {content.likes}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.info.title}>Place:</Text>
        <Text style={styles.info.content}>{content.place}</Text>
      </View>
      <View>
        <Text style={styles.info.title}>Description:</Text>
        <Text>{content.description}</Text>
      </View>
    </View>
  )
}

export default ArtWorkView

const styles = StyleSheet.create({
  artWorkView: {
    marginVertical: 10
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
      fontSize: 19
    }
  }
});