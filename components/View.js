import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function View1() {
  return (
    <View style={styles.container}>
      <Text>Hi this is a another view in the same app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E80E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
