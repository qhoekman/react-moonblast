import { Pagination } from '@navigation/Pagination';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Theme from 'react-tailwhip';
import { Color } from 'react-tailwhip/dist/theme';

const Colors = Object.keys(Theme.colors) as Color[];

storiesOf('Navigation', module).add(
  'Pagination',
  () => (
    <div style={{ width: 300 }}>
      <Pagination color={select('color', Colors, 'teal')} parent={'news'} current={1} total={6} />
    </div>
  ),
  {
    info: { inline: true }
  }
);
