import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/theme'
import { StyleSheet } from 'react-native'
import SearchIcon from '../assets/icons/search-icon.png'

const SearchBar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.textInputView} >
            <Image source={SearchIcon} style={styles.searchIcon} />
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      {/* <Text>SearchBar</Text> */}
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
    },

    });