import { View, Text } from 'react-native'
import styles from './styles'

import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"

const HomeSearch = () => {
  return (
    <View>
        {/* Input Box */}
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Where to?</Text>

            <View style={styles.timeContainer}>
                <AntDesign name="clockcircle" size={16} color={'#535353'} />
                <Text>Now</Text>
                <MaterialIcons name='keyboard-arrow-down' size={16} />
            </View>
        </View>

        {/* Previous Destination */}
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <AntDesign name="clockcircle" size={16} color={'#fff'} />
            </View>
            <Text style={styles.destinationText}>Spin Night Club</Text>
        </View>

        {/* Home Destination */}
        <View style={styles.row}>
            <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                <Entypo name="home" size={16} color={'#fff'} />
            </View>
            <Text style={styles.destinationText}>Home</Text>
        </View>
    </View>
  )
}

export default HomeSearch;