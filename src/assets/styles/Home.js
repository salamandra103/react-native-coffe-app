import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const style = StyleSheet.compose({
    scroll: {
        backgroundColor: '#eee',
        flexGrow: 1,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 19,
        marginHorizontal: 30,
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
            marginHorizontal: 30,
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
    items_main: {
        marginLeft: -6,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
        container: {
            width: windowWidth + 12,
            marginBottom: 20,
        },
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
    items_second: {
        marginLeft: -6,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
        container: {
            width: windowWidth + 12,
            marginBottom: 20,
        },
        item: {
            width: 100,
            height: 200,
            borderRadius: 10,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 6,
            title: {
                fontSize:16,
                color: '#303843',
                marginBottom: 2,
            },
            price: {
                fontSize: 10,
                color: '#F5A623',
            },
            background: {
                flex: 1,
                resizeMode: 'cover',
                paddingLeft: 17,
                paddingTop: 18,
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
});
