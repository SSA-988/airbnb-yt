import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <HomeScreen/> */}
      <StackNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:40,
  },
});
