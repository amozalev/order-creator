import React, { useContext } from 'react';
import { PropsWithChildren } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../contexts/theme-context';

export interface Header {
    title: string;
    color?: string;
}

const Header = ({ children, title, color }: PropsWithChildren<Header>) => {
    const { isLightTheme, switchTheme } = useContext(ThemeContext);

    return (
        <S.StyledHeader color={color}>
            <h1>{title}</h1>
            <div className="rightToolbar">
                <div className="theme">
                    Switch theme:
                    <FontAwesomeIcon
                        onClick={switchTheme}
                        icon={isLightTheme ? faSun : faMoon}
                    />
                </div>
            </div>
            {children}
        </S.StyledHeader>
    );
};

export default Header;
