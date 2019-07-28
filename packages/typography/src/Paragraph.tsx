import { Styled } from '@moonblast/style';
import React from 'react';

import { Text } from './Text';

const Container = Styled(Text)(({ theme }) => ({}));

export const Paragraph = Container.withComponent('p');
