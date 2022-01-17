import React from 'react';
import * as S from './styles';
import SidenavItem, { NavItem } from '../sidenav-item/sidenav-item';

export interface Props {
    navItems: NavItem[];
    color?: string;
}

const SideNavList = ({ navItems, color }: Props) => {
    return (
        <S.StyledSideNavList>
            {navItems.map((item, i) => (
                <SidenavItem key={i} navItem={item} />
            ))}
        </S.StyledSideNavList>
    );
};

export default SideNavList;
