import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  return (
    <SafeAreaView>
    <ApplicationProvider {...eva} theme={eva.light}>
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
    </ApplicationProvider>
    </SafeAreaView>
    
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
