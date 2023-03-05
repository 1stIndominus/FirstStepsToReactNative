import React, {useEffect, useState} from 'react';
import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import fontFamilies from '../../styles/fontFamilies';
import EStyleSheet from 'react-native-extended-stylesheet';

export const CopilotComponent = props => {
  const [secondStep, setSecondStep] = useState(true);
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

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 50,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Smokum-Regular',
  },
});

export default copilot()(CopilotComponent);
