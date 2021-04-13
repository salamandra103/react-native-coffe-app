import React from 'react';
import {View, Text, ScrollView, Image, StatusBar, TouchableWithoutFeedback} from 'react-native';

import MyText from '@/customComponents/MyText';
import Icon from '@/customComponents/MyText';

import ModalDefailItem from '@/assets/images/modal-detail-item.png';
import CommentAvatar from '@/assets/images/comment-avatar.png';

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
                    <View style={styleCaption.container}>
                        <MyText style={styleCaption.title}>Evaluation Of Sun Sheets</MyText>
                        <MyText style={styleCaption.link}>View all</MyText>
                    </View>
                    <View style={style.commentContainer}>
                        <View style={[styleGrid.row, styleGrid.alignCenter, style.commentTopBlock]}>
                            <Image source={CommentAvatar} style={style.commentAvatar}/>
                            <View>
                                <View style={[styleGrid.row, styleGrid.alignCenter]}>
                                    <MyText style={style.commentTitle}>Jabel Ahmed</MyText>
                                    <View style={style.commentStatusBlock}>
                                        <MyText style={style.commentStatusText}>VIP</MyText>
                                    </View>
                                    <MyText style={style.commentLevel}>LV.2</MyText>
                                </View>
                                <MyText style={styleCaption.note}>Sylhet   1 hour ago</MyText>
                            </View>
                        </View>
                        <MyText style={style.commentText}>
                            This time to buy fruit is not bad, good happy, note buyers pack good point, really a fruit bag two pearl bags, green apples are powdered, thought it is crisp that kind of it! But it's also delicious.
                        </MyText>
                    </View>
                    <View style={style.commentContainer}>
                        <View style={[styleGrid.row, styleGrid.alignCenter, style.commentTopBlock]}>
                            <Image source={CommentAvatar} style={style.commentAvatar}/>
                            <View>
                                <View style={[styleGrid.row, styleGrid.alignCenter]}>
                                    <MyText style={style.commentTitle}>Jabel Ahmed</MyText>
                                    <MyText style={style.commentLevel}>LV.1</MyText>
                                </View>
                                <MyText style={styleCaption.note}>Sylhet   1 day ago</MyText>
                            </View>
                        </View>
                        <MyText style={style.commentText}>
                            Apple received, very large and brittle, water is also sufficient, really delicious, next time also come to your home to buy!
                        </MyText>
                    </View>
                    <View style={style.commentContainer}>
                        <View style={[styleGrid.row, styleGrid.alignCenter, style.commentTopBlock]}>
                            <Image source={CommentAvatar} style={style.commentAvatar}/>
                            <View>
                                <View style={[styleGrid.row, styleGrid.alignCenter]}>
                                    <MyText style={style.commentTitle}>Mahady Hasan Rony </MyText>
                                    <MyText style={style.commentLevel}>LV.1</MyText>
                                </View>
                                <MyText style={styleCaption.note}>Bangladesh   4 day ago</MyText>
                            </View>
                        </View>
                        <MyText style={style.commentText}>
                            Praise! Praise! Praise!
                        </MyText>
                    </View>
                </View>
            </ScrollView>

        </>
    );
};

export default Modal;
