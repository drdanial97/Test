import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "orange" }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("About")}
        >
          <Text style={{ fontSize: 36 }}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
