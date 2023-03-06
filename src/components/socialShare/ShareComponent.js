import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import Share from 'react-native-share';
import {styles} from './styles';

const IMAGE_URL =
  'https://www.autofacil.es/wp-content/uploads/2021/05/r8-aspp-2-lr.jpg';

export const ShareComponent = () => {
  const myCustomShare = useCallback(async () => {
    const shareOptions = {
      title: 'Share image',
      message: 'This is text message for sharing',
      url: IMAGE_URL,
      type: 'image/jpg',
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  }, []);

  return (
    <TouchableRipple onPress={myCustomShare}>
      <View style={styles.menuItem}>
        <Icon name="share-outline" color="#FF6347" size={25} />
        <Text style={styles.menuItemText}>Tell Your Friends</Text>
      </View>
    </TouchableRipple>
  );
};
