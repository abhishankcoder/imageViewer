import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import addimg from './Screens/Addimg'
import Add from './Screens/Add'


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen options={{ headerShown: false }} name="Employee" component={Employee} /> */}
      {/* <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} /> */}

        {/* <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="addimg" component={addimg} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Add" component={Add} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;