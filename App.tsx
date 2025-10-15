import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { colors, fonts } from './styles/theme';
import Header from './components/Header';
import SearchBar from './components/SearchBar';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'spaceMono-regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'spaceMono-bold': require('./assets/fonts/SpaceMono-Bold.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    // Render nothing or a custom splash screen while fonts load
    return null;
  }

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />

      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral100,
    alignItems: 'center',
  },
});
