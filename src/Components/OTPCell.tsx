/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {View, TextInput, StyleSheet, Animated, Easing} from 'react-native'

type Props = {
  inputViewStyle: object
  onFocus: Function
  onBlur: Function
  index: number
  value: string
  onKeyPress: (idx: number, text: string) => void
  setRef: Function
}

const OTPCell = (props: Props) => {
  const {inputViewStyle, value, index, onKeyPress, setRef} = props
  const animate = React.useRef(new Animated.Value(0))
  const ref = React.useRef()

  React.useEffect(() => {
    setRef(ref)
  }, [])

  const onFocus = () => {
    Animated.timing(animate.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start()
    props.onFocus && props.onFocus()
  }
  const onBlur = () => {
    Animated.timing(animate.current, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start()
    props.onBlur && props.onBlur()
  }

  return (
    <View style={[styles.container, inputViewStyle]}>
      <View style={styles.row}>
        <TextInput
          ref={ref}
          underlineColorAndroid="transparent"
          disableFullscreenUI={true}
          style={styles.input}
          onBlur={onBlur}
          maxLength={1}
          autoCapitalize="none"
          selectTextOnFocus
          onFocus={onFocus}
          value={value}
          onKeyPress={({nativeEvent: {key}}) => {
            onKeyPress(index, key)
          }}
        />
      </View>
      <View style={styles.line}>
        <Animated.View
          style={[
            styles.hightline,
            {
              transform: [
                {
                  scaleX: animate.current,
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  )
}

export default OTPCell

OTPCell.defaultProps = {
  inputViewStyle: {},
  onFocus: () => {},
  onBlur: () => {},
  value: '',
}

const styles = StyleSheet.create({
  hightline: {
    height: 1,
    width: '100%',
    backgroundColor: 'blue',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#C7C7CD',
    flexDirection: 'row',
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
    textAlign: 'center',
  },
})
