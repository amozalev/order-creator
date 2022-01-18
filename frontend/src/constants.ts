import { NavItem } from './components/sidenav/sidenav-item/sidenav-item';
import { OrderType } from './components/orders/order/order';
import { UserType } from './components/users/user/user';
import {
    faBriefcase,
    faHome,
    faUser
} from '@fortawesome/free-solid-svg-icons';

export const SIDENAVITEMS: NavItem[] = [
    {
        url: '/',
        label: 'Home',
        icon: faHome
    },
    {
        url: '/orders',
        label: 'Orders',
        icon: faBriefcase
    },
    {
        url: '/users',
        label: 'Users',
        icon: faUser
    }
];

export const ORDERS: OrderType[] = [
    {
        id: '1',
        title: 'First order',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ordererId: '1111'
    },
    {
        id: '2',
        title: 'Second order',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ordererId: '1111'
    },
    {
        id: '3',
        title: 'Third order',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ordererId: '1111'
    }
];

export const USERS: UserType[] = [
    {
        id: '1',
        name: 'Ivan Ivanov'
    },
    {
        id: '2',
        name: 'John Smith'
    },
    {
        id: '3',
        name: 'Dmitry Pavlov'
    }
];
