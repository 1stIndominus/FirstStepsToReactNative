import React from 'react';
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
  const {width} = useWindowDimensions();
  return <RenderHtml contentWidth={width} source={source} />;
};
