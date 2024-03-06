import styled, {css} from 'styled-components';

export const Container = styled.div`
    height: 400px;
    width:70%;
    display:flex;
    gap:80px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 50%;
    background-color: black;
`;

export const PostDescription = styled.div`
    height: 100%;
    width: 50%;
    background-color: black;
`;

export const PostGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-auto-rows: 300px;
    gap: 40px;
    margin-top: 100px;
    width: 80%;
    justify-content: center;
`;

export const PostContainer = styled(ImageContainer)`
    width: 100%;
    height: 100%;


`; 