import { Flex, Text, Icon as ChakraIcon, Link, ListItem } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

type Props = {
  title: string;
  Icon?: React.ElementType;
  to: string;
  active?: boolean;
};
const SidebarMenuItem: React.FC<Props> = ({ title, Icon, to, active }: Props) => {
  return (
    <ListItem
      px={2}
      py={2}
      _hover={active ? { color: 'gray.300' } : { color: 'pink.500' }}
      color="gray.300"
      transition="ease-in-out 0.2s"
      bgColor={active ? 'accentColor' : ''}
      roundedLeft="sm">
      <Link to={to} as={ReactLink}>
        <Flex alignItems="center" gridGap={2}>
          {Icon && <ChakraIcon as={Icon} w={4} h={4} />}
          <Text fontSize="sm" textTransform="capitalize">
            {title}
          </Text>
        </Flex>
      </Link>
    </ListItem>
  );
};

export default SidebarMenuItem;
