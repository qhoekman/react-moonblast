import { desaturate, lighten } from 'polished';

import { Styled } from '../Styled';
import PrimaryButton from './PrimaryButton';

const SecondaryButton = Styled(PrimaryButton)(
  ({ theme, color }) => ({
    backgroundColor: theme.colors.transparent,
    boxShadow: theme.shadows.none,
    border: `${theme.borderWidths.sm} solid ${theme.colors[color]}`,
    '&:hover': {
      backgroundColor: lighten(0.35, theme.colors[color])
    }
  }),
  ({ theme, disabled, color }) => {
    if (disabled) {
      return {
        border: `${theme.borderWidths.sm} solid ${desaturate(1, theme.colors[color])}`,
        '&:hover': {
          backgroundColor: theme.colors.transparent
        }
      };
    }
  }
);

export default SecondaryButton;
