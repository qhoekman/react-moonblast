import React from 'react';

import { Styled } from '../Styled';

type Size = 'sm' | 'md' | 'lg';

interface IProps {
  elevation: Size;
  rounded?: boolean;
}

const Container = Styled<'div', IProps>('div')(
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

export default Container;
