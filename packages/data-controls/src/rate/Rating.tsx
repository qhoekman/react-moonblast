import { Styled } from '@moonblast/style';
import React, { ReactElement, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Color } from 'react-tailwhip/dist/theme';

interface IProps {
  value: number;
  index: number;
  allowHalf?: boolean;
  disabled?: boolean;
  focused?: boolean;
  bgColor?: Color;
  count: number;
  character: React.ReactNode;
  forwardedRef?: any;
  onClick(e: React.MouseEvent<HTMLDivElement>, index: number): void;
  onHover(e: React.MouseEvent<HTMLDivElement>, index: number): void;
}

interface ICharacterProps {
  focused?: boolean;
  filled?: boolean;
  half?: boolean;
  active?: boolean;
  bgColor: Color;
}

const Item = Styled('li')(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  margin: theme.margin[0],
  padding: theme.padding[0],
  cursor: 'pointer',
  transition: 'all .3s',
  '&:not(:last-child)': {
    marginRight: theme.margin[1]
  }
}));

const RatingFull = Styled<'div', ICharacterProps>('div')(({ theme, filled, bgColor }) => ({
  color: filled ? 'inherit' : theme.colors[bgColor],
  userSelect: 'none',
  transition: 'all .3s'
}));

const RatingHalf = Styled<'div', ICharacterProps>('div')(({ theme, half, bgColor }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: theme.width['1/2'],
  height: theme.height.full,
  overflow: 'hidden',
  opacity: half ? 1 : 0,
  color: half ? 'inherit' : theme.colors[bgColor],
  userSelect: 'none',
  transition: 'all .3s'
}));

const RatingComponent: React.FC<IProps> = props => {
  const {
    disabled,
    count,
    value,
    index,
    onHover,
    onClick,
    focused: defaultFocus,
    allowHalf,
    forwardedRef,
    character,
    bgColor = 'greyLight' as Color
  } = props;
  const [half, setHalf] = useState(false);
  const [active, setActive] = useState(false);
  const [focused, setFocused] = useState(defaultFocus);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const rateValue = index + 1;
    if (value === 0 && index === 0 && focused) {
      setFocused(true);
      setHalf(false);
      setActive(false);
    } else if (allowHalf && value + 0.5 === rateValue) {
      setHalf(true);
      setActive(true);
      setFilled(false);
      if (defaultFocus) {
        setFocused(true);
      } else {
        setFocused(false);
      }
    } else {
      setHalf(false);
      setActive(false);
      setFilled(rateValue <= value);
      if (rateValue === value && defaultFocus) {
        setFocused(true);
      }
    }
  }, [value, index, allowHalf]);

  const onHoverHandler: React.MouseEventHandler<HTMLDivElement> = useCallback(e => {
    onHover(e, index);
  }, []);

  const onClickHandler: React.MouseEventHandler<HTMLDivElement> = e => {
    onClick(e, index);
  };

  return (
    <Item>
      <div
        role='radio'
        aria-checked={value > index}
        aria-posinset={index + 1}
        aria-setsize={count}
        ref={forwardedRef}
        onClick={disabled ? undefined : onClickHandler}
        onMouseMove={disabled ? undefined : onHoverHandler}
      >
        {allowHalf && (
          <RatingHalf active={active} filled={filled} focused={focused} half={half} bgColor={bgColor}>
            {character}
          </RatingHalf>
        )}
        <RatingFull active={active} filled={filled} focused={focused} half={half} bgColor={bgColor}>
          {character}
        </RatingFull>
      </div>
    </Item>
  );
};

export const Rating = React.forwardRef<any, IProps>((props, ref) => {
  return <RatingComponent {...props} forwardedRef={ref} />;
});
