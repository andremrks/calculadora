import  styled, { css } from "styled-components"

export const ButtonContainer = styled.button`
    width: 80px;
    height: 80px;
    padding: 10px;
    border: 1px solid transparent;
    background-color: #333a58;
    flex: 1;
    margin: 1px;
    color: rgba(255, 255, 255, .8);
    font-weight: 200;
    font-size: 24px;
    text-shadow: .2px .2px 1.5px rgba(255, 255, 255, .5);

    &:hover {
        opacity: 0.8;
    }

    ${({variant}) => variant !== "primary" && css`
        color: #ee4242;
        text-shadow: .2px .2px 1.5px rgba(238, 66, 66, .5);
    `}

    ${({variant}) => variant === "equal" && css`
        color: #fff;
        background-color: rgba(238, 66, 66, .6);
    `}

    ${({variant}) => variant === "remove" && css`
        visibility: hidden;
    `}
`