import React from 'react';
import { PropsWithChildren } from 'react';
import * as S from './styles';

export interface Props {
    color?: string;
}

const Footer = ({ children, color }: PropsWithChildren<Props>) => {
    return <S.StyledFooter color={color}>{children}</S.StyledFooter>;
};

export default Footer;
