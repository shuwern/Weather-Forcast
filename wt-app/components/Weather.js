import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }
    
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                {
                    forecast: {
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    }
                });
            })
        .catch((error) => {
            console.warn(error);
        });
    }
       
        componentDidMount = () => this.fetchData()

    render() {
        return (
            <View >
                <ImageBackground source={require('../bg/Pixel-2-Rainy-day-wallpaper-1.png')} style={styles.backdrop}>
                    <View style={styles.contentBox}>
                        <Text style={styles.text}>Zip code is {this.props.zipCode}.</Text>
                        <Forecast {...this.state.forecast} />
                    </View>                
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    backdrop: { width: '100%', height: '100%'},
    contentBox: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        opacity: 0.2
    },
    text: {
        color: 'black',
        opacity: 1.0,
        fontSize: 20,
        fontWeight: 'bold'
    }
});
   