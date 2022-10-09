import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';

const WeatherSearch = ({ fetchWeather }: any) => {
    const [cityName, setCityName] = useState('');
    return (
        <View style={styles.searchBar}>
            <TextInput style={styles.textInput}
                placeholder='Search City'
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <EvilIcons name='search' size={28} color='black'
                onPress={() => fetchWeather(cityName)}
            />
        </View>
    )
}

export default WeatherSearch

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 40,
        marginHorizontal: 10,
        marginTop: 15

    },
    textInput: {
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 40,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 25,
        border: 'none',
        outline: 'none',
        fontSize: 16

    }

})