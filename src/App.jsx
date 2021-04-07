import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Redux
import {Provider} from 'react-redux';
import store from '@/store/';

// Screens
import Home from '@/screens/Home';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar/>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home" screenOptions={{
                        headerShown: false,
                    }}>
                        <Stack.Screen name="Home" component={Home} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
