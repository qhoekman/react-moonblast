import { Styled } from '@style/Styled';
import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

type Padding = keyof (typeof Theme.padding);
interface IProps {
	padding?: Padding;
}

export const Box = Styled<'div', IProps>('div')`
  padding: ${({ theme, padding = '0' as Padding }) => theme.padding[padding]}
`;
