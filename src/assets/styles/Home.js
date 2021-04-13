import {StyleSheet, Dimensions} from 'react-native';
import {styleScroll} from '@/assets/styles/Base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
    scrollContainer: {
        paddingTop: 48,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 19,
        marginHorizontal: 30,
    },
    searchLogo: {
        color: 'white',
        marginRight: 22,
        fontSize: 20,
        fontWeight: '700',
    },
    searchInputContainer: {
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
    searchInputText: {
        fontFamily: 'Dosis-Regular',
        fontSize: 12,
    },
    searchInputIcon: {
        position: 'absolute',
        left: 16,
        top: 9,
    },
    menuContainer: {
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
    menuItem: {
        width: '25%',
        alignItems: 'center',
        alignContent: 'flex-start',
        marginBottom: 12,
    },
    menuIcon: {
        marginBottom: 5,
        maxWidth: 36,
        maxHeight: 36,
    },
    menuText: {
        fontSize: 10,
        fontWeight: '500',
        color: '#666666',
        textAlign: 'center',
    },
    itemsMainScroll: {
        width: windowWidth + 12,
        marginBottom: 20,
    },
    itemsMainContainer: {
        marginLeft: -6,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    itemsMainItem: {
        width: 120,
        height: 170,
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 6,
    },
    itemsMainItemImage: {
        position: 'absolute',
        left: 10,
        top: 2,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    itemsMainItemTitle: {
        color: '#fff',
        fontSize: 12,
        marginBottom: 3,
    },
    itemsMainItemPrice: {
        color: '#fff',
        fontSize: 10,
    },
    itemsMainItemLike: {
        position: 'absolute',
        right: 16,
        bottom: 21,
    },
    itemsMainItemCategoryBlock: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#FFA119',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 7,
        paddingVertical: 2,
    },
    itemsMainItemCategoryText: {
        fontSize: 10,
        color: '#fff',
    },
    itemsMainItemBackground: {
        flex: 1,
        resizeMode: 'cover',
        paddingVertical: 21,
        paddingHorizontal: 15,
        position: 'relative',
        justifyContent: 'flex-end',
    },
    itemsSecondScroll: {
        width: windowWidth + 12,
        marginBottom: 20,
    },
    itemsSecondContainer: {
        marginLeft: -6,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    itemsSecondItem: {
        width: 100,
        height: 200,
        borderRadius: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 6,
    },
    itemsSecondItemTitle: {
        fontSize:16,
        color: '#303843',
        marginBottom: 2,
    },
    itemsSecondItemPrice: {
        fontSize: 10,
        color: '#F5A623',
    },
    itemsSecondItemBackground: {
        flex: 1,
        resizeMode: 'cover',
        paddingLeft: 17,
        paddingTop: 18,
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
