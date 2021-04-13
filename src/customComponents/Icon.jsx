import React, {PropsTyp, useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';
const Icon = (props) => {
    const [icon, setIcon] = useState(null);

    // Перечисление всех возможных иконок
    let allIcons = [
        {
            path: '@/assets/images/svg/home-menu/1.svg',
            nodeElement: import('@/assets/images/svg/home-menu/1.svg'),
        },
        {
            path: '@/assets/images/svg/home-menu/2.svg',
            nodeElement: import('@/assets/images/svg/home-menu/2.svg'),
        },
        {
            path: '@/assets/images/svg/home-menu/3.svg',
            nodeElement: import('@/assets/images/svg/home-menu/3.svg'),
        },
        {
            path: '@/assets/images/svg/home-menu/4.svg',
            nodeElement: import('@/assets/images/svg/home-menu/4.svg'),
        },
        {
            path: '@/assets/images/svg/home-menu/5.svg',
            nodeElement: import('@/assets/images/svg/home-menu/5.svg'),
        },
        {
            path: '@/assets/images/svg/home-menu/6.svg',
            nodeElement: import('@/assets/images/svg/home-menu/6.svg'),
        },
        {
            path: '@/assets/images/svg/home-menu/7.svg',
            nodeElement: import('@/assets/images/svg/home-menu/7.svg'),
        },
        {
            path: '@/assets/images/svg/home-menu/8.svg',
            nodeElement: import('@/assets/images/svg/home-menu/8.svg'),
        },
        {
            path: '@/assets/images/svg/search-icon.svg',
            nodeElement: import('@/assets/images/svg/search-icon.svg'),
        },
        {
            path: '@/assets/images/svg/like-icon.svg',
            nodeElement: import('@/assets/images/svg/like-icon.svg'),
        },
        {
            path: '@/assets/images/svg/right-arrow-icon.svg',
            nodeElement: import('@/assets/images/svg/right-arrow-icon.svg'),
        },
    ];

    useEffect(() => {
        if (props.path) {
            let searchableIcon = allIcons.find(_icon => _icon.path === props.path);
            if (searchableIcon) {
                searchableIcon.nodeElement.then(obj => {
                    setIcon(obj.default(props.style));
                });
            }
        }
    });

    return icon;
};

Icon.propTypes = {
    path: PropTypes.string,
};

export default Icon;
