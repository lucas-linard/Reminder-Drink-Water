import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();


import home from "../screens/home";
import settings from "../screens/settings";


export function TabRoutes() {
    return (
      <Navigator initialRouteName='settings' screenOptions={{headerShown: false}}>
        <Screen name="home" component={home} />
        <Screen name="settings" component={settings} />
      </Navigator>
    );
}