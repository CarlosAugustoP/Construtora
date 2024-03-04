import styled, {css} from 'styled-components';

export const Container = styled.nav`
    height: 75px;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 55%;
    background-color: black;
`;

export const Content = styled(Container)`
    font-weight: 200;
    font-style: normal;
    gap:45px;
`;

export const SubNav = styled(Content)`
    background-color: #B0A494;
    width: 100%;
    color: black;
    font-weight: 300;
    height: 40px;
`;

export const ContactLogo = styled.img`
    width: 20px;
    height: 20px;
`;

export const MainLogo = styled.img`
    margin-left: 20px;
    width: 60px;
    height: 60px;
`;
