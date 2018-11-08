/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";
import axios from "axios";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    articles: []
  };
  // componentDidMount() {
  //   axios.get(`http://192.168.137.1:1234/wcf/omidservice.svc/ArticlesList/-1`)
  //     .then(res => {
  //       const articles = res.data.ArticlesListResult;
  //       this.setState({ articles });
  //     })
  // }
  render() {
    return (
      <View>
        <Text>Daniel</Text>
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
