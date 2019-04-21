import { Styled } from '../Styled';
import { BaseInput } from './InputControl';

const Container = Styled(BaseInput)(({ theme }) => ({
  resize: 'none',
  fontFamily: theme.fonts.sans
}));

export default Container.withComponent('textarea');
