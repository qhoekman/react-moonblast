import { PrimaryButton } from '@moonblast/buttons';
import { Badge } from '@moonblast/data-renderers';
import { Round, Styled } from '@moonblast/style';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import Theme from 'react-tailwhip';
import { Color } from 'react-tailwhip/dist/theme';

const Colors = Object.keys(Theme.colors) as Color[];
const Rounded = ['sm', 'md', 'full'] as Round[];

storiesOf('Data Renderers', module).add(
  'Badge',
  () => {
    const Icons = {
      Clock: <FaRegClock />,
      Number: 5
    };
    const componentName = select('count', Object.keys(Icons), 'Number');
    const Box = Styled('div')(({ theme }) => ({
      verticalAlign: 'middle',
      padding: `${theme.padding[3]} ${theme.padding[4]}`,
      border: `${theme.borderWidths.xs} solid ${theme.colors.greyLight}`,
      borderRadius: theme.borderRadius.sm,
      display: 'inline-block'
    }));

    return (
      <div style={{ padding: 20 }}>
        <Badge
          count={Icons[componentName]}
          dot={boolean('dot', false)}
          bgColor={select<Color>('bgColor', Colors, 'red')}
          color={select<Color>('color', Colors, 'white')}
          showZero={boolean('showZero', true)}
          overflowCount={number('overflowCount', 99)}
        >
          <PrimaryButton color={'white'} background={'blue'}>
            {text('label', 'Hello world')}
          </PrimaryButton>
        </Badge>
      </div>
    );
  },
  { info: { inline: true } }
);
