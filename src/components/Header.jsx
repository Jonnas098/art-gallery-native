import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const Separator = () => <View style={styles.separator}/>

const Header = () => {
  return(
    <View style={styles.header}>
      <View>
        <Text style={styles.header.title}>My Galery</Text>
      </View>
      <Separator/>
      <View style={styles.navbar}>
        <Text style={styles.navbar.anchords}>art</Text>
        <Text style={styles.navbar.anchords}>profile</Text>
      </View>
      <Separator/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    //backgroundColor: 'powderblue',
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 30,
    flexDirection: 'column',
    title: {
      fontSize: 35,
      textAlign: 'center',
      fontFamily: 'serif'
    },
  },
  separator: {
    width: '100%',
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  navbar: {
    //backgroundColor: 'skyblue',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    anchords: {
      fontSize: 17,
      fontFamily: 'serif'
    }
  }
});