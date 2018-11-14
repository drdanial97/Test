/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {RootNavigator} from './route';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";

export default class App extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <View>
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  MyTitle: {
    marginBottom: 50
  }
});
