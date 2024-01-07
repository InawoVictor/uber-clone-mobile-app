import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap'
import UberTypes from '../../components/UberTypes'

const SearchResults = () => {
  return (
    <View>
      <HomeMap />
      <ScrollView>
        <UberTypes />
      </ScrollView>
    </View>
  )
}

export default SearchResults