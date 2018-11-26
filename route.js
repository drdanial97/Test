import { StackNavigator } from "react-navigation";
import Home from "./home";
import About from "./about";

// import { About } from "./index";

const RootNavigator = StackNavigator(
  {
    Home: { screen: Home },
    About: { screen: About }
  },
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: "Home"
  }
);

export { RootNavigator };
