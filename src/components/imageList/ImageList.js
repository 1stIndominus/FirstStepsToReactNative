import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Image,
  ScrollView,
} from 'react-native';

const images = [
  {id: 1, source: require('../../../assets/images/2.png')},
  {id: 2, source: require('../../../assets/images/3.png')},
  {id: 3, source: require('../../../assets/images/4.png')},
  {id: 4, source: require('../../../assets/images/5.png')},
  {id: 5, source: require('../../../assets/images/6.png')},
  {id: 6, source: require('../../../assets/images/7.png')},
  {id: 7, source: require('../../../assets/images/8.png')},
  {id: 8, source: require('../../../assets/images/9.png')},
  {id: 9, source: require('../../../assets/images/9.png')},
];

const SPACING = 10;
const IMAGE_SIZE = 400;
const IMAGE_HEIGHT = Dimensions.get('window').height - IMAGE_SIZE;

export const ImageList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <ScrollView vertical style={styles.containerWrapper}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.source} />
            </View>
          </ScrollView>
        )}
        keyExtractor={item => item.id}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height - IMAGE_SIZE + SPACING}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  containerWrapper: {
    height: IMAGE_HEIGHT,
    width: '100%',
    backgroundColor: 'grey',
    marginBottom: SPACING,
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: IMAGE_HEIGHT,
    borderRadius: 20,
  },
});
