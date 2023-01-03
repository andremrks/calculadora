import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 768px) {
        margin: 0 auto;
        width: 30%;
    }
`

export const Content = styled.div`
    padding: 1.5px;
    background-color: #252b4b;
    width: 80%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`