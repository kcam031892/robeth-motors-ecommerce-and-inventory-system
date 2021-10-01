import React, { useCallback } from 'react';
import { useLocation } from 'react-router';
import { AiFillDashboard } from 'react-icons/ai';
import { List } from '@chakra-ui/react';

import SidebarMenuItem from './SidebarMenuItem';
import SidebarMenuMultiLevel from './SidebarMenuMultiLevel';

import { ROUTES } from 'shared/constants/Routes';

const SidebarMenu: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const getActiveMenu = useCallback(
    (path: string) => {
      if (pathname.startsWith(path)) return true;
      return false;
    },
    [pathname],
  );
  return (
    <List spacing={3}>
      <SidebarMenuItem
        title="Dashboard"
        Icon={AiFillDashboard}
        to={ROUTES.DASHBOARD}
        active={getActiveMenu(ROUTES.DASHBOARD)}
      />
      <SidebarMenuMultiLevel
        title="Product Management"
        Icon={AiFillDashboard}
        active={getActiveMenu(ROUTES.PRODUCT_MANAGEMENT.PATH)}>
        <SidebarMenuItem
          title="Product"
          to={ROUTES.PRODUCT_MANAGEMENT.PRODUCT.LIST}
          active={getActiveMenu(ROUTES.PRODUCT_MANAGEMENT.PRODUCT.LIST)}
        />
        <SidebarMenuItem title="Variant" to="/asd" />
        <SidebarMenuItem title="Category" to="/asd" />
        <SidebarMenuItem title="Brand" to="/asd" />
      </SidebarMenuMultiLevel>
      <SidebarMenuMultiLevel title="Stock Management" Icon={AiFillDashboard}>
        <SidebarMenuItem title="Purchase Order" to="/asd" />
        <SidebarMenuItem title="Supplier" to="/asd" />
        <SidebarMenuItem title="Inventory" to="/asd" />
      </SidebarMenuMultiLevel>
      <SidebarMenuMultiLevel title="Point of Sales" Icon={AiFillDashboard}>
        <SidebarMenuItem title="Sales Order" to="/asd" />
      </SidebarMenuMultiLevel>
      <SidebarMenuItem title="Report Management" Icon={AiFillDashboard} to="/asd" />
      <SidebarMenuItem title="User Management" Icon={AiFillDashboard} to="/asd" />
    </List>
  );
};

export default SidebarMenu;
