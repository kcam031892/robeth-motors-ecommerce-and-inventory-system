import { Stack } from '@chakra-ui/layout';
import React from 'react';
import SidebarMenu from './SidebarMenu';
import SidebarTitle from './SidebarTitle';

const Sidebar: React.FC = () => {
  return (
    <Stack bgGradient="linear(to-b,purple.900,purple.700)" minWidth="240px" pl={4} py={4} spacing={8}>
      <SidebarTitle />
      <SidebarMenu />
    </Stack>
  );
};

export default Sidebar;
