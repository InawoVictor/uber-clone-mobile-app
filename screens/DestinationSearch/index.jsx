import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from "./styles"
import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const DestinationSearch = () => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        
        console.warn('useEffect is called')
        if(originPlace && destinationPlace) {            
            console.warn('Redirect to result')
        }
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    styles={{
                        textInput: styles.textInput
                    }}
                    placeholder='Where from?'
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details})
                        // console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyDGaiubUdqf5Bypla2u6eSlVDmvopME5ew',
                        language: 'en',
                    }}
                />

                <GooglePlacesAutocomplete
                    styles={{
                        textInput: styles.textInput
                    }}
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details})
                        // console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyDGaiubUdqf5Bypla2u6eSlVDmvopME5ew',
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch;