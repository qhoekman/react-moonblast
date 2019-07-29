import { Styled } from '@moonblast/style';
import React, { forwardRef, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Color } from 'react-tailwhip/dist/theme';

import { Rating } from './Rating';
import { getOffsetLeft } from './utils';

const Container = Styled<'ul', { color: Color }>('ul')(({ theme, color }) => ({
  display: 'inline-block',
  outline: 'none',
  listStyle: 'none',
  padding: theme.padding[0],
  margin: theme.margin[0],
  fontSize: theme.fontSizes.lg,
  color: theme.colors[color]
}));

interface IProps {
  count: number;
  character: React.ReactNode;
  color?: Color;
  bgColor?: Color;
  defaultValue?: number;
  disabled?: boolean;
  allowHalf?: boolean;
  allowClear?: boolean;
  onChange?: React.ChangeEventHandler;
  onFocus?(): void;
  onBlur?(): void;
  onHoverChange?(value?: number): void;
}

type HoverEvent = (e: React.MouseEvent, index: number) => void | null;

// tslint:disable-next-line: max-func-body-length
export const Rate: React.FC<IProps> = props => {
  const {
    count,
    allowHalf = false,
    disabled,
    defaultValue = 0,
    onHoverChange,
    allowClear,
    onFocus,
    onBlur,
    color = 'yellowLight' as Color,
    bgColor = 'greyLight' as Color,
    character = '★'
  } = props;

  const [value, setValue] = useState(defaultValue);
  const [actualValue, setActualValue] = useState();
  const [hoverValue, setHoverValue] = useState();
  const [focused, setFocused] = useState(false);
  const rate = useRef<HTMLUListElement>(null);
  const ratings: Record<string, any> = {};

  const getRateValue = (index: number, x: number) => {
    let rateValue = index + 1;
    if (allowHalf) {
      const starEle = ReactDOM.findDOMNode(ratings[index].current);
      if (starEle instanceof Element) {
        const leftDis = getOffsetLeft(starEle);
        const width = starEle.clientWidth;

        if (leftDis) {
          if (x - leftDis < width / 2) {
            rateValue -= 0.5;
          }
        }
      }
    }

    return rateValue;
  };

  const onHover: HoverEvent = useCallback((e, index) => {
    const newValue = getRateValue(index, e.pageX);
    if (newValue !== actualValue) {
      setHoverValue(newValue);
      setActualValue(undefined);
    }
    if (onHoverChange) {
      onHoverChange(newValue);
    }
  }, []);

  const onLeave: React.MouseEventHandler = useCallback(e => {
    setHoverValue(undefined);
    setActualValue(undefined);
    if (onHoverChange) {
      onHoverChange(undefined);
    }
  }, []);

  const onClick: HoverEvent = (e, index) => {
    const newValue = getRateValue(index, e.pageX);
    let isReset = false;
    if (allowClear) {
      isReset = newValue === value;
    }

    onLeave(e);
    setValue(isReset ? 0 : newValue);
    setActualValue(isReset ? newValue : undefined);
  };

  const onFocusHandler = useCallback(() => {
    setFocused(true);
    if (onFocus) {
      onFocus();
    }
  }, []);

  const onBlurHandler = useCallback(() => {
    setFocused(false);
    if (onBlur) {
      onBlur();
    }
  }, []);

  const items = [];
  for (let index = 0; index < count; index = index + 1) {
    ratings[index] = React.useRef(null);
    items.push(
      <Rating
        ref={ratings[index]}
        index={index}
        count={count}
        character={character}
        disabled={disabled}
        allowHalf={allowHalf}
        value={hoverValue === undefined ? value : hoverValue}
        onClick={onClick}
        onHover={onHover}
        key={index}
        focused={focused}
      />
    );
  }

  return (
    <Container
      color={color}
      role='radiogroup'
      onMouseLeave={disabled ? undefined : onLeave}
      onFocus={disabled ? undefined : onFocusHandler}
      onBlur={disabled ? undefined : onBlurHandler}
      ref={rate}
    >
      {items}
    </Container>
  );
};
