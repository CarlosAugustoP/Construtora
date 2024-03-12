import styled from 'styled-components';

export const Container = styled.div`
    height: 330px;
    width:70%;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const PostDescription = styled.div`
    height: 100%;
    width: 50%;
`;

export const ImageContainer = styled(PostDescription)`    
    img {
        background-color: #fff;
        color: #575757;
        height: 100%;
        object-fit: cover;
        border: 5px solid #FFF;
        box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
        transition: opacity 0.5s ease; 
    }
    
    &:hover {
        img {
            cursor: pointer;
            opacity: 0.2;
        }
    }
    
    &:hover img {
        opacity: 0.2; 
    }
`;

export const BigImageContainer = styled(ImageContainer)`  
display: flex;
align-items: center;
gap:5px;

    &:hover img {
        opacity: 1.0;
        cursor: default; 
    }
    svg {
        height: 40px;
        width: 40px;
        
    }
`;