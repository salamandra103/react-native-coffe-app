import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, Dimensions, StatusBar, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';

import {connect} from 'react-redux';

import MyText from '@/customComponents/MyText';
import Icon from '@/customComponents/Icon';

import HomeItemBackground from '@/assets/images/home-item-background.png';
import HomeItem from '@/assets/images/home-item.png';
import HomeItem2 from '@/assets/images/home-item-2.png';

import {style} from '@/assets/styles/Home.js';
import {styleCaption, styleScroll} from '@/assets/styles/Base.js';

const Home = ({navigation}) => {

    const [search, setSearch] = useState('');

    let arr = [1,1,1,1,1];

    return (
        <>
            <StatusBar backgroundColor="transparent" translucent/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={style.scrollContainer}
            >
                <View style={style.figure1} />

                <View style={style.searchContainer}>
                    <MyText style={style.searchLogo}>Mall</MyText>
                    <View style={style.searchInputContainer}>
                        <Icon style={style.searchInputIcon} path={'@/assets/images/svg/search-icon.svg'}/>
                        <TextInput style={style.searchInputText} onChangeText={setSearch} onSubmitEditing={(e) => {
                            console.log(e);
                        }} value={search} placeholder="Введите слово поиска..."/>
                    </View>
                </View>

                <View style={style.menuContainer}>
                    <View style={style.menuItem}>
                        <Icon style={style.menuIcon} path="@/assets/images/svg/home-menu/1.svg"/>
                        <MyText style={style.menuText}>VIP</MyText>
                    </View>
                    <View style={style.menuItem}>
                        <Icon style={style.menuIcon} path="@/assets/images/svg/home-menu/2.svg"/>
                        <MyText style={style.menuText}>Seasonal Fresh</MyText>
                    </View>
                    <View style={style.menuItem}>
                        <Icon style={style.menuIcon} path="@/assets/images/svg/home-menu/3.svg"/>
                        <MyText style={style.menuText}>Baking</MyText>
                    </View>
                    <View style={style.menuItem}>
                        <Icon style={style.menuIcon} path="@/assets/images/svg/home-menu/4.svg"/>
                        <MyText style={style.menuText}>Kitchen Appliances</MyText>
                    </View>
                    <View style={style.menuItem}>
                        <Icon style={style.menuIcon} path="@/assets/images/svg/home-menu/5.svg"/>
                        <MyText style={style.menuText}>Grain</MyText>
                    </View>
                    <View style={style.menuItem}>
                        <Icon style={style.menuIcon} path="@/assets/images/svg/home-menu/6.svg"/>
                        <MyText style={style.menuText}>Health</MyText>
                    </View>
                    <View style={style.menuItem}>
                        <Icon style={style.menuIcon} path="@/assets/images/svg/home-menu/7.svg"/>
                        <MyText style={style.menuText}>Tea Drinking</MyText>
                    </View>
                    <View style={style.menuItem}>
                        <Icon style={style.menuIcon} path="@/assets/images/svg/home-menu/8.svg"/>
                        <MyText style={style.menuText}>All</MyText>
                    </View>
                </View>

                <View>
                    <View style={styleCaption.container}>
                        <MyText style={styleCaption.title}>Kill Every Second</MyText>
                        <MyText style={styleCaption.link}>View all</MyText>
                    </View>
                    <ScrollView horizontal={true} style={style.itemsMainScroll} contentContainerStyle={style.itemsMainContainer} showsHorizontalScrollIndicator={false}>
                        {
                            arr.map((item, index) => (
                                <View style={style.itemsMainItem} key={index}>
                                    <ImageBackground style={style.itemsMainItemBackground} source={HomeItemBackground}>
                                        <Image source={HomeItem} style={style.itemsMainItemImage}/>
                                        <MyText style={style.itemsMainItemTitle}>Natnudo Beef</MyText>
                                        <MyText style={style.itemsMainItemPrice}>$ 15.9/catty</MyText>
                                        <View style={style.itemsMainItemCategoryBlock}>
                                            <MyText style={style.itemsMainItemCategoryText}>Parcels</MyText>
                                        </View>
                                        <Icon style={style.itemsMainItemLike} path="@/assets/images/svg/like-icon.svg"/>
                                    </ImageBackground>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>

                <View>
                    <View style={styleCaption.container}>
                        <MyText style={styleCaption.title}>Weekly Bursts</MyText>
                        <MyText style={styleCaption.link}>View all</MyText>
                    </View>
                    <ScrollView horizontal={true} style={style.itemsSecondScroll} contentContainerStyle={style.itemsSecondContainer} showsHorizontalScrollIndicator={false}>
                        {
                            arr.map((item, index) => (
                                <TouchableWithoutFeedback onPress={() => {
                                    navigation.navigate('Modal');
                                }} key={index}>
                                    <View style={style.itemsSecondItem}>
                                        <ImageBackground style={style.itemsSecondItemBackground} source={HomeItem2}>
                                            <MyText style={style.itemsSecondItemTitle}>Gala</MyText>
                                            <MyText style={style.itemsSecondItemPrice}>$ 16.9/catty</MyText>
                                        </ImageBackground>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))
                        }
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    );
};

export default Home;
