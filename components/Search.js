import React from "react";
import { TextInput, Button, View } from "react-native";
import style from "../Style";
// import { StackNavigator } from "react-navigation";

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Munich",
      placeholder: "Ecrire le nom d'une ville"
    };
  }

  setCity(city) {
    this.setState({ city: city });
  }

  submit() {
    this.props.navigation.navigate("Result", { city: this.state.city });
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput
          style={style.textInput}
          placeholder={this.state.placeholder}
          underlineColorAndroid="transparent"
          onChange={text => this.setState(text)}
          style={style.textInput}
          value={this.state.city}
        />
        <Button
          color="#a2273c"
          onPress={() => this.submit()}
          title="Rechercher une ville"
        />
      </View>
    );
  }
}
