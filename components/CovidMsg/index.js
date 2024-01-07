import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const CovidMsg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        The Power Automate and Power Apps Developer 
        will primarily be responsible for the developing, 
        implementing, testing and maintaining custom business 
        applications to support integration and automation
      </Text>
      <Text style={styles.learnMore}>Learn more &rarr;</Text>
    </View>
  )
}

export default CovidMsg