import { InputCheckbox, InputControl, InputNumber, InputRadio, InputTextarea, Rate } from '@moonblast/data-controls';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Theme from 'react-tailwhip';
import { Color } from 'react-tailwhip/dist/theme';

const Colors = Object.keys(Theme.colors) as Color[];

storiesOf('Data Control', module)
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
        <InputTextarea value={text('label', 'Hello world')} />
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
        <InputCheckbox
          checked={boolean('checked', true)}
          disabled={boolean('disabled', false)}
          label={text('label', 'Label')}
        />
      </div>
    ),
    {
      info: { inline: true }
    }
  )
  .add(
    'InputNumber control',
    () => (
      <div style={{ width: 300 }}>
        <InputNumber disabled={boolean('disabled', false)} value={number('number', 0)} />
      </div>
    ),
    {
      info: { inline: true }
    }
  )
  .add(
    'Radio control',
    () => (
      <div style={{ width: 300 }}>
        <InputRadio
          name={'choose'}
          checked={boolean('checked', false)}
          disabled={boolean('disabled', false)}
          label={text('label', 'Label')}
        />
        <InputRadio
          name={'choose'}
          checked={boolean('checked', false)}
          disabled={boolean('disabled', false)}
          label={text('label', 'Label')}
        />
      </div>
    ),
    {
      info: { inline: true }
    }
  )
  .add('Rate control', () => (
    <Rate
      count={number('count', 5)}
      defaultValue={3.5}
      disabled={boolean('disabled', false)}
      allowClear={boolean('allowClear', true)}
      allowHalf={boolean('allowHalf', true)}
    />
  ));
