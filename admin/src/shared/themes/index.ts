import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { components } from './components';

const themes = {
  components,
  colors,
};

export const theme = extendTheme(themes);
