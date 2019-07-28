import Theme from 'react-tailwhip';
import { Color } from 'react-tailwhip/dist/theme';

export type Round = 'sm' | 'md' | 'full';

export const Colors = Object.keys(Theme.colors) as Color[];
export const Rounded = ['sm', 'md', 'full'] as Round[];