import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
type Props = {
  navigation: any
}
const Home = (props: Props) => {
  const logout = () => {
    props.navigation.replace('AuthenStack')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <TouchableOpacity style={styles.btn} onPress={logout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  btnText: {
    color: 'black',
  },
  btn: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 30,
    marginTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
})
