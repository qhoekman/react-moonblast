import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Theme from 'react-tailwhip';
import { Color } from 'react-tailwhip/dist/theme';

import PrimaryButton, { Round } from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import TertiaryButton from '../buttons/TertiaryButton';

const Colors = Object.keys(Theme.colors) as Color[];
const Rounded = ['sm', 'md', 'full'] as Round[];

storiesOf('Button', module)
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
