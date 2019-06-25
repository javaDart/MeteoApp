import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr';
import globalStyle from '../../Style';
import { Ionicons } from '@expo/vector-icons';
import FadeInView from "../animation/fadeInView";
import { View, Text, StyleSheet } from "react-native";

moment.locale('fr')

export default class Row extends React.Component {

    static propTypes = {
        day: PropTypes.object,
        index: PropTypes.number
    };

    icon( size=50) {
        const type = this.props.day.weather[0].main.toLowerCase()
        let iconName;

        switch (type) {
            case 'clouds':
                iconName = `ios-cloud`
                break;
            case 'rain':
                iconName = `ios-water`
                break;
            default:
                iconName = `ios-sunny`
                break;
        }

        return <Ionicons name={iconName} style={[style.white, {fontSize: size}]} />;
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{day}</Text>
        )
    }

    render() {

        if (this.props.index === 0) {
            return (
                <View style={[style.flex, style.view, style.firstView]}>
                    <View>
                        <Text style={{ color: "#fff" }}>{this.day()} {this.date()} </Text>
                        {this.icon(90)}
                    </View>
                    <Text style={[style.temp, {fontSize: 35}]}>{Math.round(this.props.day.temp.day)} °C</Text>
                </View>
            )
        } else {
            return (
                <View style={[style.flex, style.view]}>
                    <View style={style.flex}>
                        {this.icon()}
                        <Text style={{ marginLeft: 10 }}>{this.day()} {this.date()} </Text>
                    </View>
                    <Text style={style.temp}>{Math.round(this.props.day.temp.day)} °C</Text>
                </View>
            )
        }
    }

}

const style = StyleSheet.create({
    white: {
        color: "#fff"
    },

    bold: {
        fontWeight: "bold"
    },

    flex: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },

    firstView: {
        backgroundColor: "#e54b65"
    },

    view: {
        backgroundColor: "#394163",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#202340",
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: "space-between"
    },
    temp: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 22
    }
})