import PrimaryButton, { Round } from '@base/buttons/PrimaryButton';
import SecondaryButton from '@base/buttons/SecondaryButton';
import TertiaryButton from '@base/buttons/TertiaryButton';
import Text from '@base/text/Text';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Theme from 'react-tailwhip';
import { Color } from 'react-tailwhip/dist/theme';

const Colors = Object.keys(Theme.colors) as Color[];
const Rounded = ['sm', 'md', 'full'] as Round[];
const HeadingLevel = [1, 2, 3, 4, 5, 6];

storiesOf('Base Components', module)
  .add(
    'Text',
    () => (
      <Text
        code={boolean('code', false)}
        delete={boolean('delete', false)}
        disabled={boolean('disabled', false)}
        ellipsis={boolean('ellipsis', true)}
        mark={boolean('mark', false)}
        strong={boolean('strong', false)}
        underline={boolean('underline', false)}
      >
        {text('label', 'Hello world')}
      </Text>
    ),
    {
      info: { inline: true }
    }
  )
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
