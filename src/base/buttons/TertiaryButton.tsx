import { Styled } from '../Styled';
import SecondaryButton from './SecondaryButton';

const TertiaryButton = Styled(SecondaryButton)(({ theme }) => ({
  border: 0,
  fontWeight: theme.fontWeights.normal,
  textDecoration: 'underline',
  textUnderlinePosition: 'under'
}));

export default TertiaryButton;
