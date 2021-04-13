import React from 'react';
import {View, Text, ScrollView, Image, StatusBar, TouchableWithoutFeedback} from 'react-native';

import MyText from '@/customComponents/MyText';
import Icon from '@/customComponents/MyText';

import ModalDefailItem from '@/assets/images/modal-detail-item.png';

import {style} from '@/assets/styles/ModalDetail';
import {styleCaption, styleScroll, styleGrid} from '@/assets/styles/Base.js';


const Modal = ({route, navigation}) => {
    return (
        <>
            <StatusBar backgroundColor="transparent" translucent/>

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={styleScroll.container}
            >
                <View style={style.topContainer}>
                    <Image source={ModalDefailItem} style={style.topContainerImage}/>
                </View>
                <View style={style.wrapper}>
                    <Text style={styleCaption.titleBig}>New Zealand Gara</Text>
                    <Text style={styleCaption.note}>Sour sweet delicious, beauty and beauty</Text>
                    <View style={[style.priceContainer, styleGrid.row, styleGrid.alignEnd]}>
                        <MyText style={style.priceMain}>$ 16.9/catty</MyText>
                        <MyText style={style.priceOld}>$ 29.9/catty</MyText>
                    </View>
                    <View style={[style.codeContainer, styleGrid.row, styleGrid.alignEnd, styleGrid.justifyBetween]}>
                        <MyText style={style.codeText}>Sold 2394</MyText>
                        <MyText style={style.codeText}>New Zealand</MyText>
                    </View>
                </View>
                <View style={[style.wrapper, style.promotionWrapper]}>
                    <View style={[styleGrid.row, styleGrid.alignCenter, style.promotionBlock]}>
                        <MyText style={[style.promotionTextMain, style.promotionText]}>Promotion</MyText>
                        <View style={[styleCaption.tagBlock, style.promotionText]}>
                            <MyText style={styleCaption.tagText}>Full minus</MyText>
                        </View>
                        <MyText style={styleCaption.note}>Shop full 58 minus 5   full 79 minus 8 </MyText>
                    </View>
                    <View style={[styleGrid.row, styleGrid.alignCenter, style.promotionBlock]}>
                        <MyText style={[style.promotionTextMain, style.promotionText]}>Deliver to</MyText>
                        <MyText style={styleCaption.note}>San Francisco, CA</MyText>
                    </View>
                    <Icon style={style.promotionArrow} path="@/assets/images/svg/right-arrow-icon.svg"/>

                </View>
                <View style={style.wrapper}>
                    <View style={[styleGrid.row, styleGrid.alignCenter, style.promotionBlock]}>
                        <MyText style={[style.promotionTextMain, style.promotionText]}>Deliver to</MyText>
                        <MyText style={styleCaption.note}>San Francisco, CA</MyText>
                    </View>
                </View>
            </ScrollView>

        </>
    );
};

export default Modal;
