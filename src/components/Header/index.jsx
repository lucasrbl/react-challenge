import React from 'react';
import { Container, HomeTitle, Row, Wrapper } from './styles';
import logo from '../../assets/logo-dio.png';
import Button from '../Button';

const Header = () => {
  return (
   <Wrapper>
    <Container>
        <Row>
        <img src={logo} alt="Logo DIO" />
        </Row>
        <Row>
            <HomeTitle>
                Home
            </HomeTitle>
            <Button value='Entrar' />
            <Button value='Cadastrar' />
        </Row>
    </Container>
    </Wrapper>
  )
}

export { Header }