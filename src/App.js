import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
    LogBox.ignoreAllLogs();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerShown: true,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;