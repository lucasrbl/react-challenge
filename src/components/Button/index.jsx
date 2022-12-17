import React from 'react'
import { ButtonContainer } from './styles'

const Button = ({value, variant="primary"}) => {
  return (
    <ButtonContainer variant={variant}>{value}</ButtonContainer>
  )
}

export default Button
