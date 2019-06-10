import { Styled } from '@style/Styled';
import React, { InputHTMLAttributes, useState } from 'react';
import { Color } from 'react-tailwhip/dist/theme';

interface IProps {
  color?: Color;
  outlined?: boolean;
}

const DefaultColor = 'primary' as Color;

export const BaseInput = Styled<'input', IProps>('input')(
  ({ theme, color = DefaultColor }) => ({
    transition: 'background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1)',
    display: 'block',
    width: theme.width.full,
    border: 0,
    margin: `${theme.margin[1]} ${theme.margin[0]}`,
    padding: `${theme.padding[4]} ${theme.padding[2]}`,
    paddingBottom: theme.padding[2],
    background: `${theme.colors.white} no-repeat`,
    backgroundImage: `linear-gradient(to bottom, ${theme.colors[color]}, ${
      theme.colors[color]
    }), linear-gradient(to bottom, silver, silver)`,
    backgroundSize: '0 2px, 100% 1px',
    backgroundPosition: '50% 100%, 50% 100%',
    caretColor: theme.colors[color],
    '::placeholder': {
      fontSize: theme.fontSizes.sm
    },
    '&:focus': {
      backgroundSize: '100% 2px, 100% 1px',
      outline: 'none',
      '::placeholder': {
        fontSize: theme.fontSizes.xs,
        bottom: theme.padding[4],
        position: 'relative'
      }
    }
  }),
  ({ theme, outlined }) => {
    if (outlined) {
      return {
        background: theme.colors.white
      };
    }
  }
);

const Group = Styled<'div', IProps>('div')(
  ({ theme }) => ({
    display: 'flex'
  }),
  ({ theme, outlined, color = DefaultColor }) => {
    if (outlined) {
      return {
        border: `${theme.borderWidths.xs} solid ${theme.colors.greyDark}`
      };
    }
  }
);

export const InputControl: React.FC<IProps & InputHTMLAttributes<HTMLInputElement>> = props => {
  const { color, outlined, value: propValue, ...rest } = props;
  const [value, setValue] = useState(propValue);
  return (
    <Group color={color} outlined={outlined}>
      <BaseInput color={color} onChange={e => setValue(e.target.value)} value={value} outlined={outlined} {...rest} />
    </Group>
  );
};
