import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styleCaption = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginBottom: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#303843',
        fontWeight: '700',
        fontSize: 16,
    },
    titleBig: {
        color: '#303843',
        fontWeight: '700',
        fontSize: 20,
    },
    link: {
        color: '#F5A623',
        fontSize: 12,
        fontWeight: '600',
    },
    note: {
        color: '#999999',
        fontSize: 12,
    },
    tagBlock: {
        paddingHorizontal: 5,
        paddingVertical: 6,
        backgroundColor: '#FFC769',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    tagText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '500',
    },
});


export const styleScroll = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flexGrow: 1,
    },
});

export const styleGrid = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
});
