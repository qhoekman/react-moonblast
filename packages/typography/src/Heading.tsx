import { Styled } from '@moonblast/style';
import React from 'react';

import { ITextProps, Text } from './Text';

type Level = 1 | 2 | 3 | 4;

interface IProps extends ITextProps {
  level: Level;
}
const Container = Styled(Text)(({ theme }) => ({}));

export const Heading: React.SFC<IProps> = ({ level = 1, ...rest }) => {
  const HeadingLeveled = Container.withComponent(`h${level}` as 'h1');

  return <HeadingLeveled {...rest} />;
};
