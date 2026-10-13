import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href='/(auth)/SignIn' className="text-blue-400">
      signin page
      </Link>
    </View>
  )
}

export default SignUp
