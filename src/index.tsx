import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native'
import Constants from 'expo-constants'
import WeatherInfo from './WeatherInfo'


const API_KEYS = '03432530013211c52aaa31418e79a23e'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [loaded, setLoaded] = useState(false)


    const fetchWeather = async (cityName: any) => {
        try {
            setLoaded(false)
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`)
            if (response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);
        } catch (error: any) {
            Alert.alert('Error', error.message)
        }
    }


    useEffect(() => {
        fetchWeather('Delhi');
    }, [])



    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        )
    }
    else if (weatherData == null) {
        return (
            <View style={styles.unavailableContainer}>
                <Text style={styles.unavailableText}>City not found</Text>

            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Weather</Text>
            </View>
            <WeatherInfo weatherData={weatherData} fetchWeather={fetchWeather} />
        </View >
    )
}

export default Weather


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        fontFamily: 'Poppins Medium',

    },

    headerTitle: {
        fontSize: 29,
        fontWeight: 'bold',
        color: '#07AFE0',
    },
    unavailableContainer: {
        flex: 1,
        backgroundColor: '#D1EBFF',
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unavailableText: {
        alignItems: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3c6fd1',
        marginTop: 25

    }
});