import {StackNavigator} from 'react-navigation';
import {Home} from './index';
import {About} from './index';

const RootNavigator = StackNavigator({
    Home: {screen: Home},
    About: {screen: About}

},{
    headerMode: 'none',
    mode:'modal'
    
    })

export {RootNavigator};