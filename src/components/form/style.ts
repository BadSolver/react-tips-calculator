import styled from "styled-components";

export const FormContainer = styled.div`
    max-width: 453px;
    @media (max-width: 576px) {
        max-width: 380px;
    }
`
export const Title = styled.h1`
    font-weight: 400;
    text-align: center;
    font-size: 40px;
    line-height: 58px;
    margin-top: 203px;
`
export const Description = styled.p`
    font-size: 32px;
    line-height: 37.5px;
    text-align: center;
    color: #756C6C;
    opacity: 57%;
    margin-top: 45px;
`
export const Total = styled.h2`
    text-align: left;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.3px;
    font-weight: 700;
    margin-top: 45px;
    @media (max-width: 576px) {
        margin-left: 10px;
    }
`