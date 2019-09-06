import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/login/Login'
import Users from './screens/users/Users'
import User from './screens/user/User'
import RedirectInit from './redirect_init/RedirectInit'
import HeaderUsers from './screens/users/header/Header'

const UsersNavigation = { 
  Users: {
    screen: Users,
    navigationOptions: HeaderUsers,
  },
  User: User 
}

const UsersRoute = createStackNavigator(UsersNavigation);
const LoginRoute = createStackNavigator({ 
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    }   
});

export default createAppContainer(createSwitchNavigator(
  {
    RedirectInit: RedirectInit,
    UsersRoute: UsersRoute,
    LoginRoute: LoginRoute,
  },
  {
    initialRouteName: 'RedirectInit',
  }
));