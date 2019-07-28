import { Styled } from '@style/Styled';
import React from 'react';

type TextType = 'secondary' | 'warning' | 'danger' | '';

export interface ITextProps {
  code?: boolean;
  delete?: boolean;
  disabled?: boolean;
  ellipsis?: boolean;
  mark?: boolean;
  strong?: boolean;
  underline?: boolean;
  type?: TextType;
}

export const Text = Styled<'span', ITextProps>('span')(
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
    },
  ({ theme, type }) =>
    (type === 'secondary' && {
      color: theme.colors.secondary
    }) ||
    (type === 'warning' && {
      color: theme.colors.orange
    }) ||
    (type === 'danger' && {
      color: theme.colors.red
    })
);
