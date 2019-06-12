import Heading from '@base/text/Heading';
import Paragraph from '@base/text/Paragraph';
import Text from '@base/text/Text';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('Typography', module)
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
        type={select('type', ['secondary', 'warning', 'danger', ''], '' as any)}
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
    'Paragraph',
    () => (
      <Paragraph
        code={boolean('code', false)}
        delete={boolean('delete', false)}
        disabled={boolean('disabled', false)}
        ellipsis={boolean('ellipsis', true)}
        mark={boolean('mark', false)}
        strong={boolean('strong', false)}
        type={select('type', ['secondary', 'warning', 'danger', ''], '' as any)}
        underline={boolean('underline', false)}
      >
        {text(
          'label',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro non fuga vero magni voluptas! Reprehenderit quibusdam nostrum maxime quis reiciendis, iure illum placeat a aut ipsum, error hic odit.'
        )}
      </Paragraph>
    ),
    {
      info: { inline: true }
    }
  )
  .add(
    'Heading',
    () => (
      <Heading
        code={boolean('code', false)}
        delete={boolean('delete', false)}
        disabled={boolean('disabled', false)}
        ellipsis={boolean('ellipsis', true)}
        mark={boolean('mark', false)}
        strong={boolean('strong', false)}
        type={select('type', ['secondary', 'warning', 'danger', ''], '' as any)}
        underline={boolean('underline', false)}
        level={select('level', [1, 2, 3, 4], 1)}
      >
        {text('label', 'Hello world')}
      </Heading>
    ),
    {
      info: { inline: true }
    }
  );
