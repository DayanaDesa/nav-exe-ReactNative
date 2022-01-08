import React, {useState} from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export default function Home({navigation}) {
    const [name,setName] = useState('')
  return (
    <View>
      <Text>Home Page</Text>
      <TextInput 
      placeholder = "Enter your name" 
      style={{marginBottom:8}}
      value={name}
      onChangeText={(text) => setName(text)}   
      >
      </TextInput>
      <Button title='Go to About Page' 
      onPress={()=>navigation.push('About', {'name': name})}></Button>
      <Button title='Go to Review Detail' 
      onPress={()=>navigation.push('ReviewDetail')}></Button>
    </View>
  );
}

