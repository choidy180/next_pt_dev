import { useRecoilValue } from "recoil";
import { isThemeAtom } from "recoil/theme";
import styled from "styled-components"

export const ContentWrapper = ({children}:any) => {
    const isTheme = useRecoilValue(isThemeAtom);
    return (
        <Wrapper>
            <Title style={isTheme === true ? {color : 'rgb(116, 185, 255)'} : {color: '#FFE616'}}>PORTFOLIO</Title>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: calc(100% - 80px);
    max-width: 1280px;
    min-width: 400px;
    display: flex;
    justify-content: center;
    @media (max-width: 640px) {
        width: calc(100vw - 20px);
        min-width: auto;
    }
`
const Title = styled.h1`
    position: absolute;
    top: 10px;
    font-size: 84px;
    font-family: 'GmarketSansMedium';
    font-weight: 700;
    color: #EDEDED;
    text-shadow: 2px 2px #9F9F9F;
    color: ${props =>props.color};
    transition: all .15s ease-in-out;
    @media (max-width: 640px) {
        font-size: 56px;
    }
    @media (max-width: 440px) {
        font-size: 44px;
    }
`