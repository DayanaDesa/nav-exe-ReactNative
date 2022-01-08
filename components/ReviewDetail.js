import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

export default function ReviewDetail() {
    const reviews = [{
        name:"Danny",
        rating:3,
        review:"The class is so so.."
    },
    {
        name:"Danish",
        rating:5,
        review:"I love how the presenter presents the topic."
    },
    {
        name:"Durrah",
        rating:10,
        review:"Exellent!"
}
]
  return (
    <View>
      <Text>Review Detail</Text>
      <FlatList
      data = {reviews}
      renderItem={({item})=>(
          <View style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.rating}</Text>
              <Text>{item.review}</Text>
        </View>
      )}/>
    </View>
  ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});