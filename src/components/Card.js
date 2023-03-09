import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text} from 'react-native';

const placeholderImage = require('../../assets/images/placeholder.png');

export const Card = ({item, navigation}) => {
  if (!item.poster_path) {
    return (
      <Text testID="MyText" style={styles.movieName}>
        {item.title}
      </Text>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail', {movieId: item.id})}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path
            ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
            : placeholderImage
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 10,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    top: 10,
    textAlign: 'center',
  },
});
