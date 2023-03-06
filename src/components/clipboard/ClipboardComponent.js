import React, {useCallback, useState} from 'react';
import {View, Text, Button} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {styles} from './styles';

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
