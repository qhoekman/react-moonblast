import { Styled } from '@style/Styled';
import React from 'react';

interface IProps {
  code?: boolean;
  delete?: boolean;
  disabled?: boolean;
  ellipsis?: boolean;
  mark?: boolean;
  strong?: boolean;
  underline?: boolean;
}

const Container = Styled<'span', IProps>('span')(
  ({ theme }) => ({
    fontFamily: theme.fonts.sans
  }),
  ({ theme, code }) =>
    code && {
      margin: `0 ${theme.margin[1]}`,
      padding: `${theme.padding[1]} ${theme.padding[2]}`,
      fontFamily: theme.fonts.mono,
      border: `${theme.borderWidths.xs} solid ${theme.colors.greyLightest}`,
      borderRadius: theme.borderRadius.sm,
      backgroundColor: theme.colors.greyLightest
    },
  ({ theme, delete: del }) =>
    del && {
      textDecoration: 'line-through'
    },
  ({ theme, disabled }) =>
    disabled && {
      cursor: 'not-allowed',
      color: theme.colors.grey,
      userSelect: 'none'
    },
  ({ theme, ellipsis }) =>
    ellipsis && {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
  ({ theme, mark }) =>
    mark && {
      padding: theme.padding[0],
      backgroundColor: theme.colors.yellow
    },
  ({ theme, strong }) =>
    strong && {
      fontWeight: theme.fontWeights.bold
    },
  ({ theme, underline }) =>
    underline && {
      textDecoration: 'underline',
      textDecorationSkipInk: 'auto'
    }
);

export default Container;
