export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
    border: '2px solid',
    rounded: 'md',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bgGradient: 'linear(to-r, purple.400, purple.600)',
      color: 'white',
      _hover: {
        bg: 'transparent',
        border: '2px solid',
        borderColor: 'purple.500',
        color: 'purple.500',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};
