import styled from "styled-components";

export const Container = styled.div `
    width: 374px;
    height: 450px;
    top: 153px;
    left: 748px;
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    Button {
        margin-top: 100px;
        width: 80%;
        padding: 6px;
    }
`

export const Title = styled.h2 `
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #FFFFFF;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;

    p.make-the-change {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }
`