import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, Dimensions, StatusBar, ImageBackground, Image} from 'react-native';

import {connect} from 'react-redux';

import MyText from '@/customComponents/MyText';
import Icon from '@/customComponents/Icon';

import HomeItemBackground from '@/assets/images/home-item-background.png';
import HomeItem from '@/assets/images/home-item.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {

    const [search, setSearch] = useState('');

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
                    <View style={style.caption}>
                        <MyText style={style.text.titleBlack}>Kill Every Second</MyText>
                        <MyText style={style.text.linkYellow}>View all</MyText>
                    </View>
                    <ScrollView horizontal="true" contentContainerStyle={style.items}>
                        <View style={style.items.item}>
                            <ImageBackground style={style.items.item.background} source={HomeItemBackground}>
                                <Image source={HomeItem} style={style.items.item.image}/>
                                <Text style={style.items.item.title}>Natnudo Beef</Text>
                                <Text style={style.items.item.price}>$ 15.9/catty</Text>
                                <View style={style.items.item.category.container}>
                                    <Text style={style.items.item.category.text}>Parcels</Text>
                                </View>
                                <Icon style={style.items.item.like} path="@/assets/images/svg/like-icon.svg"/>
                            </ImageBackground>
                        </View>
                        <View style={style.items.item}>
                            <ImageBackground style={style.items.item.background} source={HomeItemBackground}>
                                <Image source={HomeItem} style={style.items.item.image}/>
                                <Text style={style.items.item.title}>Natnudo Beef</Text>
                                <Text style={style.items.item.price}>$ 15.9/catty</Text>
                                <View style={style.items.item.category.container}>
                                    <Text style={style.items.item.category.text}>Parcels</Text>
                                </View>
                                <Icon style={style.items.item.like} path="@/assets/images/svg/like-icon.svg"/>
                            </ImageBackground>
                        </View>
                        <View style={style.items.item}>
                            <ImageBackground style={style.items.item.background} source={HomeItemBackground}>
                                <Image source={HomeItem} style={style.items.item.image}/>
                                <Text style={style.items.item.title}>Natnudo Beef</Text>
                                <Text style={style.items.item.price}>$ 15.9/catty</Text>
                                <View style={style.items.item.category.container}>
                                    <Text style={style.items.item.category.text}>Parcels</Text>
                                </View>
                                <Icon style={style.items.item.like} path="@/assets/images/svg/like-icon.svg"/>
                            </ImageBackground>
                        </View>
                        <View style={style.items.item}>
                            <ImageBackground style={style.items.item.background} source={HomeItemBackground}>
                                <Image source={HomeItem} style={style.items.item.image}/>
                                <Text style={style.items.item.title}>Natnudo Beef</Text>
                                <Text style={style.items.item.price}>$ 15.9/catty</Text>
                                <View style={style.items.item.category.container}>
                                    <Text style={style.items.item.category.text}>Parcels</Text>
                                </View>
                                <Icon style={style.items.item.like} path="@/assets/images/svg/like-icon.svg"/>
                            </ImageBackground>
                        </View>
                    </ScrollView>
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
            position: 'relative',
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
            paddingBottom: 3,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 20,
        },
        item: {
            width: '25%',
            alignItems: 'center',
            alignContent: 'flex-start',
            marginBottom: 12,
        },
        icon: {
            marginBottom: 5,
            maxWidth: 36,
            maxHeight: 36,
        },
        text: {
            fontSize: 10,
            fontWeight: '500',
            color: '#666666',
            textAlign: 'center',
        },
    },
    items: {
        marginHorizontal: -6,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        item: {
            width: 120,
            height: 170,
            borderRadius: 10,
            overflow: 'hidden',
            marginHorizontal: 6,
            image: {
                position: 'absolute',
                left: 10,
                top: 2,
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
            },
            title: {
                color: '#fff',
                fontSize: 12,
                marginBottom: 3,
            },
            price: {
                color: '#fff',
                fontSize: 10,
            },
            like: {
                position: 'absolute',
                right: 16,
                bottom: 21,
            },
            category: {
                container: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    backgroundColor: '#FFA119',
                    borderTopLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingHorizontal: 7,
                    paddingVertical: 2,
                },
                text: {
                    fontSize: 10,
                    color: '#fff',
                },
            },
            background: {
                flex: 1,
                resizeMode: 'cover',
                paddingVertical: 21,
                paddingHorizontal: 15,
                position: 'relative',
                justifyContent: 'flex-end',
            },
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
    text: {
        titleBlack: {
            color: '#303843',
            fontWeight: '700',
            fontSize: 16,
        },
        linkYellow: {
            color: '#F5A623',
            fontSize: 12,
            fontWeight: '600',
        },
    },
    caption: {
        marginBottom: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default Home;
