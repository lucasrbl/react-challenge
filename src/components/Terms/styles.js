import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

`

export const Accept = styled.p `
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;

        color: #FFFFFF;
`

export const Signed = styled.p `
        font-family: 'Open Sans';
        font-style: normal;
        padding: 5px;
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;

        color: #FFFFFF;

        &::after {
            color: #23DD7A;
            content: ' Fazer Login'
        }
`



