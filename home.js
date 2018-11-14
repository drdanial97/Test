import react, { Component } from "react";
conts navigate = {this.props.navigate};
class home extends Component() {
  render() {
    return (
      <View>
        <Text onPrees={()=> navigate("About")}>Home</Text>
      </View>
    );
  }
}
