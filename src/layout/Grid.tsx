import { Styled } from '@style/Styled';
import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

type Gap = keyof (typeof Theme.margin);
type Width = keyof (typeof Theme.width);
interface IProps {
	gap?: Gap;
	min?: Width;
}
/*
  TODO: wait for CSS math functions support
  url https://caniuse.com/#feat=css-math-functions
*/
export const Grid = Styled<'div', IProps>('div')`
  display: grid;
  grid-gap: ${({ theme, gap = '0' as Gap }) => theme.margin[gap]};
  grid-template-columns: repeat(auto-fit, minmax(${({
		theme,
		min: columnWidth = 'auto' as Width
	}) => theme.width[columnWidth]}, 1fr));
`;
