import { Color } from 'react-tailwhip/dist/theme';

import { Styled } from '../Styled';

interface IProps {
  background: Color;
}

const Container = Styled<'div', IProps>('div')(({ theme, background }) => ({
  position: 'relative',
  backgroundColor: theme.colors.transparent,
  height: theme.height[48],
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -50,
    left: 0,
    width: theme.width.full,
    height: `calc(100% + 100px);`,
    backgroundColor: theme.colors[background],
    clipPath: `polygon(0% 0%, 100% 50px, 100% 100%, 0% calc(100% - 50px));`
  },
  '> div': {
    position: 'relative',
    padding: theme.padding[4],
    zIndex: 1
  }
}));

export default Container;
