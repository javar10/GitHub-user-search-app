import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { colors, fonts } from '../styles/theme'
import SearchIcon from '../assets/icons/search-icon.png'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textInputView} >
                <Image source={SearchIcon} style={styles.searchIcon} />
                <TextInput
                    style={styles.searchText}
                    placeholder='Search GitHub username...'
                    placeholderTextColor={colors.neutral500}
                    underlineColorAndroid="transparent"
                    
                    // value={text}
                    // onChangeText={setText}
                />
            </View>
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: '91.5%',
        height: 69,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.neutral0,
        borderRadius: 16,
        shadowColor: '#4660BB',
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.2,
        shadowRadius: 30,
        elevation: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    textInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flex: 1,
    },
    searchText: {
        color: colors.neutral700,
        fontSize: fonts.size.xxs,
        fontFamily: fonts.regular,
        fontWeight: '400',
        lineHeight: 13 * 1.4,
        letterSpacing: 0,
        flex: 1,
        width: '100%',
        borderWidth: 0,
        outlineStyle: 'none',
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: colors.blue500,
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