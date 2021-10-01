import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps } from '@chakra-ui/react';
import React from 'react';
type LocalProps = {
  label?: string;
  error?: string;
};
type Props = LocalProps & InputProps;
const Input: React.FC<Props> = ({ label, error, ...inputProps }: Props) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel color="gray.600">{label}</FormLabel>
      <ChakraInput {...inputProps} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default Input;
