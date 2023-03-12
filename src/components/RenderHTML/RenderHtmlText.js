import React, {useRef, useState, useInsertionEffect} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `
    <div style='padding:20px;'>
      <p style='text-align:center;'>
        <h1 style='text-align:center;'>Hello world!</h1>
        This text is rendering by RenderHtml library where you can write usual tags and usual content inside those tags
      </p>
    </div>
  `,
};

export const RenderHtmlText = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useInsertionEffect(() => {
    const handlePressIn = () => {
      setVisible(true);
    };

    const handlePressOut = () => {
      setVisible(false);
    };
  }, []);

  const tooltipStyle = [
    styles.tooltip,
    visible ? styles.visible : styles.hidden,
  ];

  const {width} = useWindowDimensions();
  return (
    <>
      <RenderHtml contentWidth={width} source={source} />
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={() => setVisible(true)}
          onPressOut={() => setVisible(false)}>
          <View style={styles.target}>
            <Text>Press Me</Text>
          </View>
        </TouchableWithoutFeedback>
        {visible && (
          <View style={tooltipStyle} ref={ref}>
            <Text>this is useInsertionEffect</Text>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  target: {
    width: 100,
    height: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    zIndex: 1,
  },
  visible: {
    display: 'flex',
  },
  hidden: {
    display: 'none',
  },
});
