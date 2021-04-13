import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const MyText = (props) => {
    let fontFamily = '';
    let fontWeight = '400';
    if (Array.isArray(props.style)) {
        fontWeight = props.style.find(item => item.fontWeight).fontWeight;
    }
    if (props.style) {

        switch (props.style.fontWeight ? props.style.fontWeight : fontWeight) {
        case '100':
            fontFamily = 'Dosis-Thin';
            break;
        case '200':
            fontFamily = 'Dosis-ExtraLight';
            break;
        case '300':
            fontFamily = 'Dosis-Light';
            break;
        case '500':
            fontFamily = 'Dosis-Medium';
            break;
        case '600':
            fontFamily = 'Dosis-SemiBold';
            break;
        case '700':
            fontFamily = 'Dosis-Bold';
            break;
        case '800':
            fontFamily = 'Dosis-ExtraBold';
            break;
        default:
            fontFamily = 'Dosis-Regular';
        }
    }

    return (
        <Text style={[props.style, {fontFamily: fontFamily || 'Dosis-Regular'}]}>{props.children}</Text>
    );
};

MyText.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    children: PropTypes.string,
    alternative: PropTypes.bool,
};

export default MyText;
