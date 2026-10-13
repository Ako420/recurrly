import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/SignUp" className="text-blue-500">signpu page</Link>
    </View>
  )
}

export default SignIn