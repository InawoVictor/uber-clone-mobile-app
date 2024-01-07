import { View, Text } from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap'
import CovidMsg from '../../components/CovidMsg'
import HomeSearch from '../../components/HomeSearch'

const HomeScreen = () => {
    return (
        <View>
            <HomeMap />

            {/* Covid text */}
            <CovidMsg />

            {/* Home Search Component */}
            <HomeSearch />
        </View>
    )
}

export default HomeScreen;