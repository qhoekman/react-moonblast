import { PrimaryButton } from '@base/buttons/PrimaryButton';
import { TertiaryButton } from '@base/buttons/TertiaryButton';
import { Styled } from '@style/Styled';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Color } from 'react-tailwhip/dist/theme';

interface IProps {
  parent: string;
  current: number;
  total: number;
  color: Color;
}

const Container = Styled('ul')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  listStyle: 'none',
  width: 'auto',
  padding: 0
}));

export const Pagination: React.SFC<IProps> = props => {
  const { parent, current, total, color } = props;
  const previous = current - 1 === 1 ? '/' : (current - 1).toString();
  const next = (current + 1).toString();
  const isFirst = current === 1;
  const isLast = current === total;

  return (
    <Container>
      {!isFirst && (
        <TertiaryButton color={color} href={`${parent}${previous}`} rel='prev'>
          <FaChevronLeft />
        </TertiaryButton>
      )}
      {Array.from({ length: total }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <PrimaryButton
            color={'white'}
            background={color}
            href={`${parent}${i === 0 ? '' : i + 1}`}
            style={{
              color: i + 1 !== current ? '#22292f' : '',
              background: i + 1 !== current ? '#fff' : ''
            }}
          >
            {i + 1}
          </PrimaryButton>
        </li>
      ))}
      {!isLast && (
        <TertiaryButton color={color} href={`${parent}-${next}`} rel='next'>
          <FaChevronRight />
        </TertiaryButton>
      )}
    </Container>
  );
};
