import React from 'react'
import {View, TextInput, StyleSheet, Text, Animated} from 'react-native'

type Props = {
  value: string
  onChangeText: (text: string) => void
  placeholder: string
}

const InputPhone = (props: Props) => {
  const {value, onChangeText, placeholder} = props

  const animate = React.useRef(new Animated.Value(0))

  const interpolateBar = React.useMemo(
    () =>
      animate.current.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
      }),
    [],
  )
  const onFocus = () => {
    Animated.spring(animate.current, {
      toValue: 1,
      useNativeDriver: false,
    }).start()
  }
  const onBlur = () => {
    Animated.spring(animate.current, {
      toValue: 0,
      useNativeDriver: false,
    }).start()
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.inputHeader}>+84 </Text>
        <Text style={styles.inputSep}>|</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          disableFullscreenUI={true}
          style={styles.input}
          keyboardType="numeric"
          maxLength={10}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </View>
      <View style={styles.line}>
        <Animated.View
          style={[
            styles.hightline,
            {
              width: interpolateBar,
            },
          ]}
        />
      </View>
    </View>
  )
}

export default InputPhone

const styles = StyleSheet.create({
  hightline: {
    height: 1,
    backgroundColor: 'blue',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#C7C7CD',
    flexDirection: 'row',
  },
  inputSep: {
    color: '#C7C7CD',
    fontSize: 25,
  },
  inputHeader: {
    color: 'black',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  input: {
    fontSize: 14,
    color: 'black',
    flex: 1,
    height: 40,
  },
})
