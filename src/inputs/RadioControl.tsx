import React, { useEffect, useState } from 'react';

import { Styled } from '../Styled';

interface IPropsOuter extends IPropsInner {
  label: string;
}

interface IPropsInner {
  checked?: boolean;
  disabled?: boolean;
}

const Label = Styled<'span', IPropsInner>('span')(
  ({ theme }) => ({
    fontSize: theme.fontSizes.sm,
    lineHeight: theme.leading.tight,
    paddingLeft: theme.padding[1]
  }),
  ({ theme, checked }) => {
    if (checked) {
      return {
        color: theme.colors.primary
      };
    }
  },
  ({ theme, disabled }) => {
    if (disabled) {
      return {
        color: theme.colors.greyLight
      };
    }
  }
);

const Control = Styled<'span', IPropsInner>('span')(
  ({ theme }) => ({
    display: 'inline-block',
    position: 'relative',
    border: `${theme.borderWidths.xs} solid ${theme.colors.primary}`,
    borderRadius: theme.borderRadius.full,
    width: theme.width[3],
    height: theme.height[3],
    zIndex: 1,
    transition: `border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);`,
    '&::after': {
      boxSizing: 'content-box',
      content: '""',
      borderRadius: theme.borderRadius.full,
      backgroundColor: theme.colors.white,
      height: theme.width[1],
      left: '50%',
      position: 'absolute',
      top: '50%',
      width: theme.width[1],
      transform: 'translate(-50%,-50%) scale(0)',
      transition: 'transform .15s cubic-bezier(.71,-.46,.88,.6)'
    }
  }),
  ({ theme, checked }) => {
    if (checked) {
      return {
        backgroundColor: theme.colors.primary,
        '&::after': {
          transform: `translate(-50%,-50%) scale(1)`
        }
      };
    }
  },
  ({ theme, disabled }) => {
    if (disabled) {
      return {
        backgroundColor: theme.colors.greyLight,
        borderColor: theme.colors.greyLighter,
        '&::after': {
          borderColor: theme.colors.greyDarker
        }
      };
    }
  }
);
const OriginalControl = Styled('input')(({ theme }) => ({
  opacity: 0,
  outline: 'none',
  position: 'absolute',
  margin: theme.margin[0],
  width: 0,
  height: 0,
  zIndex: -1
}));

const Flex = Styled('label')(({ theme }) => ({
  display: 'flex'
}));

const Radio: React.FC<IPropsOuter> = ({ checked: propChecked, disabled, label }) => {
  const [checked, setChecked] = useState(propChecked);

  useEffect(() => {
    return () => {
      setChecked(!propChecked);
    };
  }, [propChecked]);
  return (
    <Flex role="radio">
      <Control checked={checked} disabled={disabled} />
      <OriginalControl
        type="radio"
        onChange={e => setChecked(e.target.checked)}
        checked={checked}
        disabled={disabled}
      />
      <Label checked={checked} disabled={disabled}>
        {label}
      </Label>
    </Flex>
  );
};

export default Radio;
