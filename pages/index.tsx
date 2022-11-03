import { ContentWrapper } from 'components/ContentWrapper';
import { NextPage } from 'next';
import Image from 'next/image';
import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isThemeAtom } from 'recoil/theme';
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
import { IntroBox } from 'components/IntroBox';

const Home:NextPage = () => {
    const isTheme = useRecoilValue(isThemeAtom);
    React.useEffect(()=>{
      AOS.init();
    });
    console.log(isTheme);
    return(
        <Container>
            <AbsoluteBox>
                <AbsoluteMainBox> 
                    <div className="box" style={isTheme ? {transform : 'none'} : {transform: 'translateX(-50%)'}}>
                        <div className="wrapper blue">
                            <Image 
                                layout='fill'
                                objectFit='cover'
                                src="/images/2047a763a019243f8e49ab5b169c04119.jpg" 
                                alt='navTopBackGround'
                                onClick={() => console.log(isTheme)}
                            />
                        </div>
                        <div className="wrapper red">
                            <Image 
                                layout='fill' 
                                objectFit='cover' 
                                src="/images/21c607eed8033bb3f789c27ba04d3f3b0.jpg" 
                                alt='navTopBackGround'
                            />
                        </div>
                    </div>
                </AbsoluteMainBox>
                <AbsoluteTitleBack>
                    <h2>communicative<br/>developer</h2>
                    <p><b style={{color: isTheme}}>방문해주셔서 감사합니다</b><br/>웹개발을 전반적으로 다루는 개발 블로그가 되도록 노력하겠습니다</p>
                </AbsoluteTitleBack>
            </AbsoluteBox>
            <HomeTitle color={isTheme}>
                <h1>방문해주셔서<br/>감사합니다</h1>
                <h2>끊임 없이 배워서 발전하며<br/>항상 논리적으로 설명하는 <br/>개발자가 되겠습니다.</h2>
            </HomeTitle>
            <Box style={{paddingTop : '80px'}}>
                <ContentWrapper>
                    <IntroBox/>
                </ContentWrapper>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    /* scroll-snap-type: y mandatory; */
`
const AbsoluteBox = styled.div`
    position: sticky; 
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    top: 0;
    scroll-snap-align: center;
    z-index: 10;
    h1{
        font-size: 30px;
        color: ${props=>props.theme.pointColor};
    }
`
const AbsoluteMainBox = styled.div`
    position: absolute;
    width: 500px;
    height: 100%;
    left: 340px;
    display: flex;
    overflow: hidden;
    .box{
        width: auto;
        height: 100vh;
        display: flex;
        transition: all ease-in-out .15s;
        &#right{
            transform: translateX(-500px);
        }
    }
    .wrapper{
        flex-shrink: 0;
        width: 500px;
        @media (max-width: 1024px) {
            width: calc(100vw - 80px);
            filter: brightness(40%);
        }
        @media (max-width: 784px) {
            width: 100vw;
        }
    }
    .blue{
        background-color: rgb(116, 185, 255);
    }
    .red{
        background-color: #FFE616;
    }
    @media (max-width: 1280px) {
        transform: translateX(0px);
        left: 0;
    }
    @media (max-width: 1024px) {
        width: calc(100% - 80px);
    }
    @media (max-width: 784px) {
        width: 100%;
    }
`

const AbsoluteBtnBox = styled.div`
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    div{
        width: 54px;
        height: 6px;
        background-color: #FFFFFF;
        cursor: pointer;
        &.focus#blue{
            background-color: rgb(116, 185, 255);
            cursor: auto;
        }
        &.focus#purple{
            background-color: #FFE616;
            cursor: auto;
        }
    }
`

const AbsoluteTitleBack = styled.div`
    position: absolute;
    top: calc(50%);
    left: 50%;
    transform: translateY(-50%);
    width: calc(100% - 680px);
    @media (max-width: 1280px) {
        width: calc(100% - 540px);
    }
    @media (max-width: 1024px) {
        display: none;
    }
    h2{
        position: absolute;
        font-family: 'GmarketSansMedium';
        text-transform: uppercase;
        font-weight: bold;
        font-size: 80px;
        line-height: 76px;
        letter-spacing: -6px;
        color: #f5f6f9;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        @media (max-width: 1400px) {
            font-size: 60px;
            line-height: 56px;
        }
        @media (max-width: 1280px) {
            font-size: 48px;
            line-height: 42px;
        }
    }
    p{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-family: 'GmarketSansMedium';
        font-size: 20px;
        line-height: 27px;
        b{
            font-size: 44px;
            line-height: 44px;
            transition: all ease-in-out .15s;
        }
        @media (max-width: 1400px) {
            font-size: 18px;
            line-height: 22px;
            b{
                font-size: 36px;
                line-height: 36px;
            }
        }
        @media (max-width: 1280px) {
            font-size: 16px;
            line-height: 22px;
        }
    }
`

const HomeTitle = styled.div`
    width: 100%;
    height: calc(var(--vh, 1vh) * 135);
    z-index: 999999;
    color: #FFFFFF;
    text-shadow: 2px 2px ${props => props.color};
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: 'GmarketSansMedium';
    font-size: 48px;
    padding-left: 52px;
    h1,h2{
        transform: translateY(calc(var(--vh, 1vh) * -40));
    }
    h2{
        font-size: 42px;
        margin-top: 64px;
    }
    @media (max-width: 1024px) {
        display: flex;
    }
    @media (max-width: 640px) {
        h1{
            font-size: 42px;
        }
        h2{
            margin-top: 42px;
            font-size: 26px;
        }
    }
`

const Box = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #FFFFFF;
    z-index: 15;
`

export default Home;