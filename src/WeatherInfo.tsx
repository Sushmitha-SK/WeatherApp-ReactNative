import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import WeatherSearch from './Search';
import { LinearGradient } from 'expo-linear-gradient';


const WeatherInfo = ({ weatherData, fetchWeather }: any) => {
    const {
        name,
        visibility,
        weather: [{ icon, description }],
        main: { temp, humidity, feels_like },
        wind: { speed },
        sys: { sunrise, sunset },

    } = weatherData;
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#eceef2', '#e8edf5', '#e4ecf7', '#dfecfa', '#d9ebfc', '#d3ebfd', '#cdebfe', '#c7ebff', '#bfebff', '#b7ebff', '#afebff', '#a6ebff']}
                    style={styles.headerContainer}>
                    <View style={styles.headerContainer}>
                        <WeatherSearch fetchWeather={(fetchWeather)} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.title}>{name}</Text>
                        </View>
                        <View style={styles.logo}>
                            <Image
                                style={styles.largeIcon}
                                source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
                            />
                        </View>
                        <Text style={styles.currentTemp}>{temp} °C</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </LinearGradient>

                <View style={styles.extraInfo}>
                    <LinearGradient
                        colors={['#eceef2', '#d1ebff', '#a6ebff',]}
                        style={styles.gradient}>
                        <View style={styles.info}>
                            <Image
                                style={styles.smallIcon}
                                source={require('../assets/temperature.png')}
                            />
                            <Text style={styles.infoText}>{feels_like}</Text>
                            <Text style={styles.infoText}>feels Like</Text>
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#eceef2', '#d1ebff', '#a6ebff',]}
                        style={styles.gradient}>

                        <View style={styles.info}>
                            <Image
                                style={styles.smallIcon}
                                source={require('../assets/humidity.png')}
                            />
                            <Text style={styles.infoText}>{humidity}%</Text>
                            <Text style={styles.infoText}>Humidity</Text>
                        </View>
                    </LinearGradient>
                </View>

                <View style={styles.extraInfo}>
                    <LinearGradient
                        colors={['#eceef2', '#d1ebff', '#a6ebff',]}
                        style={styles.gradient}>
                        <View style={styles.info}>
                            <Image
                                style={styles.smallIcon}
                                source={require('../assets/visibility.png')}
                            />
                            <Text style={styles.infoText}>{visibility}</Text>
                            <Text style={styles.infoText}>Visibility</Text>

                        </View>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#eceef2', '#d1ebff', '#a6ebff',]}
                        style={styles.gradient}>
                        <View style={styles.info}>
                            <Image
                                style={styles.smallIcon}
                                source={require('../assets/wind.png')}
                            />
                            <Text style={styles.infoText}>{speed} m/s</Text>
                            <Text style={styles.infoText}>Wind Speed</Text>

                        </View>
                    </LinearGradient>

                </View>

                <View style={styles.extraInfo}>
                    <LinearGradient
                        colors={['#eceef2', '#d1ebff', '#a6ebff',]}
                        style={styles.gradient}>
                        <View style={styles.info}>
                            <Image
                                style={styles.smallIcon}
                                source={require('../assets/sunrise.png')}
                            />
                            <Text style={styles.infoText}>{new Date(sunrise * 1000).toLocaleString()}</Text>
                            <Text style={styles.infoText}>Sunrise</Text>

                        </View>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#eceef2', '#d1ebff', '#a6ebff',]}
                        style={styles.gradient}>
                        <View style={styles.info}>
                            <Image
                                style={styles.smallIcon}
                                source={require('../assets/sunset.png')}
                            />
                            <Text style={styles.infoText}>{new Date(sunset * 1000).toLocaleString()}</Text>
                            <Text style={styles.infoText}>Sunset</Text>

                        </View>
                    </LinearGradient>
                </View>
            </SafeAreaView>
        </ScrollView>

    )
}

export default WeatherInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    headerContainer: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        marginBottom: 2,
    },

    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0690B8',
        marginTop: 10,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    largeIcon: {
        width: 150,
        height: 150,
    },
    currentTemp: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    extraInfo: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 7,
        marginTop: 2
    },
    info: {
        width: Dimensions.get('screen').width / 2.5,
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',

    },

    gradient: {
        width: Dimensions.get('screen').width / 2.5,
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    smallIcon: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 18,
    },

})