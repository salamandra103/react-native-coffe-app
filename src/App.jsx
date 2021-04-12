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

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const App = () => {


    const MainStackScreen = () => (
        <MainStack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
        }}>
            <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
    );

    const ModalScreen = () => (
        <View>
            <Text>Модальное окно</Text>
        </View>
    );

    return (
        <Provider store={store}>
            <StatusBar/>
            <SafeAreaProvider>
                <NavigationContainer>
                    <RootStack.Navigator mode="modal" initialRouteName="Modal">
                        <RootStack.Screen name="Main" options={{headerShown: false}} component={MainStackScreen} />
                        <RootStack.Screen name="Modal" options={{headerShown: false}} getComponent={() => require('./containers/Modal').default} />
                    </RootStack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
