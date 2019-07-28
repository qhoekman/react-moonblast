import { Styled } from '@moonblast/style';
import React, { useCallback, useEffect, useState } from 'react';

interface IPropsInner {
  checked?: boolean;
  disabled?: boolean;
}

interface IPropsOuter extends IPropsInner {
  label: string;
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
    borderRadius: theme.borderRadius.sm,
    width: theme.width[3],
    height: theme.height[3],
    zIndex: 1,
    transition: `border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);`,
    '&::after': {
      boxSizing: 'content-box',
      content: '""',
      border: `${theme.borderWidths.xs} solid ${theme.colors.white}`,
      borderLeft: 0,
      borderTop: 0,
      height: 7,
      left: 4,
      position: 'absolute',
      top: 1,
      transform: `rotate(45deg) scaleY(0)`,
      width: 3,
      transition: `transform .15s ease-in .05s`,
      transformOrigin: 'center'
    }
  }),
  ({ theme, checked }) => {
    if (checked) {
      return {
        backgroundColor: theme.colors.primary,
        '&::after': {
          transform: `rotate(45deg) scaleY(1)`
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

export const InputCheckbox: React.FC<IPropsOuter> = ({ checked: propChecked, disabled, label }) => {
  const [checked, setChecked] = useState(propChecked);

  useEffect(() => {
    return () => {
      setChecked(!propChecked);
    };
  }, [propChecked]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    setChecked(e.target.checked);
  }, []);

  return (
    <Flex role='checkbox' aria-checked={checked}>
      <Control checked={checked} disabled={disabled} />
      <OriginalControl type='checkbox' onChange={onChange} checked={checked} disabled={disabled} />
      <Label checked={checked} disabled={disabled}>
        {label}
      </Label>
    </Flex>
  );
};
