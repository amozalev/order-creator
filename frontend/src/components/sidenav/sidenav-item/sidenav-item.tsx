import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { StyledSideNavItem } from './styles';

export interface NavItem {
    url: string;
    label: string;
}

export interface Props {
    navItem: NavItem;
    active?: boolean;
}

const SidenavItem = ({ navItem, active }: Props) => {
    return (
        <S.StyledSideNavItem to={navItem.url}>
            {navItem.label}
        </S.StyledSideNavItem>
    );
};

export default SidenavItem;
