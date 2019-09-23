import { Styled } from '@style/Styled';
import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

type Space = keyof (typeof Theme.margin);
type Width = keyof (typeof Theme.width);

interface IProps {
	space?: Space;
	threshold: Width;
}

export const Switcher = Styled<'div', IProps>('div')`
    
  & > * {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: ${({ theme, space = '0' as Space }) => `calc(${theme.margin[space]} * -1)`};

  }

  & > * > * {
    flex-grow: 1;
    flex-basis: ${({ theme, threshold = '0' as Width, space = '0' as Space }) =>
			`calc((${theme.width[threshold]} - (100% - ${theme.margin[space]})) * 999)`};
    margin: ${({ theme, space = '0' as Space }) => theme.margin[space]};
  }

  & > * > :nth-last-child(n+5),
  & > * > :nth-last-child(n+5) ~ * {
    flex-basis: 100%;
  }
  
`;
