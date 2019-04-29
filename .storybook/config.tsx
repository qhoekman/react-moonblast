import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import Theme from 'react-tailwhip';

// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
const withTheme = story => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>;

addDecorator(withKnobs);
addDecorator(withTheme);
configure(loadStories, module);
