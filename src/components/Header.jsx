import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const Separator = () => <View style={styles.hr}/>

const Header = () => {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>My Galery</Text>
      </View>
      <Separator/>
      <View style={styles.navbar}>
        <Text>art</Text>
        <Text>profile</Text>
      </View>
      <Separator/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
    //backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Times-New-Roman'
  },
  navbar: {
    flex: 2,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around'
    //backgroundColor: 'powderblue'
  },
  hr: {
    width: '90%',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});