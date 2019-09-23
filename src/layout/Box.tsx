import React from 'react';
import { Theme } from 'react-tailwhip/dist/theme';

import { Styled } from '../style/Styled';

interface IProps {
	padding?: keyof (typeof Theme.padding);
}

export const Box = Styled<'div', IProps>('div')`
  padding: ${({ theme, padding = '0' }) => theme.padding[`${padding}`]}
`;
