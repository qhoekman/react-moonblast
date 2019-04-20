import { Styled } from '../Styled';
import SecondaryButton from './SecondaryButton';

export default Styled(SecondaryButton)(({ theme, color }) => ({
  color: theme.colors[color],
  backgroundColor: theme.colors.transparent,
  border: 0,
  fontWeight: theme.fontWeights.normal,
  textDecoration: 'underline',
  textUnderlinePosition: 'under'
}));
