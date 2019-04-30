import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';
import React from 'react';

import { Styled } from '../Styled';
import { BaseInput } from './InputControl';

const Container = Styled(BaseInput)(({ theme }) => ({
  resize: 'none',
  fontFamily: theme.fonts.sans
}));
// TODO don't know what typing to use here
const Textarea: any = Container.withComponent('textarea');
export const TextareaControl: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = props => {
  const { value: propValue, ...rest } = props;
  const [value, setValue] = useState(propValue);
  return (
    <Textarea
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
      value={value}
      {...rest}
    />
  );
};
