import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const Separator = () => <View style={styles.separator}/>

const Header = () => {
  return(
    <View style={styles.header}>
      <View>
        <Link to='/' underlayColor='#f0f4f7'>
          <Text style={styles.header.title}>My Galery</Text>
        </Link>
      </View>
      <Separator/>
      <View style={styles.navbar}>
        <Link to='/art' style={{width: '50%'}} underlayColor='#f0f4f7'>
          <Text style={styles.navbar.anchords}>art</Text>
        </Link>
        <Link to='/profile' style={{width: '50%'}} underlayColor='#f0f4f7'>
          <Text style={styles.navbar.anchords}>profile</Text>
        </Link>
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
    paddingTop: 35,
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
      //backgroundColor: 'powderblue',
      fontSize: 17,
      fontFamily: 'serif',
      textAlign: 'center'
    }
  }
});