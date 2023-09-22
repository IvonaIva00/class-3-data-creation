import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState } from "react";
import { Button, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from "react-native";
import { Input } from '@ui-kitten/components';




export default function Home (navigation) {
    const [counter, setCounter] = useStat(0);
    const [value, setValue] = useState('');

    return(
        <Layout
        style={styles.container}
        level='1'
      >
  
        <Button onPress={() => setCounter(counter + 1)}>
          BUTTON
        </Button>
  
        <Text style={styles.text}>
          {`Pressed ${counter} times`}
        </Text>
        <Input
      placeholder='Place your Text'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
    />
  
      </Layout>


    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      text: {
        marginHorizontal: 8,
      },
})