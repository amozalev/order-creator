import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    flex: 0 0 content;
    background-color: #009688;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid;
    padding: 0 1.5rem;
    box-sizing: border-box;

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
