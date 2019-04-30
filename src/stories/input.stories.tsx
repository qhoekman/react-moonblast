import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Theme from 'react-tailwhip';
import { Color } from 'react-tailwhip/dist/theme';

import CheckboxControl from '../inputs/CheckboxControl';
import { InputControl } from '../inputs/InputControl';
import { TextareaControl } from '../inputs/TextareaControl';

const Colors = Object.keys(Theme.colors) as Color[];

storiesOf('Inputs', module)
  .add(
    'Input control',
    () => (
      <div style={{ width: 300 }}>
        <InputControl
          color={select('color', Colors, 'teal')}
          outlined={boolean('outlined', false)}
          value={text('label', 'Hello world')}
        />
      </div>
    ),
    {
      info: { inline: true }
    }
  )
  .add(
    'Textarea control',
    () => (
      <div style={{ width: 300 }}>
        <TextareaControl value={text('label', 'Hello world')} />
      </div>
    ),
    {
      info: { inline: true }
    }
  )
  .add(
    'Checkbox control',
    () => (
      <div style={{ width: 300 }}>
        <CheckboxControl checked={boolean('checked', true)} disabled={boolean('disabled', false)} />
      </div>
    ),
    {
      info: { inline: true }
    }
  );
