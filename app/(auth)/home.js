import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home</Text>
      <View style={{margin:20}}>
        <Link style={{margin:10,borderWidth:1, padding:10,borderRadius:8}} href={'/sign-in'}>SignIn</Link>
        <Link style={{margin:10,borderWidth:1, padding:10,borderRadius:8}} href={'/sign-up'}>SignUp</Link>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})