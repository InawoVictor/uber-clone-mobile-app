import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const UberTypeRow = ({type}) => {

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/img/moon.jpg")} />
      
        <View style={styles.middleContainer}>
            <Text style={styles.type}>
                {type.type} &nbsp;
                <Ionicons name='person' size={16} />
                3
            </Text>
            <Text style={styles.time}>
                8:03pm drop off
            </Text>
        </View>

            <View style={styles.rightContainer}>
            <Ionicons name='pricetag' size={18} color={"#42d742"} />
            <Text style={styles.price}>
                est. ${type.price}
            </Text>
        </View>
    </View>
  )
}

export default UberTypeRow