import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Props } from './sidenav-item';

export const StyledSideNavItem = styled(NavLink)`
    padding: 16px;
    //width: 100%;
    display: block;
    //padding: 8px 16px;
    text-align: left;
    border: none;
    white-space: normal;
    float: none;
    outline: 0;
    cursor: pointer;
    color: #757575;
    text-decoration: none;

    :hover {
        color: #fff;
        background-color: #ccc;
    }

    :active {
        color: #fff;
        background-color: #009688;
    }

    &[aria-current] {
        color: #fff;
        background-color: #009688;
    }

    svg {
        padding: 0 15px;
        font-size: 22px;
    }
`;
