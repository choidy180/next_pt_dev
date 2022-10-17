import Image from "next/image";
import { useRecoilValue } from "recoil";
import { isThemeAtom } from "recoil/theme";
import styled from "styled-components";

export const IntroContentBox = () => {
    const isTheme = useRecoilValue(isThemeAtom);
    return (
        <Wrapper color={isTheme ? "rgb(116, 185, 255)" : "#FFF260"}>
            <ImageBox>
                <Image
                    src={'/images/1f4304db8f733e4a87c83b2530c477b89911de41.gif'}
                    layout={'fill'}
                    objectFit={'cover'}
                    alt={'IMAGE'}
                />
                <ImageDark/>
                <Viewing>VIEWING.</Viewing>
            </ImageBox>
            <Title>자바스크립트 공부 자바스크립...</Title>
            <ContentText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio nisi, autem illo molestias, itaque praesentium laboriosam, voluptatum eaque odit quas veniam minima mollitia deleniti. Possimus veniam adipisci saepe quibusdam?</ContentText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    width: calc(50% - 11px);
    padding: 24px 0;
    cursor: pointer;
    &::before{
        position: absolute;
        content: '';
        top: 0;
        width: 0;
        left: 0;
        height: 4px;
        background-color: ${props => props.color};
        z-index: 999;
        transition: all .3s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    img{
        transition: all .3s ease-in-out;
    }
    span{
        border-radius: 7px;
    }
    &:hover{
        img{
            transform: scale(1.2);
        }
        h1{
            color: ${props => props.color};
            text-shadow: .55px .55px #000000;
        }
        &::before{
            width: 100px;
        }
        h2{
            opacity: 0.8;
        }
        h4{
            opacity: 1;
            color: ${props => props.color};
            transform: translateX(-50%) translateY(-50%) scale(1);
        }
        p{
            color: rgb(99, 110, 114);
        }
    }
    @media (max-width: 640px) {
        width: 100%;
    }
`

const ImageBox = styled.div`
    width: 100%;
    &::after{
        content: '';
        display: block;
        padding-bottom: 60%;
    }    
`

const Title = styled.h1`
    font-family: 'GmarketSansMedium';
    font-weight: 700;
    margin-top: 12px;
    font-size: 30px;
    line-height: 34px;
    color: #141414;
    transition: all .15s ease-in-out;
    @media (max-width: 840px) {
        font-size: 20px;
        line-height: 22px;
    }
    @media (max-width: 640px) {
        font-size: 24px;
        line-height: 26px;
    }
`

const ContentText = styled.p`
    margin-top: 12px;
    font-size: 18px;
    -webkit-line-clamp: 3; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    line-height: 22px;
    height: 66px; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
    overflow: hidden;
    @media (max-width: 840px) {
        margin-top: 8px;
        font-size: 16px;
        line-height: 18px;
        height: 54px;
    }
`

const ImageDark = styled.h2`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    align-items: center;
    background-color: #141414;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    border-radius: 8px;
    &::after{
        content: '';
        display: block;
        padding-bottom: 60%;
    }    
`

const Viewing = styled.h4`
    position: absolute;
    color: #FFFFFF;
    font-family: 'GmarketSansMedium';
    font-weight: 700;
    font-size: 42px;
    z-index: 999999;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(0.7);
    opacity: 0;
    transition: all 0.3s ease-in-out;
    @media (max-width: 840px) {
        font-size: 32px;
    }
`