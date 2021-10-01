import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Input } from 'components';
import React from 'react';
import BgLogin from 'shared/assets/bg-login.jpg';

type Props = {
  handleLogin: () => void;
};
const LoginView: React.FC<Props> = ({ handleLogin }: Props) => {
  return (
    <Flex minHeight="100vh">
      <Box
        display={['none', 'block']}
        minHeight="full"
        width="50%"
        backgroundImage={BgLogin}
        backgroundPosition="center -200px"
        bgRepeat="no-repeat"></Box>
      <Flex width="50%" alignItems="center" justifyContent="center" px={4}>
        <Stack py={4} width="400px" spacing={4}>
          <Stack spacing={0}>
            <Heading color="purple.600" textStyle="h1">
              Robeth Motors
            </Heading>
            <Text fontSize="md" color="gray.400">
              Please sign in.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Input placeholder="Enter username" label="Username" />
            <Input placeholder="Enter password" label="Password" />
            <Button onClick={handleLogin}>Login</Button>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default LoginView;
