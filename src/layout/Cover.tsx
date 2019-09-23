import { Styled } from '@style/Styled';
import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

type Space = keyof (typeof Theme.margin);
type Height = keyof (typeof Theme.height);
type Padding = keyof (typeof Theme.padding);

interface IProps {
	selector: string;
	space?: Space;
	padding?: Padding;
	minHeight?: Height;
}

export const Cover = Styled<'div', IProps>('div')`
  & {
    display: flex;
    flex-direction: column;
    min-height: ${({ minHeight = 'screen' as Height, theme }) => theme.height[minHeight]};
    padding: ${({ theme, padding = '0' as Padding }) => theme.padding[padding]};
  }

  & > * {
    margin-top: ${({ theme, space = '0' as Space }) => theme.margin[space]};
    margin-bottom: ${({ theme, space = '0' as Space }) => theme.margin[space]};
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
