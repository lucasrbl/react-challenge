import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { Column, Container, Title } from './styles'
import Terms from '../Terms'

const Form = () => {
  return (
    <Container>
        <Column>
        <Title>Comece agora grátis!</Title>
        <p className='make-the-change'>Crie sua conta e make the change._</p>
        <Input />
        <Button variant="secondary" value='Criar minha conta' />
        </Column>
        <Column>
            <Terms />
        </Column>
    </Container>
   
  )
}

export default Form