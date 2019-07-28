import { Styled } from '@moonblast/style';

import { SecondaryButton } from './SecondaryButton';

export const TertiaryButton = Styled(SecondaryButton)(({ theme }) => ({
  border: 0,
  fontWeight: theme.fontWeights.normal,
  textDecoration: 'underline',
  textUnderlinePosition: 'under'
}));
