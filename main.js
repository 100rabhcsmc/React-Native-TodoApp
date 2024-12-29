import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
  View,
} from 'react-native';
import React from 'react';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={{color: 'red'}}>App</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
