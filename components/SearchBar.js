import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { colors, fonts } from '../styles/theme'
import SearchIcon from '../assets/icons/search-icon.png'

const SearchBar = ({ value, onChangeText, onSearch, error, isDark, width }) => {
    const s = styles(isDark, width);

    return (
        <View style={s.container}>
            <View style={s.textInputView} >
                <Image
                    key={isDark ? 'logo-dark' : 'logo-light'}
                    source={SearchIcon}
                    style={[s.searchIcon, { tintColor: isDark ? colors.blue300 : colors.blue500 }]}
                />
                <TextInput
                    style={s.searchInput}
                    placeholder='Search GitHub username...'
                    placeholderTextColor={isDark ? '#FFFFFFB2' : colors.neutral500}
                    underlineColorAndroid="transparent"
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
            {error && value !== '' && (
                <Text style={s.errorText}>
                    No results
                </Text>
            )}
            <TouchableOpacity onPress={onSearch} style={s.searchButton}>
                <Text style={s.searchButtonText}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = (isDark, w) => StyleSheet.create({
    container: {
        width: w > 798 ? 730 : '91.5%',
        height: 69,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: isDark ? colors.neutral800 : colors.neutral0,
        borderRadius: 16,
        ...(isDark ? {} : {
            shadowColor: '#4660BB',
            shadowOffset: { width: 0, height: 16 },
            shadowOpacity: 0.2,
            shadowRadius: 30,
            elevation: 16,
        }),
        paddingVertical: 8,
        paddingRight: 12,
        paddingLeft: w > 740 ? 24 : 12,
        gap: 12,
    },
    textInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: w > 740 ? 20 : 8,
        flex: 1,
    },
    searchInput: {
        color: isDark ? colors.neutral0 : colors.neutral700,
        fontSize: w > 740 ? fonts.size.md : fonts.size.xxs,
        fontFamily: fonts.regular,
        fontWeight: '400',
        lineHeight: w > 740 ? 18 * 1.4 : 13 * 1.4,
        letterSpacing: 0,
        flex: 1,
        width: '100%',
        borderWidth: 0,
        outlineStyle: 'none',
    },
    searchIcon: {
        width: w > 740 ? 24 : 20,
        height: w > 740 ? 24 : 20,
    },
    errorText: {
        fontFamily: fonts.bold,
        fontWeight: '700',
        fontSize: fonts.size.xxs,
        lineHeight: 13 * 1.5,
        letterSpacing: 0,
        marginBottom: 1,
        color: colors.red500,
    },
    searchButton: {
        backgroundColor: colors.blue500,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    searchButtonText: {
        color: colors.neutral0,
        fontFamily: fonts.bold,
        fontWeight: '700',
        fontSize: fonts.size.sm,
        lineHeight: 16 * 1.5,
        letterSpacing: 0,
    }

});