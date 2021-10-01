import {
  Box,
  Flex,
  Link,
  ListIcon,
  ListItem,
  Text,
  useDisclosure,
  Icon as ChakraIcon,
  Collapse,
  List,
} from '@chakra-ui/react';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import React, { useEffect } from 'react';

const listItemStyle = {
  li: {
    paddingLeft: 3,
    py: 2,
  },
};

type Props = {
  title: string;
  children: React.ReactNode;
  Icon: React.ElementType;
  active?: boolean;
};
const SidebarMenuMultiLevel: React.FC<Props> = ({ title, children, Icon, active }: Props) => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onToggle();
  };

  useEffect(() => {
    if (active) {
      onOpen();
    } else {
      onClose();
    }
  }, [active, onOpen, onClose]);

  return (
    <ListItem color="gray.300" pl={2} py={2}>
      <Link onClick={handleToggle}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          _hover={{ color: 'pink.500' }}
          transition="ease-in-out 0.2s">
          <Flex alignItems="center">
            <ListIcon as={Icon} w={4} h={4} />
            <Text fontSize="sm" textTransform="capitalize">
              {title}
            </Text>
          </Flex>
          <Box marginRight={2}>
            {isOpen ? (
              <ChakraIcon as={RiArrowUpSFill} transition="ease-in 0.2s" h={4} w={4} />
            ) : (
              <ChakraIcon as={RiArrowDownSFill} h={4} w={4} />
            )}
          </Box>
        </Flex>
      </Link>
      <Collapse in={isOpen} animateOpacity>
        <List pt={4} pl={6} spacing={2} sx={listItemStyle}>
          {children}
        </List>
      </Collapse>
    </ListItem>
  );
};

export default SidebarMenuMultiLevel;
