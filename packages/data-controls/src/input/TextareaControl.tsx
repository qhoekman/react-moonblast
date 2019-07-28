import { Styled } from '@moonblast/style';
import React, { InputHTMLAttributes, TextareaHTMLAttributes, useCallback, useState } from 'react';

import { BaseInput } from './InputControl';

const Container = Styled(BaseInput)(({ theme }) => ({
  resize: 'none',
  fontFamily: theme.fonts.sans
}));
const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = Container.withComponent('textarea');
export const InputTextarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = props => {
  const { value: propValue, ...rest } = props;
  const [value, setValue] = useState(propValue);

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return <Textarea onChange={onChange} value={value} {...rest} />;
};
