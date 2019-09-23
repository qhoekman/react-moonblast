import { Styled } from '@style/Styled';
import { AlignItemsProperty, JustifyContentProperty } from 'csstype';
import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

interface IProps {
	space?: keyof (typeof Theme.margin);
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
    margin: ${({ theme, space = '0' }) => theme.negativeMargin[`${space}`]};
  }
  & > * > * {
    margin: ${({ theme, space = '0' }) => theme.margin[`${space}`]}
  }
`;
