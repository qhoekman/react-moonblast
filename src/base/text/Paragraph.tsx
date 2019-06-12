import Text from '@base/text/Text';
import { Styled } from '@style/Styled';
import React from 'react';

const Container = Styled(Text)(({ theme }) => ({}));

export default Container.withComponent('p');
