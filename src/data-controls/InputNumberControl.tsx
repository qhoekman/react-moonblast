import { Styled } from '@style/Styled';
import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { BaseInput } from './InputControl';

interface IPropsOuter extends IPropsInner {
  value?: number;
}

interface IPropsInner {
  disabled?: boolean;
}

const Label = Styled<'span', IPropsInner>('span')(
  ({ theme }) => ({
    fontSize: theme.fontSizes.sm,
    lineHeight: theme.leading.tight,
    paddingLeft: theme.padding[1]
  }),
  ({ theme, disabled }) => {
    if (disabled) {
      return {
        color: theme.colors.greyLight
      };
    }
  }
);

const Decrease = Styled<'span', IPropsInner>('span')(
  ({ theme }) => ({
    position: 'absolute',
    cursor: 'pointer',
    color: theme.colors.grey,
    textAlign: 'center',
    top: 1,
    right: theme.width[6],
    width: theme.width[6],
    padding: `${theme.padding[4]} ${theme.padding[2]}`,
    height: theme.height.auto,
    lineHeight: theme.leading.tight,
    // borderLeft: `${theme.borderWidths.xs} solid ${theme.colors.primary}`,
    zIndex: theme.zIndex[10]
  }),

  ({ theme, disabled }) => {
    if (disabled) {
      return {
        backgroundColor: theme.colors.greyLight,
        borderColor: theme.colors.greyLighter
      };
    }
  }
);

const Increase = Styled(Decrease)(({ theme }) => ({
  right: 0
}));

const Control = Styled(BaseInput)(({ theme }) => ({
  appearance: 'none',
  paddingRight: theme.padding[4],
  width: theme.width.full,
  '&::-webkit-inner-spin-button': {
    appearance: 'none',
    margin: 0
  }
}));

const Container = Styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative'
}));

const InputNumber: React.FC<IPropsOuter> = ({ value: propValue = 0, disabled }) => {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    return () => {
      setValue(value);
    };
  }, [value]);
  return (
    <Container>
      <Decrease disabled={disabled} onClick={e => setValue(0 - 1)}>
        <FaMinus />
      </Decrease>
      <Increase disabled={disabled} onClick={e => setValue(0 + 1)}>
        <FaPlus />
      </Increase>
      <Control type="number" disabled={disabled} value={value} />
    </Container>
  );
};

export default InputNumber;
