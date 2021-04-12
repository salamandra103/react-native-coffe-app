import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styleCaption = StyleSheet.compose({
    marginHorizontal: 30,
    marginBottom: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    title: {
        color: '#303843',
        fontWeight: '700',
        fontSize: 16,
        big: {
            fontSize: 20,
        },
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
});


export const styleScroll = StyleSheet.compose({
    backgroundColor: '#eee',
    flexGrow: 1,
});
