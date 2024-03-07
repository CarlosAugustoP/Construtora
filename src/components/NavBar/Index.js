import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Container, Content, SubNav, ContactLogo, MainLogo, Span} from './styles';
import {ThemeContext} from '../../Context/ThemeContext'; 
import Email from '../../../public/img/Email-icon.svg';
import Instagram from '../../../public/img/Instagram-icon.svg';
import Phone from '../../../public/img/Phone-icon.svg';
import Logo from '../../../public/img/Main-Logo.png';

const Title = styled.h1`
    margin-left: 20px;
    color: white;
`;

//creating a new component that will receive the src, alt and children props to improve modularization
const ContactInfo = ({ src, alt, children }) => (
    <span
      style={{
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }}
    >
      <ContactLogo src={src} alt={alt} style={{ marginLeft: '20px' }} />
      {children}
    </span>
  );

export default function Header(props){
    const {onToggleTheme} = useContext(ThemeContext);
    return (
        <div>
            <header>
                <nav
                    style={{
                        position: 'fixed',
                        width: '100%',
                        top: 0,
                        left: 0,
                    }}
                >
                    <Container
                        style={{
                            justifyContent: 'space-between',
                        }}
                    >
                        <MainLogo src={Logo} alt="Logo Peixoto e Vasconcelos"></MainLogo>
                        <Content>
                            <Span>Catálogo</Span>
                            <Span>Contato</Span>
                            <Span>Financiamento</Span>
                            <Span>Quem somos?</Span>
                        </Content>
                    </Container>
                    <SubNav>
                        <a style = {{textDecoration: 'none',
                                    color: 'black'
                        }}
                        href="https://www.google.com">
                            <ContactInfo src={Phone} alt="Telefone de contato">
                                +5581992036473
                            </ContactInfo>
                        </a>
                        <a style = {{textDecoration: 'none',
                                    color: 'black'
                        }}
                        href="https://www.google.com">
                        <ContactInfo src={Email} alt="Email de contato">
                            contato@peixotoevasconcelos.com
                        </ContactInfo>
                        </a>
                        <a style = {{textDecoration: 'none',
                                    color: 'black'
                        }}
                        href="https://www.instagram.com/construtorapeixotoevasconcelos/" target="__blank">
                        <ContactInfo src={Instagram} alt="Instagram de contato">
                            @peixotoevasconcelos
                        </ContactInfo>
                        </a>
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