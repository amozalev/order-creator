import styled from 'styled-components';

export const StyledUser = styled.div`
    width: 100%;
    display: flex;
    background: #eee;
    padding: 0.6em 1em 0.6em 0.6em;
    margin-bottom: 1em;
    border-radius: 0.3em;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.2) 3px 6px 10px;
    border: solid 1px #ccc;
`;

export const Avatar = styled.div`
    min-width: 80px;
    height: 80px;
    border-radius: 0.3em;
    background: linear-gradient(to bottom, #f1ece2 0%, #5c96c0 100%);
    opacity: 0.7;
    margin: 0 0.6em 0 0;
    border: solid 1px firebrick;
`;

export const UserInfo = styled.div`
    box-sizing: border-box;

    h3 {
        margin: 0;
        font-size: 1em;
    }

    p {
        margin: 0;
        font-size: 0.7em;
        color: #222;
    }
`;
