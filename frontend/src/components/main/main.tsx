import React from 'react';
import { PropsWithChildren } from 'react';
import * as S from './styles';

export interface Props {
    color?: string;
}

const Main = ({ children, color }: PropsWithChildren<Props>) => {
    return <S.StyledMain color={color}>{children}</S.StyledMain>;
};

export default Main;
