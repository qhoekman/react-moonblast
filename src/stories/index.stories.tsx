import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Theme from 'react-tailwhip';

import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import TertiaryButton from '../buttons/TertiaryButton';

const Colors = Object.keys(Theme.colors);

storiesOf('Button', module)
  .add(
    'Primary button',
    () => (
      <PrimaryButton
        fullSize={boolean('fullSize', false)}
        color={select('color', Colors, 'tealLight')}
        background={select('background', Colors, 'black')}
      >
        {text('label', 'Hello world')}
      </PrimaryButton>
    ),
    { info: { inline: true } }
  )
  .add(
    'Secondary button',
    () => (
      <SecondaryButton fullSize={boolean('fullSize', false)} color={select('color', Colors, 'tealLight')}>
        {text('label', 'Hello world')}
      </SecondaryButton>
    ),
    { info: { inline: true } }
  )
  .add(
    'Tertiary button',
    () => (
      <TertiaryButton fullSize={boolean('fullSize', false)} color={select('color', Colors, 'tealLight')}>
        {text('label', 'Hello world')}
      </TertiaryButton>
    ),
    { info: { inline: true } }
  );
