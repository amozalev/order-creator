import styled from 'styled-components';

export const StyledCard = styled.div`
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

export const CardImg = styled.div`
    min-width: 80px;
    height: 80px;
    border-radius: 0.3em;
    margin: 0 0.6em 0 0;
    border: solid 1px firebrick;
`;

export const CardContent = styled.div`
    box-sizing: border-box;
`;
