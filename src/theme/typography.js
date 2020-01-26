import palette from './palette';

export default {
    h1: {
        color: palette.text.bloodOrange,
        fontWeight: 500,
        fontSize: '35px',
        letterSpacing: '-0.24px',
        lineHeight: '40px'
    },
    h2: {
        color: palette.text.bloodOrange,
        fontWeight: 500,
        fontSize: '29px',
        letterSpacing: '-0.24px',
        lineHeight: '32px'
    },
    h3: {
        color: palette.text.bloodOrange,
        fontWeight: 500,
        fontSize: '36px',
        letterSpacing: '-0.06px',
        lineHeight: '41px',
        marginBottom: '25px',
        fontFamily: 'Raleway'
    },
    h4: {
        color: palette.text.title2,
        fontWeight: 500,
        fontSize: '20px',
        letterSpacing: '-0.06px',
        lineHeight: '24px'
    },
    h5: {
        color: palette.text.title2,
        fontWeight: 700,
        fontSize: '16px',
        letterSpacing: '-0.05px',
        lineHeight: '20px'
    },
    h6: {
        color: palette.text.title2,
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '-0.05px',
        lineHeight: '20px'
    },
    subtitle1: {
        color: palette.text.primary,
        fontSize: '16px',
        letterSpacing: '-0.05px',
        lineHeight: '25px'
    },
    subtitle2: {
        color: palette.text.bloodOrange,
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '-0.05px',
        lineHeight: '21px'
    },
    body1: {
        color: palette.text.primary,
        fontSize: '14px',
        letterSpacing: '-0.05px',
        lineHeight: '21px'
    },
    body2: {
        color: palette.text.secondary,
        fontSize: '12px',
        letterSpacing: '-0.04px',
        lineHeight: '18px'
    },
    button: {
        backgroundColor: palette.button.blue,
        color: palette.text.button.white,
        fontSize: '14px'
    },
    caption: {
        color: palette.text.secondary,
        fontSize: '11px',
        letterSpacing: '0.33px',
        lineHeight: '13px'
    },
    overline: {
        color: palette.text.secondary,
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.33px',
        lineHeight: '13px',
        textTransform: 'uppercase'
    },
    cardInfo1: {
        color: '#ffbc02'
    },
    cardInfo2: {
        color: '#40c940'
    },
    fontFamily: [
        'Open Sans'
    ].join(','),
};
