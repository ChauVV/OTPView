import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import OTPCell from './OTPCell'

type Props = {
  countCode: number
  onSubmit: Function
}

const ListOTP = (props: Props) => {
  const {onSubmit} = props

  const [digits, setDigits] = useState(['', '', '', '', '', ''])
  const [fields, setFields] = useState([])

  const onChangeText = (idx: number, text: string, isBack?: boolean) => {
    let temp = [...digits]
    temp[idx] = text

    setDigits(temp)
    if (isBack) {
      idx > 0 && focusField(idx - 1)
    } else {
      if (idx < digits.length - 1) {
        focusField(idx + 1)
      }
    }

    let isSubmit = true

    temp.forEach((c) => {
      if (c.length === 0) {
        isSubmit = false
      }
    })

    if (isSubmit) {
      const code = temp.join('')
      onSubmit && onSubmit(code)
    }
  }

  const focusField = (index: number) => {
    if (index < fields.length) {
      fields[index].current.focus()
    }
  }

  const onKeyPress = (idx: number, key: string) => {
    if (key === 'Backspace') {
      if (idx >= 0) {
        onChangeText(idx, '', true)
      }
    } else {
      onChangeText(idx, key)
    }
  }

  const renderOTP = (p: any, index: number) => {
    return (
      <OTPCell
        value={p}
        setRef={(ref) => setFields([...fields, (fields[index] = ref)])}
        inputViewStyle={styles.otp}
        index={index}
        key={`${index}cell`}
        onKeyPress={onKeyPress}
      />
    )
  }

  return <View style={styles.container}>{digits.map(renderOTP)}</View>
}

export default ListOTP

ListOTP.defaultProps = {
  countCode: 6,
  onSubmit: () => {},
}

const styles = StyleSheet.create({
  otp: {
    maxWidth: 50,
    height: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
