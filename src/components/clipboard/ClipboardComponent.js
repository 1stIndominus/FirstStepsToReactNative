import React, {useCallback, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export const ClipboardExample = () => {
  const [copiedText, setCopiedText] = useState('');
  const [isVisible, setIsvisible] = useState(false);

  const handleCopyText = useCallback(() => {
    Clipboard.setString('npx react-native start');
  }, []);

  const fetchCopiedText = useCallback(async () => {
    const copied = await Clipboard.getString();
    if (copied) {
      setCopiedText(copied);
      setIsvisible(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.clipContainer}>
        <Text style={styles.clipText}>npx react-native start</Text>
        <Button title="Copy" onPress={handleCopyText} />
      </View>

      <View>
        <Button title="Retrieve text" onPress={fetchCopiedText} />
        <Text style={styles.copiedText}>
          {isVisible ? `Copied text: ${copiedText}` : null}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    backgroundColor: '#BBBBC5',
    height: 200,
    padding: 10,
    borderRadius: 8,
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
  clipContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  clipText: {
    paddingRight: 5,
    paddingTop: 5,
    color: 'black',
    height: 36,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    backgroundColor: '#E0E0FB',
  },
});
