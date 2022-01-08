import React from 'react';
import { Text, View, Button } from 'react-native';

export default function About({navigation}) {
  return (
    <View>
      <Text>About Page</Text>
      <Text>Hello {navigation.getParam('name')}</Text>
      <Button title="Go Back!" onPress={()=>navigation.pop()}></Button>
    </View>
  );
}