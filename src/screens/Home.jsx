import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, Dimensions, StatusBar, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';

import {connect} from 'react-redux';

import MyText from '@/customComponents/MyText';
import Icon from '@/customComponents/Icon';

import HomeItemBackground from '@/assets/images/home-item-background.png';
import HomeItem from '@/assets/images/home-item.png';
import HomeItem2 from '@/assets/images/home-item-2.png';

import {style} from '@/assets/styles/Home.js';
import {styleCaption} from '@/assets/styles/Base.js';

const Home = ({navigation}) => {

    const [search, setSearch] = useState('');

    let arr = [1,1,1,1,1];

    return (
        <>
            <StatusBar backgroundColor="transparent" translucent/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={style.scroll}
            >
                <View style={style.figure1} />

                <View style={style.search}>
                    <MyText style={style.search.logo}>Mall</MyText>
                    <View style={style.search.input_container}>
                        <Icon style={style.search.input_icon} path={'@/assets/images/svg/search-icon.svg'}/>
                        <TextInput style={style.search.input_text} onChangeText={setSearch} onSubmitEditing={(e) => {
                            console.log(e);
                        }} value={search} placeholder="Введите слово поиска..."/>
                    </View>
                </View>

                <View style={style.menu.list}>
                    <View style={style.menu.item}>
                        <Icon style={style.menu.icon} path="@/assets/images/svg/home-menu/1.svg"/>
                        <MyText style={style.menu.text}>VIP</MyText>
                    </View>
                    <View style={style.menu.item}>
                        <Icon style={style.menu.icon} path="@/assets/images/svg/home-menu/2.svg"/>
                        <MyText style={style.menu.text}>Seasonal Fresh</MyText>
                    </View>
                    <View style={style.menu.item}>
                        <Icon style={style.menu.icon} path="@/assets/images/svg/home-menu/3.svg"/>
                        <MyText style={style.menu.text}>Baking</MyText>
                    </View>
                    <View style={style.menu.item}>
                        <Icon style={style.menu.icon} path="@/assets/images/svg/home-menu/4.svg"/>
                        <MyText style={style.menu.text}>Kitchen Appliances</MyText>
                    </View>
                    <View style={style.menu.item}>
                        <Icon style={style.menu.icon} path="@/assets/images/svg/home-menu/5.svg"/>
                        <MyText style={style.menu.text}>Grain</MyText>
                    </View>
                    <View style={style.menu.item}>
                        <Icon style={style.menu.icon} path="@/assets/images/svg/home-menu/6.svg"/>
                        <MyText style={style.menu.text}>Health</MyText>
                    </View>
                    <View style={style.menu.item}>
                        <Icon style={style.menu.icon} path="@/assets/images/svg/home-menu/7.svg"/>
                        <MyText style={style.menu.text}>Tea Drinking</MyText>
                    </View>
                    <View style={style.menu.item}>
                        <Icon style={style.menu.icon} path="@/assets/images/svg/home-menu/8.svg"/>
                        <MyText style={style.menu.text}>All</MyText>
                    </View>
                </View>

                <View>
                    <View style={styleCaption}>
                        <MyText style={styleCaption.title}>Kill Every Second</MyText>
                        <MyText style={styleCaption.link}>View all</MyText>
                    </View>
                    <ScrollView horizontal={true} style={style.items_main.container} contentContainerStyle={style.items_main} showsHorizontalScrollIndicator={false}>
                        {
                            arr.map((item, index) => (
                                <View style={style.items_main.item} key={index}>
                                    <ImageBackground style={style.items_main.item.background} source={HomeItemBackground}>
                                        <Image source={HomeItem} style={style.items_main.item.image}/>
                                        <MyText style={style.items_main.item.title}>Natnudo Beef</MyText>
                                        <MyText style={style.items_main.item.price}>$ 15.9/catty</MyText>
                                        <View style={style.items_main.item.category.container}>
                                            <MyText style={style.items_main.item.category.text}>Parcels</MyText>
                                        </View>
                                        <Icon style={style.items_main.item.like} path="@/assets/images/svg/like-icon.svg"/>
                                    </ImageBackground>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>

                <View>
                    <View style={styleCaption}>
                        <MyText style={styleCaption.title}>Weekly Bursts</MyText>
                        <MyText style={styleCaption.link}>View all</MyText>
                    </View>
                    <ScrollView horizontal={true} style={style.items_second.container} contentContainerStyle={style.items_second} showsHorizontalScrollIndicator={false}>
                        {
                            arr.map((item, index) => (
                                <TouchableWithoutFeedback onPress={() => {
                                    navigation.navigate('Modal');
                                }} key={index}>
                                    <View style={style.items_second.item}>
                                        <ImageBackground style={style.items_second.item.background} source={HomeItem2}>
                                            <MyText style={style.items_second.item.title}>Gala</MyText>
                                            <MyText style={style.items_second.item.price}>$ 16.9/catty</MyText>
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
