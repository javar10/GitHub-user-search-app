import React from 'react';
import { colors, fonts } from '../styles/theme';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Logo from '../assets/logos/devfinder.png';
import Moon from '../assets/icons/moon.png';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <TouchableOpacity style={styles.modeToggle}>
                <Text style={styles.headerText}>DARK</Text>
                <Image source={Moon} style={styles.headerIcon} />
            </TouchableOpacity>

        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: '91.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
        padding: 0,
    },
    logo: {
        width: 128,
        height: 26,
        resizeMode: 'contain',
        tintColor: colors.neutral900,
        alignSelf: 'flex-start',
        padding: 0,
    },
    modeToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    headerText: {
        color: colors.neutral500,
        fontSize: fonts.size.xxs,
        fontFamily: fonts.bold,
        fontWeight: '700',
        lineHeight: 13 * 1.4,
        letterSpacing: 2.5,
        textAlign: 'right',
    },
    headerIcon: {
        width: 20,
        tintColor: colors.neutral500,
    },
});
