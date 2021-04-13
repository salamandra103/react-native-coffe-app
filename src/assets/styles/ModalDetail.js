import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
    topContainer: {
        backgroundColor: '#6AA3C1',
        paddingTop: 48,
        paddingHorizontal: 30,
        height: '40%',
        position: 'relative',
        marginBottom: -50,
    },
    topContainerImage: {
        position: 'absolute',
        top: 15,
        left: -65,
        width: 500,
        height: 500,
        resizeMode: 'center',
    },
    wrapper: {
        paddingHorizontal: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex: 1,
        paddingTop: 20,
        paddingBottom: 10,
        marginBottom: -40,
        backgroundColor: '#fff',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
    },
    priceMain: {
        color: '#F5A623',
        fontSize: 16,
        marginRight: 10,
    },
    priceOld: {
        color: '#999999',
        textDecorationLine: 'line-through',
        fontSize: 12,
    },
    codeContainer: {
        marginBottom: 10,
    },
    codeText: {
        fontSize: 12,
        color: '#999999',
    },
    promotionWrapper: {
        backgroundColor: '#E0EFF6',
    },
    promotionBlock: {
        marginBottom: 20,
    },
    promotionText: {
        marginRight: 10,
    },
    promotionTextMain: {
        fontSize: 16,
        color: '#303843',
        fontWeight: '500',
    },
    promotionArrow: {
        width: 50,
        height: 50,
    },
});
