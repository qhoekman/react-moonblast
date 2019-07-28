import { Styled } from '@style/Styled';
import React from 'react';

type Size = 'sm' | 'md' | 'lg';

interface IProps {
  elevation: Size;
  rounded?: boolean;
}

export const Paper = Styled<'div', IProps>('div')(
  ({ theme, elevation }) => ({
    backgroundColor: theme.colors.white,
    boxShadow: theme.shadows[elevation],
    margin: theme.margin[4],
    padding: `${theme.padding[3]} ${theme.padding[4]}`
  }),
  ({ theme, rounded }) => {
    if (rounded) {
      return {
        borderRadius: theme.borderRadius.sm
      };
    }
  }
);
