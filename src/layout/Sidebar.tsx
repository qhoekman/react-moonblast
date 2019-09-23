import { Styled } from '@style/Styled';
import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

type Space = keyof (typeof Theme.margin);
type Width = keyof (typeof Theme.width);

interface IProps {
	side?: 'left' | 'right';
	space?: Space;
	width?: Width;
	minWidth?: Width;
	noStretch?: boolean;
}

export const Sidebar = Styled<'div', IProps>('div')`
  overflow: hidden;
  & > * {
    display: flex;
    flex-wrap: wrap;
    align-items: ${({ noStretch }) => (noStretch ? 'flex-start' : 'stretch')};
    margin: ${({ theme, space = '0' as Space }) => `calc(${theme.margin[space]} * -1)`};
  }
  & > * > * {
    margin: ${({ theme, space = '0' as Space }) => theme.margin[space]};
    flex-basis: ${({ width = 'auto' }) => width};
    flex-grow: 1;
  }

  & > * > :${({ side = 'left' }) => (side === 'left' ? 'last' : 'first')}-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: ${({ theme, width = '1/2' as Width, space = '0' as Space }) =>
			`calc(${theme.width[width]} - ${theme.margin[space]})`};
  }
`;
