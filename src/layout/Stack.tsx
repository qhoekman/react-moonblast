import React from 'react';
import Theme from 'react-tailwhip';

import { Styled } from '../style/Styled';

interface IProps {
	space?: 'sm' | 'lg';
	recursive?: boolean;
}

interface IContainerProps {
	lineHeight: number;
	recursive?: boolean;
}

const Container = Styled<'div', IContainerProps>('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & ${({ recursive }) => (!recursive ? '>' : '')} * {
    margin-top: 0;
    margin-bottom: 0;
  }
  & ${({ recursive }) => (!recursive ? '>' : '')} * + * {
    margin-top: ${({ lineHeight }) => `${lineHeight}rem`};
  }
`;

export const Stack: React.FC<IProps> = ({ space: size = 'sm', children }) => {
	let lineHeight = Theme.leading.normal;

	if (size === 'lg') {
		lineHeight = lineHeight * 2;
	}

	return <Container lineHeight={lineHeight}>{children}</Container>;
};
