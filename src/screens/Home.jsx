import React from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, Dimensions, StatusBar} from 'react-native';

import {connect} from 'react-redux';

import MyText from '@/customComponents/MyText';
import Icon from '@/customComponents/Icon';

import IconSearchSvg from '@/assets/images/svg/search-icon.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
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
                        <IconSearchSvg style={style.search.input_icon}/>
                        <TextInput style={style.search.input_text} value={'dsadas'}/>
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
            </ScrollView>
        </>
    );
};

const style = StyleSheet.compose({
    scroll: {
        backgroundColor: '#eee',
        flexGrow: 1,
        position: 'relative',
        paddingTop: 48,
        paddingLeft: 30,
        paddingRight: 30,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 19,
        logo: {
            color: 'white',
            marginRight: 22,
            fontSize: 20,
            fontWeight: '700',
        },
        input_text: {
            fontFamily: 'Dosis-Regular',
            fontSize: 12,
        },
        input_icon: {
            position: 'absolute',
            left: 16,
            top: 9,

        },
        input_container: {
            backgroundColor: '#fff',
            flexGrow: 1,
            paddingLeft: 44,
            paddingRight: 15,
            height: 36,
            borderRadius: 999,
            flexDirection: 'row',
            alignItems: 'center',
        },
    },
    menu: {
        list: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 40,
            borderTopRightRadius: 40,
            borderBottomRightRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 15,
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        item: {
            width: '25%',
            alignItems: 'center',
            marginBottom: 12,
        },
        icon: {
            marginBottom: 5,
            maxWidth: 36,
            maxHeight: 36,
            width: '100%',
            height: '100%',
        },
        text: {
            fontSize: 10,
            fontWeight: '500',
            color: '#666666',
            textAlign: 'center',
        },
    },
    figure1: {
        position: 'absolute',
        top: -windowWidth * 0.8,
        borderRadius: 999,
        left: 0,
        transform: [
            {
                translateX: -windowWidth / 3.8,
            },
        ],
        backgroundColor: '#6AA3C1',
        width: windowWidth * 1.5,
        height: windowWidth * 1.5,
    },
});

export default Home;
