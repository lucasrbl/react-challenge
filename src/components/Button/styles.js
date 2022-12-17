import styled, { css } from "styled-components";

export const ButtonContainer = styled.button `
    background-color: #565656;
    color: #FFFFFF;
    width: 100%;
    min-width: 120px;
    padding: 2px 12px;
    cursor: pointer;
    position: relative;
    border-radius: 20px;
    margin-left: 10px;

    ${({ variant }) => variant !== "primary" && css `
        background: #E4105D;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}

`

