import react, { Component } from "react";
const { navigate } = this.props.navigate;
class home extends Component() {
  render() {
    return (
      <View>
        <Text onPrees={() => navigate("About")}>Home</Text>
      </View>
    );
  }
}
