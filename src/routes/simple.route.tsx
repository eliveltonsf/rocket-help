import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/SignIn";
import CreateAccount from "../screens/CreateAccount";

const { Navigator, Screen } = createNativeStackNavigator();

export function SimpleRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="createAccount" component={CreateAccount} />
    </Navigator>
  );
}
