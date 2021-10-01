import { Avatar, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Flex bgColor="white" px={6} py={4} justifyContent="flex-end" alignItems="center">
      <Menu>
        <MenuButton>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" h={10} w={10} />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
