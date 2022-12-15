import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';
import Login from './screens/Login';
export default function App() {
  return (
    <View>

      {/* Home */}
      {/* <Home /> */}
      {/*Products */}
      {/*Bottom Tab Navigator */}
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
