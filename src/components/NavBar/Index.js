import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Container, Content, SubNav, ContactLogo, MainLogo} from './styles';
import {ThemeContext} from '../../Context/ThemeContext'; 
import Email from '../../../public/img/Email-icon.svg';
import Instagram from '../../../public/img/Instagram-icon.svg';
import Phone from '../../../public/img/Phone-icon.svg';
import Logo from '../../../public/img/Main-Logo.png';

const Title = styled.h1`
    margin-left: 20px;
    color: white;
`;

export default function Header(props){
    const {onToggleTheme} = useContext(ThemeContext);
    return (
        <div>
            <header>
                <nav
                style = {{
                    position: 'fixed',
                    width: '100%',
                    top: 0,
                    left: 0,   
                }}>
                    <Container style = {{
                        justifyContent: 'space-between'
                        }}>
                        <MainLogo src = {Logo} alt = "Logo Peixoto e Vasconcelos"></MainLogo>
                        <Content>
                            <span>Catálogo</span>
                            <span>Contato</span>
                            <span>Financiamento</span>
                            <span>Quem somos?</span>
                        </Content>
                    </Container>
                    <SubNav>
                            <span
                                style = {{
                                    marginLeft: '20px',
                                    display: 'flex',
                                    gap: '5px',
                                    alignItems: 'center'
                                }}>
                                <ContactLogo src={Phone} alt="Telefone de contato"/>
                                +5581992036473
                            </span>
                            <span
                                style = {{
                                    display: 'flex',
                                    gap: '5px',
                                    alignItems: 'center'
                                }}>
                                <ContactLogo src={Email} alt="Email de contato"/>
                                contato@peixotoevasconcelos.com</span>
                            <span
                            style = {{
                                display: 'flex',
                                gap: '5px',
                                alignItems: 'center'
                            }}>
                                <ContactLogo src={Instagram} alt="Instagram de contato"/>
                                @peixotoevasconcelos
                            </span>
                    </SubNav>
                </nav>
            </header>
            {props.children}
        </div>
    );
}

Header.proptypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

Header.defaultProps = { 
    title: 'Construtora Peixoto e Vasconcelos'
};