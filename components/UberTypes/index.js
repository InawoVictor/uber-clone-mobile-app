import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import UberTypeRow from '../UberTypeRow'

import types from '../../assets/data/types'

const UberTypes = () => {
  const confirm = () => {
    console.warn("Confirmed Ride")
  }

  return (
    <View>
      {
        types.map(type => <UberTypeRow key={type.id} type={type}/>)
      }

      <Pressable 
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 15,
          margin: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  )
}

export default UberTypes