import { Styled } from '@style/Styled';
import { AlignItemsProperty, JustifyContentProperty } from 'csstype';
import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

type Space = keyof (typeof Theme.margin);
interface IProps {
	space?: Space;
	justify?: JustifyContentProperty;
	align?: AlignItemsProperty;
}

export const Cluster = Styled<'div', IProps>('div')`
  overflow: hidden;
  & > * {
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ justify = 'flex-start' }) => justify};
    align-items: ${({ align = 'center' }) => align};
    margin: ${({ theme, space = '0' as Space }) => `calc(${theme.margin[space]} * -1)`};
  }
  & > * > * {
    margin: ${({ theme, space = '0' as Space }) => theme.margin[space]}
  }
`;
