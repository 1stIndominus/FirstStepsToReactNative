import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text} from 'react-native';
// import RBSheet from 'react-native-raw-bottom-sheet';
import {BottomSheet} from '@gorhom/bottom-sheet';
import {styles} from './styles';

export const BottomSheets = () => {
  const BottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChange = useCallback(index => {
    console.log(index);
  }, []);
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={BottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        <View style={styles.content}>
          <Text>This is BottomSheet panel</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default BottomSheet;
