import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  return(
    <View style={styles.footer}>
      <Text>By: John Navarro | 2023</Text>
    </View>
  )
}

export default Footer

const styles = new StyleSheet.create({
  footer: {
    paddingVertical: 2
  }
})