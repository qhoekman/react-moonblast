import { Styled } from '@moonblast/style';
import React, { useEffect, useState } from 'react';
import { Color } from 'react-tailwhip/dist/theme';

interface IProps {
  count?: number | React.ReactNode;
  showZero?: boolean;
  overflowCount?: number;
  dot?: boolean;
  color?: Color;
  bgColor?: Color;
  text?: React.ReactNode;
  title?: string;
}

const Container = Styled('span')(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  margin: theme.margin[0],
  padding: theme.padding[0]
}));

interface ICounterProps {
  color: Color;
  bgColor: Color;
}

const Dot = Styled<'span', ICounterProps>('span')(({ theme, color, bgColor }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  minWidth: theme.width[3],
  height: theme.height[3],
  backgroundColor: theme.colors[bgColor],
  borderRadius: theme.borderRadius.full,
  zIndex: theme.zIndex[10],
  transform: 'translate(25%, -25%)',
  transformOrigin: '100% 0%'
}));

const Counter = Styled<typeof Dot, ICounterProps>(Dot)(({ theme, color, bgColor }) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: theme.width[4],
  height: theme.height[4],
  padding: `${theme.padding[1]}`,
  fontWeight: theme.fontWeights.medium,
  fontSize: theme.fontSizes.xs,
  color: theme.colors[color],
  backgroundColor: theme.colors[bgColor],
  boxShadow: `0px 0px 1px ${theme.colors.white}`,
  lineHeight: theme.height[1],
  whiteSpace: 'nowrap',
  textAlign: 'center',
  transform: 'translate(50%, -50%)'
}));

const Count = Styled('span')(({ theme }) => ({
  display: 'inline-block'
}));

export const Badge: React.FC<IProps> = props => {
  const {
    count,
    showZero,
    children,
    color = 'white' as Color,
    bgColor = 'redDark' as Color,
    overflowCount,
    dot
  } = props;

  const [value, setValue] = useState(count);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    let newValue = count;

    if (showZero && newValue === null) {
      newValue = 0;
    }

    if (overflowCount && newValue && newValue > overflowCount) {
      newValue = parseInt(`${overflowCount}`.split(/\d/).join('9'));
      setOverflow(true);
    } else {
      setOverflow(false);
    }

    setValue(newValue);
  }, [count, showZero, overflowCount]);

  return (
    <Container>
      {children}
      {!dot && value !== null && (
        <Counter bgColor={bgColor} color={color}>
          <Count>
            {value}
            {overflow && <Count>+</Count>}
          </Count>
        </Counter>
      )}
      {dot && <Dot bgColor={bgColor} color={color} />}
    </Container>
  );
};
