import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
    black,
    white,
    primary: {
        contrastText: white,
        main: '#322f78',
        light: '#c3c2e0'
    },
    secondary: {
        contrastText: white,
        main: '#ff4904',
        light: '#99ff4904'
    },
    tertiary: {
        contrastText: white,
        main: '#2c80f2'
    },
    success: {
        contrastText: white,
        main: '#31cc9c',
        light: '#3331cc9c'
    },
    info: {
        contrastText: white,
        main: colors.blue[600],
        light: colors.blue[400]
    },
    warning: {
        contrastText: white,
        main: '#fcbf23',
        light: '#33e8af1c'
    },
    error: {
        contrastText: white,
        main: '#f72e49',
        light: '#33f72e49'
    },
    text: {
        primary: '#322f78',
        secondary: colors.blueGrey[600],
        link: colors.blue[600],
        bloodOrange: '#ff4904',
        button: {
            white: '#ffffff',
            blue: '#322f78',
            grey: '#8798ad',
        },
        title2: '#9eaec2',
        info: '#8798ad',
        alert: '#322f78'
    },
    background: {
        default: '#eff4f5',
        paper: white
    },
    button: {
        blue: '#2c80f2'
    },
    disabled: '#9eaec2',
    icon: '#322f78',
    divider: '#c3c2e0'
};
