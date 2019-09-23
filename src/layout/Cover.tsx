import { Styled } from '@style/Styled';
import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

interface IProps {
	selector: string;
	space?: keyof (typeof Theme.margin);
	padding?: keyof (typeof Theme.padding);
	minHeight?: keyof (typeof Theme.height) | string;
}

export const Cover = Styled<'div', IProps>('div')`
  & {
    display: flex;
    flex-direction: column;
    min-height: ${({ minHeight = 'screen', theme }) => theme.height[minHeight]};
    padding: ${({ theme, padding = '0' }) => theme.padding[padding]};
  }

  & > * {
    margin-top: ${({ theme, space = '0' }) => theme.margin[space]};
    margin-bottom: ${({ theme, space = '0' }) => theme.margin[space]};
  }

  & > :first-child:not(${({ selector }) => selector}) {
    margin-top: 0;
  }

  & > :last-child:not(${({ selector }) => selector}) {
    margin-bottom: 0;
  }

  & > ${({ selector }) => selector} {
    margin-top: auto;
    margin-bottom: auto;
  }
`;
