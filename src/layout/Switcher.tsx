import { Styled } from '@style/Styled';
import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

interface IProps {
	space?: keyof (typeof Theme.margin);
	threshold: keyof (typeof Theme.width);
}

export const Switcher = Styled<'div', IProps>('div')`
    
  & > * {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: ${({ theme, space = '0' }) => theme.negativeMargin[space]};
  }

  & > * > * {
    flex-grow: 1;
    flex-basis: ${({ theme, threshold, space }) =>
			`calc((${theme.width[threshold]} - (100% - ${theme.margin[space]})) * 999)`};
    margin: ${({ theme, space = '0' }) => theme.margin[space]};
  }

  & > * > :nth-last-child(n+5),
  & > * > :nth-last-child(n+5) ~ * {
    flex-basis: 100%;
  }
  
`;
