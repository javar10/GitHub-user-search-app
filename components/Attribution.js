import { View, Text, Linking, StyleSheet } from 'react-native'
import React from 'react'
import { colors, fonts } from '../styles/theme'

const Attribution = ({ isDark, width }) => {
    const s = styles(isDark, width);

    return (
        <View style={s.container}>
            <Text style={s.attText}>
                Challenge by {''}
                <Text
                    style={[s.attText, s.attLink]}
                    onPress={() => Linking.openURL('https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6')}
                >
                    Frontend Mentor
                </Text>.
            </Text>
            {width > 740 && <Text style={s.attText}>{' '}</Text>}
            <Text style={s.attText}>
                Coded by {''}
                <Text
                    style={[s.attText, s.attLink]}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/javargas')}
                >
                    Jessica Vargas
                </Text>.
            </Text>
        </View>
    )
}

export default Attribution

const styles = (isDark, w) => StyleSheet.create({
    container: {
        width: w > 798 ? 730 : '91.5%',
        flexDirection: w > 740 ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    attText: {
        color: isDark ? colors.neutral300 : colors.neutral700,
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