import { View, Text, Image, ActivityIndicator, Linking } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors, fonts } from '../styles/theme'
import LocationIcon from '../assets/icons/pin.png'
import WebsiteIcon from '../assets/icons/url.png'
import TwitterIcon from '../assets/icons/twitter.png'
import CompanyIcon from '../assets/icons/office-building.png'

const UserCard = ({ user, loading, error, isDark, width }) => {
    const s = styles(isDark, width);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    if (loading) return <ActivityIndicator size="large" />;
    if (!user) return null;

    return (
        <View style={s.container}>
            {error ? (
                <View style={s.noResultsContainer} >
                    <Text style={s.noResultsHeader}>
                        No results found!
                    </Text>
                    <Text style={s.noResultsText}>
                        We couldn't find any GitHub users matching your search. Please double-check the username and try again.
                    </Text>
                </View>
            ) : (
                <>
                    {width > 740 &&
                        <Image source={{ uri: user.avatar_url }} style={s.userAvatar}
                        />}
                    <View style={s.userContainer}>
                        <View style={s.userCardHeader} >
                            {width <= 740 &&
                                <Image source={{ uri: user.avatar_url }} style={s.userAvatar}
                                />}
                            <View style={s.userInfo} >
                                <View style={s.userNameHandleContainer}>
                                    <Text style={s.userName} >{user.name || user.login}</Text>
                                    <Text style={s.userHandle} onPress={() => Linking.openURL(`https://github.com/${user.login}`)}>@{user.login}</Text>
                                </View>
                                <Text style={s.userJoinDate} >Joined {formatDate(user.created_at)}</Text>
                            </View>
                        </View>

                        <View style={s.userCardBody} >
                            <Text style={s.userBio} >{user.bio || 'This profile has no bio'} </Text>
                            <View style={s.userStatsContainer} >
                                <View style={s.userStat} >
                                    <Text style={s.userStatLabel} >Repos</Text>
                                    <Text style={s.userStatValue} >{user.public_repos}</Text>
                                </View>
                                <View style={s.userStat} >
                                    <Text style={s.userStatLabel} >Followers</Text>
                                    <Text style={s.userStatValue} >{user.followers}</Text>
                                </View>
                                <View style={s.userStat} >
                                    <Text style={s.userStatLabel} >Following</Text>
                                    <Text style={s.userStatValue} >{user.following}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={s.userCardFooter} >
                            <View style={[s.userContactInfo, !user.location && s.notAvailable]} >
                                <Image
                                    key={isDark ? 'logo-dark' : 'logo-light'}
                                    source={LocationIcon}
                                    style={[s.userContactIcon, { tintColor: isDark ? colors.neutral0 : colors.neutral900, }]}
                                />
                                <Text style={s.userContactText} >{user.location || 'Not Available'}</Text>
                            </View>
                            <View style={[s.userContactInfo, !user.twitter_username && s.notAvailable]} >
                                <Image
                                    key={isDark ? 'logo-dark' : 'logo-light'}
                                    source={TwitterIcon}
                                    style={[s.userContactIcon, { tintColor: isDark ? colors.neutral0 : colors.neutral900, }]}
                                />
                                <Text
                                    style={s.userContactText}
                                    onPress={user.twitter_username ? () => Linking.openURL(`https://x.com/${user.twitter_username}`) : undefined}
                                >
                                    {user.twitter_username || 'Not Available'}
                                </Text>
                            </View>
                            <View style={[s.userContactInfo, !user.blog && s.notAvailable]} >
                                <Image
                                    key={isDark ? 'logo-dark' : 'logo-light'}
                                    source={WebsiteIcon}
                                    style={[s.userContactIcon, { tintColor: isDark ? colors.neutral0 : colors.neutral900, }]}
                                />
                                <Text
                                    style={s.userContactText}
                                    onPress={user.blog ? () => Linking.openURL(user.blog) : undefined}
                                >
                                    {user.blog || 'Not Available'}
                                </Text>
                            </View>
                            <View style={[s.userContactInfo, !user.company && s.notAvailable]} >
                                <Image
                                    key={isDark ? 'logo-dark' : 'logo-light'}
                                    source={CompanyIcon}
                                    style={[s.userContactIcon, { tintColor: isDark ? colors.neutral0 : colors.neutral900, }]}
                                />
                                <Text
                                    style={s.userContactText}
                                    onPress={user.company ? () => Linking.openURL(`https://github.com/${user.company.replace('@', '')}`) : undefined}
                                >
                                    {user.company || 'Not Available'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </>
            )}
        </View>
    )
}

export default UserCard

const styles = (isDark, w) => StyleSheet.create({
    container: {
        // maxWidth: 730,
        // width: '91.5%',
        // alignSelf: 'center',
        width: w > 798 ? 730 : '91.5%',
        flexDirection: w > 740 ? 'row' : 'column',
        // justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: isDark ? colors.neutral800 : colors.neutral0,
        borderRadius: 15,
        boxShadow: isDark ? '' : '0px 16px 30px -10px #4660BB33',
        paddingVertical: w > 740 ? 48 : 32,
        paddingHorizontal: w > 798 ? 48 : w > 740 ? 32 : 24,
        gap: w > 740 ? 32 : 24,
    },
    noResultsContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: w > 740 ? 48 : 32,
        paddingHorizontal: w > 798 ? 48 : w > 740 ? 32 : 24,
        gap: w > 740 ? 16 : 12,
    },
    noResultsHeader: {
        fontFamily: fonts.bold,
        fontWeight: '700',
        fontSize: fonts.size.lg,
        lineHeight: 22 * 1.4,
        letterSpacing: 0,
        color: isDark ? colors.neutral0 : colors.neutral700,
        marginBottom: 1,
        textAlign: 'center',
    },
    noResultsText: {
        fontFamily: fonts.regular,
        fontWeight: '400',
        fontSize: fonts.size.xs,
        lineHeight: 15 * 1.5,
        letterSpacing: 0,
        marginBottom: 1,
        color: isDark ? colors.neutral200 : colors.neutral300,
        textAlign: 'center',
    },
    userContainer: {
        width: w > 740 ? 480 : '100%',
        gap: w > 740 ? 32 : 24,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    userCardHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 20,
    },
    userAvatar: {
        width: w > 740 ? 117 : 70,
        height: w > 740 ? 117 : 70,
        borderRadius: 59,
    },
    userInfo: {
        width: w > 740 ? '100%' : '69.5%',
        flexDirection: w > 740 ? 'row' : 'column',
        justifyContent: w > 740 ? 'space-between' : 'center',
        gap: 4,
    },
    userName: {
        width: '100%',
        fontFamily: fonts.bold,
        fontWeight: '700',
        fontSize: fonts.size.xl,
        lineHeight: 26 * 1.2,
        letterSpacing: 0,
        color: isDark ? colors.neutral0 : colors.neutral700,
        marginBottom: 1,

    },
    userHandle: {
        width: '100%',
        fontFamily: fonts.regular,
        fontWeight: '400',
        fontSize: fonts.size.sm,
        lineHeight: 16 * 1.5,
        letterSpacing: 0,
        marginBottom: 1,
        color: isDark ? colors.blue300 : colors.blue500,
    },
    userJoinDate: {
        fontFamily: fonts.regular,
        fontWeight: '400',
        fontSize: fonts.size.xs,
        lineHeight: 15 * 1.5,
        letterSpacing: 0,
        marginBottom: 1,
        color: isDark ? colors.neutral0 : colors.neutral500,
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
        color: isDark ? colors.neutral0 : colors.neutral500,
        opacity: isDark ? 0.70 : 0.75,
    },
    userStatsContainer: {
        width: '100%',
        flexDirection: w > 740 ? 'row' : 'column',
        justifyContent: w > 740 ? 'space-between' : 'flex-start',
        paddingVertical: 16,
        paddingHorizontal: w > 740 ? 32 : 20,
        gap: 16,
        borderRadius: 10,
        backgroundColor: isDark ? colors.neutral900 : colors.neutral100,
    },
    userStat: {
        width: w > 740 ? '33.3%' : '100%',
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
        color: isDark ? colors.neutral0 : colors.neutral500,
    },
    userStatValue: {
        fontFamily: fonts.bold,
        fontWeight: '700',
        fontSize: fonts.size.lg,
        lineHeight: 22 * 1.4,
        letterSpacing: 0,
        marginBottom: 1,
        color: isDark ? colors.neutral0 : colors.neutral700,
    },
    userCardFooter: {
        width: '100%',
        gap: 16,
        flexDirection: w > 740 ? 'row' : 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    userContactInfo: {
        width: w > 740 ? '48%' : '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    userContactIcon: {
        maxHeight: 20,
        maxWidth: 20,
        resizeMode: 'contain',

    },
    userContactText: {
        fontFamily: fonts.regular,
        fontWeight: '400',
        fontSize: fonts.size.xs,
        lineHeight: 15 * 1.5,
        letterSpacing: 0,
        marginBottom: 1,
        color: isDark ? colors.neutral0 : colors.neutral500,
    },
    notAvailable: {
        opacity: 0.7,
    },
});