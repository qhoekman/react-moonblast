import { PrimaryButton, SecondaryButton, TertiaryButton } from '@moonblast/buttons';
import { Badge } from '@moonblast/data-renderers';
import { Round } from '@moonblast/style';
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
    const Counts = {
      Clock: <FaRegClock />,
      Number: 5
    };
    const Boxes = {
      PrimaryButton: PrimaryButton,
      SecondaryButton: SecondaryButton,
      TertiaryButton: TertiaryButton
    };
    const countComponent = select('count', Object.keys(Counts), 'Number');
    const boxComponent = select('box', Object.keys(Boxes), 'PrimaryButton');
    const Box = Boxes[boxComponent];

    return (
      <div style={{ padding: 20 }}>
        <Badge
          count={Counts[countComponent]}
          dot={boolean('dot', false)}
          bgColor={select<Color>('bgColor', Colors, 'red')}
          color={select<Color>('color', Colors, 'white')}
          showZero={boolean('showZero', true)}
          overflowCount={number('overflowCount', 99)}
        >
          <Box
            color={select<Color>('boxColor', Colors, 'white')}
            background={select<Color>('boxBgColor', Colors, 'blueDark')}
          >
            {text('label', 'Hello world')}
          </Box>
        </Badge>
      </div>
    );
  },
  { info: { inline: true } }
);
