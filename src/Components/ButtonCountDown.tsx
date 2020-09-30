/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useMemo} from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

const ButtonCountDown = () => {
  const [countDown, setCountDown] = useState(30)
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    setTimer(setInterval(handlerInterval, 1000))
    return () => {
      timer && clearInterval(timer)
    }
  }, [])

  const handlerInterval = () => {
    setCountDown((v) => v - 1)
  }

  const disabled = useMemo(() => {
    if (countDown <= 0) {
      timer && clearInterval(timer)
      return false
    }
    return true
  }, [countDown, timer])

  const reSendOTP = () => {
    setCountDown(30)
    setTimer(setInterval(handlerInterval, 1000))
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={reSendOTP}
      style={[styles.btn]}>
      <Text
        style={[
          styles.btnText,
          disabled && styles.btnTextDisabled,
        ]}>{`Resend OTP ${countDown > 0 ? `(${countDown})` : ''}`}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCountDown

const styles = StyleSheet.create({
  btnTextDisabled: {
    color: 'gray',
  },
  btnText: {
    color: 'blue',
    fontSize: 16,
  },
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
})
