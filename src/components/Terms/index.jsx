import React from 'react'

import {Accept, Container, Signed} from './styles'

const Terms = () => {
  return (
    <Container>
        <Accept>
        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
        </Accept>

        <Signed>
        Já tenho conta.
        </Signed>
    </Container>
  )
}

export default Terms