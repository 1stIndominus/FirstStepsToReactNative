import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
// import Config from 'react-native-config';

export const DeviceInfoDetail = () => {
  const [deviceId, setDeviceId] = useState('');
  const [deviceModel, setDeviceModel] = useState('');

  const getDeviceId = useCallback(() => {
    DeviceInfo.getUniqueId().then(item => {
      setDeviceId(item);
    });
  }, []);

  const getModel = useCallback(() => {
    const model = DeviceInfo.getModel();
    setDeviceModel(model);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Click to see Device Info</Text>
        <Text>
          {deviceId
            ? `This is phone Id: ${deviceId}`
            : 'Click Show Id button to see the Id of Device'}
        </Text>
        <Text>
          {deviceModel
            ? `This is Device Model: ${deviceModel}`
            : 'Click Show Model button to see the model of Device'}
        </Text>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={getDeviceId}
          activeOpacity={0.5}>
          <Text style={styles.text}>Show Id</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonText}
          onPress={getModel}
          activeOpacity={0.5}>
          <Text style={styles.text}>Show Model</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97D9E1',
    padding: 20,
    borderRadius: 8,
  },
  title: {
    color: 'red',
  },
  buttonText: {
    width: 100,
    height: 20,
    borderRadius: 8,
    backgroundColor: '#0C9E89',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
});
