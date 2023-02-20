import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import gender from "../screens/onboarding/gender";
import weight from "../screens/onboarding/weight";
import wakeUpTime from "../screens/onboarding/wakeUpTime";
import sleepTime from "../screens/onboarding/sleepTime";


export function StackRoutes() {
    return (
      <Navigator>
        <Screen name="gender" component={gender} />
        <Screen name="weight" component={weight} />
        <Screen name="wakeUpTime" component={wakeUpTime} />
        <Screen name="sleepTime" component={sleepTime} />
      </Navigator>
    );
}