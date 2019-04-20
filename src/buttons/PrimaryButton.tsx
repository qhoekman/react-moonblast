import React from 'react';
import { Color } from 'react-tailwhip/dist/theme';

import { Styled } from '../Styled';

interface IProps {
  color: Color;
  background?: Color;
  fullSize?: boolean;
}

const PrimaryButton = Styled<'a', IProps>('a')(
  ({ theme, color, background }) => ({
    color: theme.colors[color],
    backgroundColor: background ? theme.colors[background] : 'transparent',
    borderRadius: theme.borderRadius.md,
    boxShadow: `${theme.shadows.sm}`,
    fontWeight: theme.fontWeights.semibold,
    cursor: 'pointer',
    textDecoration: 'none',
    border: 0,
    padding: `${theme.padding['3']} ${theme.padding['4']}}`
  }),
  ({ theme, fullSize }) => {
    if (fullSize) {
      return { display: 'block', margin: 0, textAlign: 'center', width: theme.width.full };
    }
  }
);

export default PrimaryButton;
