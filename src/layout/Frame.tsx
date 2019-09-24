import { Styled } from '@style/Styled';
import React from 'react';

interface IProps {
	ratioX?: number;
	ratioY?: number;
}

export const Frame = Styled<'div', IProps>('div')`
  padding-bottom: calc(${({ ratioX = 16, ratioY = 9 }) => ratioY / ratioX} * 100%);
  position: relative;

  & > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > img,
  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
`;
