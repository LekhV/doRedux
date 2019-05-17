import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsSreen'
import {
  BATMAN_HOME,
  BATMAN_DETAILS
} from '../routs'

export default createStackNavigator(
  {
    [BATMAN_HOME]: HomeScreen,
    [BATMAN_DETAILS]: DetailsScreen
  },
  {
    initialRouteName: BATMAN_HOME,
    headerMode: 'none'
  }
)