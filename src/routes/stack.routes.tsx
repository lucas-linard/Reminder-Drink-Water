import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";
const { Screen, Navigator } = createNativeStackNavigator();

import gender from "../screens/onboarding/gender";
import weight from "../screens/onboarding/weight";
import wakeUpTime from "../screens/onboarding/wakeUpTime";
import sleepTime from "../screens/onboarding/sleepTime";

export function StackRoutes() {
    return (
      <Navigator initialRouteName="tab" screenOptions={{headerShown: false}}>
        <Screen name="gender" component={gender} />
        <Screen name="weight" component={weight} />
        <Screen name="wakeUpTime" component={wakeUpTime} />
        <Screen name="sleepTime" component={sleepTime} />
        <Screen name="tab" component={TabRoutes} />
      </Navigator>
    );
}