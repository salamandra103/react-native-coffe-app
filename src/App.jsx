import React, {useEffect} from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

// Redux
import {Provider} from 'react-redux';
import store from '@/store/';

// Screens
import Home from '@/screens/Home';

// Containers
import Modal from '@/containers/Modal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const App = () => {

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    }

    useEffect(() => {
        requestUserPermission();

        const unsubscribe = messaging().onMessage(async remoteMessage => {
            PushNotification.localNotification({
                message: remoteMessage.notification.body,
                title: remoteMessage.notification.title,
                bigPictureUrl: remoteMessage.notification.android.imageUrl,
                smallIcon: remoteMessage.notification.android.imageUrl,
            });
        });

        // return unsubscribe;
    }, []);

    const MainStackScreen = () => (
        <MainStack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
        }}>
            <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
    );

    return (
        <Provider store={store}>
            <StatusBar/>
            <SafeAreaProvider>
                <NavigationContainer>
                    <RootStack.Navigator mode="modal" initialRouteName="Main">
                        <RootStack.Screen name="Main" options={{headerShown: false}} component={MainStackScreen} />
                        <RootStack.Screen name="Modal" options={{headerShown: false}} component={Modal}/>
                    </RootStack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
