import React from 'react';
import { Button, View, Text } from "react-native";
import style from "../Style";

 export default class AboutScreen extends React.Component {


    search() {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>A propos de moi</Text>
                <Text style={style.aPropos}>Je suis juslin Komenan. Je fais du React native</Text>

                <Button
                color="#a2273c"
                onPress={() => this.search()}
                title="Rechercher"
                />
            </View>
        )
    }

}
