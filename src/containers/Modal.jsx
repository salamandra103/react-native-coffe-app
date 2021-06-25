import React from 'react';
import {ScrollView, StatusBar} from 'react-native';

import {styleScroll} from '@/assets/styles/Base.js';

const Modal = ({route, navigation}) => {
    return (
        <>
            <StatusBar backgroundColor="transparent" translucent/>

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={styleScroll.container}
            >
                {React.createElement(route.params.component, {...route.params.params, navigation, route})}
            </ScrollView>

        </>
    );
};

export default Modal;
