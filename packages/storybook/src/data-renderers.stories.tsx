import { Badge } from '@moonblast/data-renderers';
import { Round } from '@moonblast/style';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Theme from 'react-tailwhip';
import { Color } from 'react-tailwhip/dist/theme';

const Colors = Object.keys(Theme.colors) as Color[];
const Rounded = ['sm', 'md', 'full'] as Round[];

storiesOf('Data Renderers', module).add(
  'Badge',
  () => <Badge count={number('count', 5)}>{text('label', 'Hello world')}</Badge>,
  { info: { inline: true } }
);
