import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import Theme from 'react-tailwhip';

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
const withTheme = story => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>;

addDecorator(withKnobs);
addDecorator(withTheme);
configure(loadStories, module);
