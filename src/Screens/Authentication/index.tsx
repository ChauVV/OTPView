import React, {useState, useEffect} from 'react'
import {
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'
import InputPhone from 'components/InputPhone'
import SplashScreen from 'react-native-splash-screen'

type Props = {
  navigation: any
}

const Authentication = (props: Props) => {
  const {navigation} = props

  const [phone, setPhone] = useState('')

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  const disabled = phone.length === 0

  const goToOTP = () => {
    navigation.push('InputOTP')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={50}
      style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.disc}>Please input your mobile phone number</Text>
        <InputPhone
          value={phone}
          onChangeText={setPhone}
          placeholder="902 291 011"
        />
      </ScrollView>
      <TouchableOpacity
        disabled={disabled}
        onPress={goToOTP}
        style={[styles.btn, disabled && styles.btnDisabled]}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Authentication

const styles = StyleSheet.create({
  btnDisabled: {
    opacity: 0.5,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
  disc: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  btn: {
    width: '80%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 50,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 20,
    flex: 1,
  },
  input: {
    fontSize: 14,
    color: 'black',
  },
})
