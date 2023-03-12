import React, {useRef, useCallback} from 'react';
import {SafeAreaView, StyleSheet, Animated} from 'react-native';

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

const MARGIN_TOP_ITEM = 20;
const PADDING_ITEM = 0;
const IMG_HEIGHT = 500;
const SIZE_OF_ITEM = IMG_HEIGHT + PADDING_ITEM * 2 + MARGIN_TOP_ITEM;
const MARGIN_EFFECT = IMG_HEIGHT - 100;

export const ImageList = () => {
  const Yscroll = useRef(new Animated.Value(0)).current;

  const renderItem = useCallback(
    ({item, index}) => {
      const marginTop = Yscroll.interpolate({
        inputRange: [
          -1,
          MARGIN_EFFECT,
          SIZE_OF_ITEM * index + MARGIN_EFFECT,
          SIZE_OF_ITEM * (index + 2),
        ],
        outputRange: [0, 0, 0, -10 * MARGIN_TOP_ITEM],
      });
      return (
        <Animated.View
          style={[
            styles.item,
            {
              transform: [{translateY: marginTop}],
            },
          ]}>
          <Animated.Image style={styles.image} source={item.source} />
        </Animated.View>
      );
    },
    [Yscroll],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        data={images}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={SIZE_OF_ITEM}
        contentContainerStyle={{
          padding: 20,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: Yscroll}}}],
          {useNativeDriver: true},
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: IMG_HEIGHT,
    borderRadius: 10,
  },
  item: {
    marginTop: MARGIN_TOP_ITEM,
    padding: PADDING_ITEM,
  },
  container: {
    flex: 1,
    backgroundColor: '#E1E8EE',
  },
});
