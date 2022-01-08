import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from './components/Home'
import About from './components/About'
import ReviewDetail from './components/ReviewDetail'

const screens = {
    Home: {
        screen: Home
    },
    About: {
        screen: About
    },
    ReviewDetail: {
        screen: ReviewDetail 
    }
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);