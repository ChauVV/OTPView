import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Authentication from 'screens/Authentication'
import InputOTP from 'screens/InputOTP'
import Home from 'screens/Home'

const Authen = createStackNavigator()
const AuthenStack = () => {
  return (
    <Authen.Navigator>
      <Authen.Screen name="Authentication" component={Authentication} />
      <Authen.Screen
        name="InputOTP"
        component={InputOTP}
        options={{title: 'Input OTP', headerBackTitle: ' '}}
      />
    </Authen.Navigator>
  )
}

const Root = createStackNavigator()
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen name="AuthenStack" component={AuthenStack} />
        <Root.Screen name="Home" component={Home} />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export {RootNavigation}
