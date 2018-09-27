import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Weather</Text>),
        }
    }
    render() {
        return (
        <Weather zipCode="90110"/>
        );
    }
}
   