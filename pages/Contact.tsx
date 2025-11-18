import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from '../components/CardsContainer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StorageController from '../controllers/StorageController';
import 'react-native-get-random-values';


export default function Contact() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <StorageController/>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>

    </SafeAreaProvider>

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
