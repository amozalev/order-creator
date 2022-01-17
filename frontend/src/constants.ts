import { NavItem } from './components/sidenav/sidenav-item/sidenav-item';
import { OrderType } from './components/orders/order/order';

export const SIDENAVITEMS: NavItem[] = [
    { url: '/', label: 'Home' },
    { url: '/orders', label: 'Orders' },
    {
        url: '/users',
        label: 'Users'
    }
];

export const ORDERS: OrderType[] = [
    {
        title: 'First order',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ordererId: '1111'
    },
    {
        title: 'Second order',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ordererId: '1111'
    },
    {
        title: 'Third order',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ordererId: '1111'
    }
];
