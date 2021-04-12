import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const style = StyleSheet.compose({
    background: {
        backgroundColor: '#6AA3C1',
        paddingTop: 48,
        paddingHorizontal: 30,
        height: '40%',
        position: 'relative',
        marginBottom: -50,
        image: {
            position: 'absolute',
            top: 15,
            left: -65,
            width: 500,
            height: 500,
            resizeMode: 'center',
        },
    },
    wrapper: {
        paddingHorizontal: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 20,
        paddingBottom: 10,
    },
    price: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
        main: {
            color: '#F5A623',
            fontSize: 16,
            marginRight: 10,
        },
        old: {
            color: '#999999',
            textDecoration: 'line-through',
            textDecoratioColor: '#999999',
            fontSize: 12,
        },
    },
    code: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 10,
        text: {
            fontSize: 12,
            color: '#999999',
        },
    },
});
