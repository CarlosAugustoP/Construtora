import styled, {css} from 'styled-components';
import TestImageHouse from '../../../public/img/TestImageHouse.png';

export const Container = styled.div`
    height: 310px;
    width:70%;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const PostDescription = styled.div`
    height: 100%;
    width: 50%;
    padding-left: 80px;
    
`;

export const ImageContainer = styled(PostDescription)`    
    img {
        background-color: #fff;
        color: #575757;
        height: 100%;
        margin-right: 20px;
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


export const PostContainer = styled(ImageContainer)`
    width: 100%;
    height: 100%;
    padding: 0;
    img {
        background-color: #fff;
        color: #575757;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const LeftArrow = styled.img`
    cursor: pointer;
    height: 50px;
`;

export const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`;

export const ScrollingContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    transition: transform 0.5s ease;
`;

export const BigImageContainer = styled(ImageContainer)`  
    &:hover img {
        opacity: 1.0;
        cursor: default; 
    }
    
`;
