import React from 'react';

import { Styled } from '../style/Styled';

interface IProps {
	text?: boolean;
}

export const Center = Styled<'div', IProps>('div')`
  box-sizing: content-box;
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
  text-align: ${({ text }) => (text ? 'center' : 'inherit')};
`;

export const IntrinsicCenter = Styled(Center)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
