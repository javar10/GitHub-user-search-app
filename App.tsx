import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { colors, fonts } from './styles/theme';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';

export default function App() {
    const defaultUser = {
    "login": "octocat",
    "name": "The Octocat",
    "id": 1,
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
    "created_at": "2011-01-25T08:33:35Z",
    "bio": "",
    "public_repos": 8,
    "followers": 3938,
    "following": 9,
    "location": "San Francisco",
    "twitter_username": "",
    "blog": "https://github.blog",
    "company": "@github",
  }

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(defaultUser);
  const [loading, setLoading] = useState(false);


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
    return null;
  }

  const handleSearch = async () => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${searchQuery}`);
      const data = await response.json();
      setUserData(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching user:', error);
      setUserData(defaultUser);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.neutral100 }}
      contentContainerStyle={{ alignItems: 'center', gap: 32 }}
    >
      <Header />
      <StatusBar style="auto" />
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSearch={handleSearch}
      />
      <UserCard
        user={userData}
        loading={loading}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral100,
    alignItems: 'center',
    gap: 32,
  },
});
