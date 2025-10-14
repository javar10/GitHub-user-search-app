import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { colors, spacing, fonts } from './styles/theme';


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
      <Text style={styles.heading}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral500,
    padding: spacing.lg,
  },
  heading: {
    color: colors.neutral900,
    fontSize: fonts.size.xxs,
    fontFamily: fonts.bold,
  },
});
