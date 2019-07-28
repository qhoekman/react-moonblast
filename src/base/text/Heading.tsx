import { ITextProps, Text } from '@base/text/Text';
import { Styled } from '@style/Styled';
import React from 'react';

type Level = 1 | 2 | 3 | 4;

interface IProps extends ITextProps {
  level: Level;
}
const Container = Styled(Text)(({ theme }) => ({}));

export const Heading: React.SFC<IProps> = ({ level = 1, ...rest }) => {
  const HeadingLeveled = Container.withComponent(`h${level}` as 'h1');

  return <HeadingLeveled {...rest} />;
};
