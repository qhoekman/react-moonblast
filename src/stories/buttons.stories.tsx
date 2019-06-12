import PrimaryButton from '@base/buttons/PrimaryButton';
import SecondaryButton from '@base/buttons/SecondaryButton';
import TertiaryButton from '@base/buttons/TertiaryButton';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Colors, Round, Rounded } from '@style/types';
import React from 'react';
import { Color } from 'react-tailwhip/dist/theme';

storiesOf('Buttons', module)
  .add(
    'Primary button',
    () => (
      <PrimaryButton
        fullSize={boolean('fullSize', false)}
        ripple={boolean('ripple', true)}
        disabled={boolean('disabled', false)}
        rounded={select<Round>('rounded', Rounded, 'md')}
        color={select<Color>('color', Colors, 'tealLight')}
        background={select<Color>('background', Colors, 'black')}
      >
        {text('label', 'Hello world')}
      </PrimaryButton>
    ),
    { info: { inline: true } }
  )
  .add(
    'Secondary button',
    () => (
      <SecondaryButton
        fullSize={boolean('fullSize', false)}
        ripple={boolean('ripple', true)}
        rounded={select<Round>('rounded', Rounded, 'md')}
        disabled={boolean('disabled', false)}
        color={select('color', Colors, 'tealLight')}
      >
        {text('label', 'Hello world')}
      </SecondaryButton>
    ),
    { info: { inline: true } }
  )
  .add(
    'Tertiary button',
    () => (
      <TertiaryButton
        fullSize={boolean('fullSize', false)}
        ripple={boolean('ripple', true)}
        rounded={select<Round>('rounded', Rounded, 'md')}
        disabled={boolean('disabled', false)}
        color={select('color', Colors, 'tealLight')}
      >
        {text('label', 'Hello world')}
      </TertiaryButton>
    ),
    { info: { inline: true } }
  );
