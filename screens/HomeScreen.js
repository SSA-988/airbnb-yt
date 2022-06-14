import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Explore from '../components/Explore'
import Experience from '../components/Experience'

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header/>

      <Cards/>

      <Explore/>

      <Experience/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})