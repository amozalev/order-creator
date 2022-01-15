import React from 'react';
import { PropsWithChildren } from 'react';
import * as S from './styles';

export interface Header {
    color?: string;
}

const Header = ({ children, color }: PropsWithChildren<Header>) => {
    return <S.StyledHeader color={color}>{children}</S.StyledHeader>;
};

export default Header;
