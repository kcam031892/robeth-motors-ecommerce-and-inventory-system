import { Flex, Box } from '@chakra-ui/react';
import { Sidebar } from 'components/Sidebar';
import { Header } from 'components/Header';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Flex minHeight="100vh">
      <Sidebar>
        <h1>Sidebar</h1>
      </Sidebar>
      <Box bgColor="gray.100" flex={1}>
        <Header />
        <Box p={4}>
          <Box bgColor="white" minHeight="520px" px={6} py={4} shadow="md" rounded="md">
            {children}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
