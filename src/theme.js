import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        primary: '#7FC2C2',
        secondary: '#E1774B',
        tertiary: '#F4DB60',
    },
    config: {
        initialColorMode: 'light',
    },
});

export const samurai = extendTheme({
    colors: {
        primary: '#000000',
        secondary: '#989C94',
        tertiary: '#C21515',
    },
    config: {
        initialColorMode: 'dark',
    },
});


export default { theme, samurai }