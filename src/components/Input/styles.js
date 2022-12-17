import styled from "styled-components";

export const InputContainer = styled.div `
    width: 100%;
    max-width: 320px;
    height: 30px;
    margin-top: 30px;
    display: flex;
    flex-direction: column
`

export const Icon = styled.div `
    margin-right: 10px;
`

export const InputText = styled.input `
    width: 100%;
    height: 30px;
    border: none;
    color: #FFFFFF;
    background: transparent;
    border-bottom: 1px solid #3B3450;
    flex: 1;
    font-family: 'Open Sans';

    &::placeholder {
        color: #FFFFFF;
    }

`

export const Row = styled.div `
    display: flex;
    align-items: center;
`