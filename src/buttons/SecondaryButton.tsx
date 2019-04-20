import { Styled } from '../Styled';
import PrimaryButton from './PrimaryButton';

export default Styled(PrimaryButton)(({ theme, color }) => ({
  color: theme.colors[color],
  backgroundColor: theme.colors.transparent,
  boxShadow: theme.shadows.none,
  border: `${theme.borderWidths.sm} solid ${theme.colors[color]}`
}));
