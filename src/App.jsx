import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const App = () => {
    return (
        <SafeAreaView>
            <StatusBar/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View>
                    <Text>dsadas</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
