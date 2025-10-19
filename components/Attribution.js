import { View, Text, Linking, StyleSheet } from 'react-native'
import React from 'react'
import { colors, fonts } from '../styles/theme'

const Attribution = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.attText}>
                Challenge by {''}
                <Text
                    style={[styles.attText, styles.attLink]}
                    onPress={() => Linking.openURL('https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6')}
                >
                    Frontend Mentor
                </Text>.
            </Text>
            <Text style={styles.attText}>
                Coded by {''}
                <Text
                    style={[styles.attText, styles.attLink]}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/javargas')}
                >
                    Jessica Vargas
                </Text>.
            </Text>
        </View>
    )
}

export default Attribution

const styles = StyleSheet.create({
    container: {
        width: '91.5%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    attText: {
        color: colors.neutral700,
        fontSize: fonts.size.xxs,
        fontFamily: fonts.regular,
        fontWeight: '400',
        lineHeight: 13 * 1.4,
        letterSpacing: 0,
        marginBottom: 1,
    },
    attLink: {
        textDecorationLine: 'underline',
    },
});