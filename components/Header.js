import React from 'react';
import { colors, fonts } from '../styles/theme';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Logo from '../assets/logos/devfinder.png';
import Moon from '../assets/icons/moon.png';
import Sun from '../assets/icons/sun.png';

const Header = ({ isDark, setIsDark, width}) => {
    const s = styles(isDark, width);

    const toggleMode = () => {
        setIsDark(prev => !prev);
    }

    return (
        <View style={s.container}>
            <Image
                key={isDark ? 'logo-dark' : 'logo-light'}
                source={Logo}
                style={[s.logo, { tintColor: isDark ? colors.neutral0 : colors.neutral900 }]}
            />
            <TouchableOpacity style={s.modeToggle} onPress={toggleMode}>
                <Text style={s.headerText}>{isDark ? 'LIGHT' : 'DARK'}</Text>
                <Image
                    source={isDark ? Sun : Moon}
                    style={[s.headerIcon, { tintColor: isDark ? colors.neutral200 : colors.neutral500 }]}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = (isDark, w) => StyleSheet.create({
    container: {
        // maxWidth: 730,
        // width: '91.5%',
        width: w > 798 ? 730 : '91.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 42,
        padding: 0,
    },
    logo: {
        width: 128,
        height: 26,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        padding: 0,
    },
    modeToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: w > 740 ? 16 : 12,
    },
    headerText: {
        color: isDark ? colors.neutral200 : colors.neutral500,
        fontSize: fonts.size.xxs,
        fontFamily: fonts.bold,
        fontWeight: '700',
        lineHeight: 13 * 1.4,
        letterSpacing: 2.5,
        textAlign: 'right',
    },
    headerIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});
