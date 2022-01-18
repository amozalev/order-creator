import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './styles';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

export interface NavItem {
    url: string;
    label: string;
    icon: IconDefinition;
}

export interface Props {
    navItem: NavItem;
    active?: boolean;
}

const SidenavItem = ({ navItem, active }: Props) => {
    return (
        <S.StyledSideNavItem to={navItem.url}>
            <FontAwesomeIcon icon={navItem.icon} />
            {navItem.label}
        </S.StyledSideNavItem>
    );
};

export default SidenavItem;
