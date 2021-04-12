import React from 'react';
import {View, Text, ScrollView, Image, StatusBar} from 'react-native';

import MyText from '@/customComponents/MyText';

import ModalDefailItem from '@/assets/images/modal-detail-item.png';

import {style} from '@/assets/styles/ModalDetail';
import {styleCaption, styleScroll} from '@/assets/styles/Base.js';


const Modal = ({route, navigation}) => {
    return (
        <>
            <StatusBar backgroundColor="transparent" translucent/>

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={[styleScroll, style.scroll]}
            >
                <View style={style.background}>
                    <Text>Модальное окно</Text>
                    <Image source={ModalDefailItem} style={style.background.image}/>
                </View>
                <View style={style.wrapper}>
                    <Text style={[styleCaption.title, styleCaption.title.big]}>New Zealand Gara</Text>
                    <Text style={styleCaption.note}>Sour sweet delicious, beauty and beauty</Text>
                    <View style={style.price}>
                        <MyText style={style.price.main}>$ 16.9/catty</MyText>
                        <MyText style={style.price.old}>$ 29.9/catty</MyText>
                    </View>
                    <View style={style.code}>
                        <MyText style={style.code.text}>Sold 2394</MyText>
                        <MyText style={style.code.text}>New Zealand</MyText>
                    </View>
                </View>
            </ScrollView>

        </>
    );
};

export default Modal;
