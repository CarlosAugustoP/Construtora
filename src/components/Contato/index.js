import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../Context/ThemeContext';
import { Container, FormContainer, Title, InputField, Button } from './styles';

export default function Contato() {
  const inputFields = [
    { label: 'Nome:', type: 'text', id: 'nome', name: 'nome', required: true },
    { label: 'Email:', type: 'email', id: 'email', name: 'email', required: true },
    { label: 'Telefone:', type: 'tel', id: 'telefone', name: 'telefone', required: true },
    { label: 'Mensagem:', type: 'text', id: 'mensagem', name: 'mensagem', required: true },
  ];

  return (
    <Container>
      <Title>Fale Conosco!</Title>
      <FormContainer>
        {inputFields.map(({ label, type, id, name, required }) => (
          <div key={id} style={{ display: 'flex', flexDirection: 'column', fontSize: '15px' }}>
            <label htmlFor={id}>{label}</label>
            <InputField type={type} id={id} name={name} required={required}></InputField>
          </div>
        ))}
      </FormContainer>

      <Button type="submit" value="Enviar">
        Enviar
      </Button>
    </Container>
  );
}