import { Styled } from '@style/Styled';
import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

interface IProps {
	side?: 'left' | 'right';
	space?: keyof (typeof Theme.margin);
	width?: keyof (typeof Theme.width);
	minWidth?: keyof (typeof Theme.width);
	noStretch?: boolean;
}

export const Sidebar = Styled<'div', IProps>('div')`
  overflow: hidden;
  & > * {
    display: flex;
    flex-wrap: wrap;
    align-items: ${({ noStretch }) => (noStretch ? 'flex-start' : 'stretch')};
    margin: ${({ theme, space = '0' }) => theme.negativeMargin[`${space}`]};
  }
  & > * > * {
    margin: ${({ theme, space = '0' }) => theme.margin[`${space}`]};
    flex-basis: ${({ width = 'auto' }) => width};
    flex-grow: 1;
  }

  & > * > :${({ side = 'left' }) => (side === 'left' ? 'last' : 'first')}-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: ${({ theme, width = '1/2', space = '0' }) =>
			`calc(${theme.width[width]} - ${theme.margin[space]})`};
  }
`;
