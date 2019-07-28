import { BaseInput } from '@data-controls/InputControl';
import { Styled } from '@style/Styled';
import React, { useCallback, useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface IPropsInner {
  disabled?: boolean;
}

interface IPropsOuter extends IPropsInner {
  value?: number;
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

export const InputNumber: React.FC<IPropsOuter> = ({ value: propValue = 0, disabled }) => {
  const [value, setValue] = useState(propValue);
  useEffect(() => {
    return () => {
      setValue(propValue);
    };
  }, [propValue]);

  const decreaseClick = useCallback(() => {
    setValue(value - 1);
  }, [value]);

  const increaseClick = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    setValue(parseInt(e.target.value));
  }, []);

  return (
    <Container>
      <Decrease disabled={disabled} onClick={decreaseClick}>
        <FaMinus />
      </Decrease>
      <Increase disabled={disabled} onClick={increaseClick}>
        <FaPlus />
      </Increase>
      <Control type='number' disabled={disabled} value={value} onChange={onChange} />
    </Container>
  );
};
