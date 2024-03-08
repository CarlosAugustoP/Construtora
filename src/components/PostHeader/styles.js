import styled, {css} from 'styled-components';
import TestImageHouse from '../../../public/img/TestImageHouse.png';

export const Container = styled.div`
    height: 400px;
    width:70%;
    display:flex;
    
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
    }
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
    padding: 0;
    img {
        background-color: #fff;
        color: #575757;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const LeftArrow = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 132%;
  left: 50px;
`;

export const RightArrow = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 132%;
  right: 50px;
`;
