import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
    return (
        <View>
            <Text style={styles.text}>{this.props.main}</Text>
            <Text style={styles.text}>{this.props.description}</Text>
            <Text style={styles.text}>{this.props.temp}</Text>
            <Text style={styles.text}>°C</Text>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
});