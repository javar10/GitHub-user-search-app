import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors, fonts } from '../styles/theme'
import Avatar from '../assets/images/User-profile.png'
import LocationIcon from '../assets/icons/pin.png'
import WebsiteIcon from '../assets/icons/url.png'
import TwitterIcon from '../assets/icons/twitter.png'
import CompanyIcon from '../assets/icons/office-building.png'

const UserCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userCardHeader} >
                <Image source={Avatar} style={styles.userAvatar} />
                <View style={styles.userInfo} >
                    <Text style={styles.userName} >The Octocat</Text>
                    <Text style={styles.userHandle} >@octocat</Text>
                    <Text style={styles.userJoinDate} >Joined 25 Jan 2011</Text>
                </View>
            </View>
            <View style={styles.userCardBody} >
                <Text style={styles.userBio} >This profile has no bio</Text>
                <View style={styles.userStatsContainer} >
                    <View style={styles.userStat} >
                        <Text style={styles.userStatLabel} >Repos</Text>
                        <Text style={styles.userStatValue} >8</Text>
                    </View>
                    <View style={styles.userStat} >
                        <Text style={styles.userStatLabel} >Followers</Text>
                        <Text style={styles.userStatValue} >3938</Text>
                    </View>
                    <View style={styles.userStat} >
                        <Text style={styles.userStatLabel} >Following</Text>
                        <Text style={styles.userStatValue} >9</Text>
                    </View>
                </View>
            </View>
            <View style={styles.userCardFooter} >
                <View style={styles.userContactInfo} >
                    <Image source={LocationIcon} style={styles.userContactIcon} />
                    <Text style={styles.userContactText} >San Francisco</Text>
                </View>
                <View style={styles.userContactInfo} >
                    <Image source={TwitterIcon} style={styles.userContactIcon} />
                    <Text style={styles.userContactText} >Not Available</Text>
                </View>
                <View style={styles.userContactInfo} >
                    <Image source={WebsiteIcon} style={styles.userContactIcon} />
                    <Text style={styles.userContactText} >https://github.blog</Text>
                </View>
                <View style={styles.userContactInfo} >
                    <Image source={CompanyIcon} style={styles.userContactIcon} />
                    <Text style={styles.userContactText} >@github</Text>
                </View>
            </View>
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        width: '91.5%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: colors.neutral0,
        borderRadius: 15,
        shadowColor: '#4660BB',
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.2,
        shadowRadius: 30,
        elevation: 20,
        paddingVertical: 32,
        paddingHorizontal: 24,
        gap: 24,
    },
    userCardHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 20,
    },
    userAvatar: {
        width: 70,
        height: 70,
    },
    userInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
    },
    userName: {
        fontFamily: fonts.bold,
        fontWeight: '700',
        fontSize: fonts.size.lg,
        lineHeight: 26 * 1.2,
        letterSpacing: 0,
        color: colors.neutral700,
        marginBottom: 1,
    },
    userHandle: {
        fontFamily: fonts.regular,
        fontWeight: '400',
        fontSize: fonts.size.sm,
        lineHeight: 16 * 1.5,
        letterSpacing: 0,
        marginBottom: 1,
        color: colors.blue500,
    },
    userJoinDate: {
        fontFamily: fonts.regular,
        fontWeight: '400',
        fontSize: fonts.size.xs,
        lineHeight: 15 * 1.5,
        letterSpacing: 0,
        marginBottom: 1,
        color: colors.neutral500,
    },
    userCardBody: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 24,
    },
    userBio: {
        fontFamily: fonts.regular,
        fontWeight: '400',
        fontSize: fonts.size.xs,
        lineHeight: 15 * 1.5,
        letterSpacing: 0,
        marginBottom: 1,
        color: colors.neutral500,
        opacity: 0.75,
    },
    userStatsContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingVertical: 16,
        paddingHorizontal: 20,
        gap: 16,
        borderRadius: 10,
        backgroundColor: colors.neutral100,
    },
    userStat: {
        flexDirection: 'column',
        gap: 4,
    },
    userStatLabel: {
        fontFamily: fonts.regular,
        fontWeight: '400',
        fontSize: fonts.size.xxs,
        lineHeight: 13 * 1.5,
        letterSpacing: 0,
        marginBottom: 1,
        color: colors.neutral500,
    },
    userStatValue: {
        fontFamily: fonts.bold,
        fontWeight: '700',
        fontSize: fonts.size.lg,
        lineHeight: 22 * 1.4,
        letterSpacing: 0,
        marginBottom: 1,
        color: colors.neutral700,
    },
    userCardFooter: {
        width: '100%',
        gap: 16,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    userContactInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    userContactIcon: {
        maxHeight: 20,
        maxWidth: 20,
        resizeMode: 'contain',
        tintColor: colors.neutral900,
    },
    userContactText: {
        fontFamily: fonts.regular,
        fontWeight: '400',
        fontSize: fonts.size.xs,
        lineHeight: 15 * 1.5,
        letterSpacing: 0,
        marginBottom: 1,
        color: colors.neutral500,
    },
});