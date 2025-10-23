import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { ScrollView, Dimensions, useWindowDimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { colors } from './styles/theme';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import Attribution from './components/Attribution';

export default function App() {
  // const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
  //   Dimensions.get('window').width > Dimensions.get('window').height
  //     ? 'landscape'
  //     : 'portrait'
  // );

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener('change', ({ window }) => {
  //     setOrientation(window.width > window.height ? 'landscape' : 'portrait');
  //   });

  //   return () => subscription?.remove(); 
  // }, []);

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

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
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(false);

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

  const handleChangeText = (text) => {
    setSearchQuery(text);
    if (text === '') {
      setError(null);
      setUserData(defaultUser);
    }
  }

  const handleSearch = async () => {
    if (!searchQuery) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${searchQuery}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User not found");
        } else {
          throw new Error("Something went wrong. Please try again.");
        }
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      // console.error('Error fetching user:', err);
      setUserData(defaultUser);
      setError(err.message);
      console.log('Error message set:', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: isDark ? colors.neutral900 : colors.neutral100,
          overflow: 'visible',
        }}
      >
        


          <StatusBar
            style={isDark ? 'light' : 'dark'}
            backgroundColor={isDark ? colors.neutral900 : colors.neutral100}
            translucent={false}
            animated
          />

          <ScrollView
            style={{
              flex: 1,
              backgroundColor: isDark ? colors.neutral900 : colors.neutral100,
              overflow: 'visible',
            }}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: width > 798 ? 'center' : 'flex-start',
              alignItems: 'center',
              gap: width > 740 ? 40 : 32,
            }}
          >
            <Header
              isDark={isDark}
              setIsDark={setIsDark}
              width={width}
            />
            <SearchBar
              value={searchQuery}
              onChangeText={handleChangeText}
              onSearch={handleSearch}
              error={error}
              isDark={isDark}
              width={width}
            />
            <UserCard
              user={userData}
              loading={loading}
              error={error}
              isDark={isDark}
              width={width}
            />
            <Attribution
              isDark={isDark}
              width={width}
            />
          </ScrollView>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

