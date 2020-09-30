/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import {
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import ButtonCountDown from 'components/ButtonCountDown'
import ListOTP from 'components/ListOTP'

type Props = {
  navigation: any
}

const InputOTP = (props: Props) => {
  const {navigation} = props
  let tout = null

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    return () => {
      tout && clearTimeout(tout)
    }
  }, [])

  const resetTop = () => {
    navigation.replace('AuthenStack')
  }

  const onSubmit = (code) => {
    console.log('onSubmit: ', code)
    setLoading(true)
    tout = setTimeout(() => {
      setLoading(false)
      navigation.replace('Home')
    }, 2000)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={50}
      style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.disc}>Input your OTP code sent via SMS</Text>
        <ListOTP onSubmit={onSubmit} />
      </ScrollView>
      <View style={styles.groupBtn}>
        <TouchableOpacity onPress={resetTop} style={[styles.btn]}>
          <Text style={styles.btnText}>Change number</Text>
        </TouchableOpacity>
        <ButtonCountDown />
      </View>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator color="gray" />
        </View>
      )}
    </KeyboardAvoidingView>
  )
}

export default InputOTP

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',

    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  groupBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  btnText: {
    color: 'blue',
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
