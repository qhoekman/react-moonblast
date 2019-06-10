import SecondaryButton from '@base/buttons/SecondaryButton';
import { Styled } from '@style/Styled';

const TertiaryButton = Styled(SecondaryButton)(({ theme }) => ({
  border: 0,
  fontWeight: theme.fontWeights.normal,
  textDecoration: 'underline',
  textUnderlinePosition: 'under'
}));

export default TertiaryButton;
