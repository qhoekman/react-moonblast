import { Styled } from '@moonblast/style';
import React from 'react';
import { Color } from 'react-tailwhip/dist/theme';

interface IProps {
  count?: React.ReactNode;
  showZero?: boolean;
  overflowCount?: number;
  dot?: boolean;
  className?: string;
  status?: 'success' | 'processing' | 'default' | 'error' | 'warning';
  color?: Color;
  text?: React.ReactNode;
  title?: string;
}

const Container = Styled('span')(({ theme }) => ({
  display: 'inline-block'
}));

export const Badge: React.FC<IProps> = props => {
  const { count } = props;

  return <Container />;
};
