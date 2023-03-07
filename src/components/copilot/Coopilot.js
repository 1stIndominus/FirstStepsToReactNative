import React, {useEffect, useState} from 'react';
import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';
import {Text, View, SafeAreaView} from 'react-native';
import {styles} from './styles';

export const CopilotComponent = props => {
  const [secondStep] = useState(true);
  const WalkthroughableText = walkthroughable(Text);

  useEffect(() => {
    props.start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CopilotStep text="This is a Copilot example!" order={1} name="hello">
          <WalkthroughableText style={[styles.titleStyle, {height: 80}]}>
            This is a simple usage of copilot library
          </WalkthroughableText>
        </CopilotStep>
      </View>
      <View>
        <CopilotStep
          active={secondStep}
          text="This is a second text example!"
          order={2}
          name="Second step">
          <WalkthroughableText style={[styles.titleStyle, {height: 60}]}>
            This is default text that can be skiped
          </WalkthroughableText>
        </CopilotStep>
      </View>
    </SafeAreaView>
  );
};

export default copilot()(CopilotComponent);
