import { darken, desaturate, lighten } from 'polished';
import React from 'react';
import { Color } from 'react-tailwhip/dist/theme';

import { Styled } from '../Styled';

export type Round = 'sm' | 'md' | 'full';
interface IProps {
  color: Color;
  background?: Color;
  disabled?: boolean;
  fullSize?: boolean;
  ripple?: boolean;
  rounded?: Round;
}
const DefaultColor = 'transparent' as Color;

const PrimaryButton = Styled<'a', IProps>('a')(
  ({ theme, color, background = DefaultColor }) => ({
    backgroundColor: theme.colors[background],
    border: 0,
    borderRadius: theme.borderRadius.md,
    boxShadow: `${theme.shadows.sm}`,
    color: theme.colors[color],
    cursor: 'pointer',
    fontWeight: theme.fontWeights.semibold,
    padding: `${theme.padding['3']} ${theme.padding['4']}}`,
    textDecoration: 'none',
    transition: 'background .3s',
    userSelect: 'none',
    '&:hover': {
      backgroundColor: darken(0.2, theme.colors[background])
    }
  }),
  ({ theme, fullSize }) => {
    if (fullSize) {
      return { display: 'block', margin: 0, textAlign: 'center', width: theme.width.full };
    }
  },
  ({ theme, disabled, color }) => {
    if (disabled) {
      return {
        color: desaturate(1, theme.colors[color]),
        pointerEvents: 'none',
        cursor: 'default'
      };
    }
  },
  ({ theme, rounded }) => {
    if (rounded) {
      return {
        borderRadius: theme.borderRadius[rounded]
      };
    }
  },
  ({ theme, ripple, disabled, background = DefaultColor }) => {
    if (ripple && !disabled) {
      return {
        backgroundPosition: 'center',
        transition: 'background .8s',
        '&:hover': {
          background: `${darken(0.2, theme.colors[background])} radial-gradient(circle, transparent 1%, ${darken(
            0.2,
            theme.colors[background]
          )} 1%) center/15000%`
        },
        '&:active': {
          backgroundColor: lighten(0.3, theme.colors[background]),
          backgroundSize: theme.width.full,
          transition: 'background 0s'
        }
      };
    }
  }
);

export default PrimaryButton;
