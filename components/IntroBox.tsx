import styled from "styled-components";

export const IntroBox = () => {
    return (
        <Wrapper>123</Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100%;
    margin-top: 74px;
    padding: 40px 30px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: #F1F3F4;
    border-radius: 12px;
    @media (max-width: 640px) {
        margin-top: 48px;
        padding: 30px 20px;
    }
    @media (max-width: 450px) {
        margin-top: 42px;
    }
`