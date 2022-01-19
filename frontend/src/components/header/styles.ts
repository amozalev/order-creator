import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    flex: 0 0 content;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid;
    padding: 0 1.5rem;
    box-sizing: border-box;

    ${({ theme }) => {
        return css`
            background-color: ${theme.colors.primary};
        `;
    }}
    
    h1 {
        display: flex;
        flex-grow: 0;
    }

    .rightToolbar {
        display: flex;
        flex-grow: 1;
        justify-content: end;
        align-items: center;
        text-align: right;
    }

    .theme {
        width: max-content;
    }

    svg {
        font-size: 22px;
        cursor: pointer;
        margin: 0 5px;
    }
`;
