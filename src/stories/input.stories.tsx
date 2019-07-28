import { InputCheckbox } from '@data-controls/CheckboxControl';
import { InputControl } from '@data-controls/InputControl';
import { InputNumber } from '@data-controls/InputNumberControl';
import { InputRadio } from '@data-controls/RadioControl';
import { InputTextarea } from '@data-controls/TextareaControl';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Theme from 'react-tailwhip';
import { Color } from 'react-tailwhip/dist/theme';

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
  );
