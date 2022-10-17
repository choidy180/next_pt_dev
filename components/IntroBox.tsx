import { useRecoilValue } from "recoil";
import { isThemeAtom } from "recoil/theme";
import styled from "styled-components";
import { IntroContentBox } from "./IntroContent";

export const IntroBox = () => {
    const isTheme = useRecoilValue(isThemeAtom);
    return (
        <Wrapper>
            <NavigationBox color={isTheme ? "rgb(116, 185, 255)" : "#FFE616"}>
                <Navigation>HOME</Navigation>
                <Navigation>EXAM1</Navigation>
                <Navigation>EXAM1</Navigation>
                <Navigation>EXAM1</Navigation>
                <Navigation>EXAM1</Navigation>
            </NavigationBox>
            <ContentBox>
                <IntroContentBox/>
                <IntroContentBox/>
            </ContentBox>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100%;
    margin-top: 74px;
    padding: 40px;
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
const NavigationBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    div{
        &:hover{
            background: ${props => props.color};
        }
    }
`
const Navigation = styled.div`
    width: 20%;
    padding: 10.5px 0;
    font-family: 'GmarketSansMedium';
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all .15s ease-in-out;
    border-radius: 4px;
`

const ContentBox = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`