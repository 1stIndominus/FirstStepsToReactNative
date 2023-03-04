import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Card} from './Card';

export const MovieList = ({title, content, navigation}) => {
  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>

      <View>
        <FlatList
          horizontal={true}
          data={content}
          renderItem={({item}) => <Card navigation={navigation} item={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});
