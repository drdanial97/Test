import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>About</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
