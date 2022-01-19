import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSideNavItem = styled(NavLink)`
    padding: 1.5rem;
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

    ${({ theme }) => {
        return css`
            :active {
                color: #fff;
                background-color: ${theme.colors.primary};
            }

            &[aria-current] {
                color: #fff;
                background-color: ${theme.colors.primary};
            }
        `;
    }}
    
    :hover {
        color: #fff;
        background-color: #ccc;
    }

    svg {
        padding-right: 15px;
        font-size: 22px;
    }
`;
