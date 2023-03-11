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
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

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
const DEFAULT_GAP = SPACING;
const MAX_GAP = 50;
const IMAGE_SIZE = 400;
const IMAGE_HEIGHT = Dimensions.get('window').height - IMAGE_SIZE;

export const ImageList2 = () => {
  const translationY = useSharedValue(0);
  let gap = useSharedValue(DEFAULT_GAP);

  const scrollHandler = useAnimatedScrollHandler(event => {
    const {contentOffset} = event;
    console.log(contentOffset.y);
    const firstItemIndex = Math.floor(
      contentOffset.y / (IMAGE_HEIGHT + SPACING),
    );
    const isTopOfScreen = contentOffset.y < IMAGE_HEIGHT;
    if (isTopOfScreen && firstItemIndex <= 0) {
      // Increase gap when the first item reaches the top of the screen
      gap.value = withTiming(MAX_GAP, {duration: 200});
      gap.value = SPACING;
    } else {
      // Reset gap to default value when scrolling back down
      gap.value = withTiming(DEFAULT_GAP, {duration: 200});
      // gap.value = SPACING;
    }
    translationY.value = contentOffset.y / SPACING;
  });

  const stylez = useAnimatedStyle(() => {
    return {
      marginTop: translationY.value,
      marginBottom: gap.value,
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        data={images}
        duration={300}
        renderItem={({item, index}) => {
          return (
            <View style={stylez}>
              <Animated.Image
                style={[styles.image, stylez]}
                source={item.source}
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={IMAGE_HEIGHT + SPACING}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: SPACING,
    marginRight: 10,
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    borderRadius: 20,
  },
});
