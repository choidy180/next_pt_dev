import AutoHeightImage from "components/AutoHeightImage";
import { Container } from "components/Container";
import * as React from 'react';
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import TimeText from "components/timeText";

export default function Yonder (){
    React.useEffect(()=>{
        AOS.init({
            duration: 1500,
        });
    },[]);
    return(
        <Container>
            <TopBox>
                <Image
                    layout={'fill'}
                    objectFit={'cover'}
                    src={'/images/nature-3616194_1920.png'}
                    alt={'heaven'}
                    className={'yonderBack'}
                />
                <TimeText/>
                <LogoImageBox>
                    <Image
                        layout={'fill'}
                        objectFit={'cover'}
                        src={'/images/âPngtreeâbeautiful trees and meteor elements_3697006.png'}
                        alt={'logo'}
                    />
                </LogoImageBox>
                <Head>당신을 영원히 기억하겠습니다</Head>
                <HeadSub>온라인 추모관 Leftoverlife에 오신것을 환영합니다.<br/>당신의 기억들이 평안히 쉴 수 있는 공간이 되길 바라겠습니다.</HeadSub>
                <Boundary/>
                <ContentBox>
                    <h2>기억하고자 하는 분의 이름을 입력해주세요</h2>
                    <input type="text" placeholder="기억하고 싶은 이름"/>
                    <button>다음</button>
                </ContentBox>
            </TopBox>
        </Container>
    )
}

const TopBox = styled.div`
    width: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .yonderBack{
        filter: brightness(20%) ;
    }
`
const LogoImageBox = styled.div`
    position: relative;
    margin-top: 20vh;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Head = styled.p`
    margin-top: 10.5px;
    color: #FFFFFF;
    font-size: 28px;
    text-shadow: 3px 3px rgb(52, 73, 94);
    font-family: 'ChosunCentennial';
`
const HeadSub = styled.p`
    margin-top: 12px;
    color: #FFFFFF;
    font-size: 16px;
    font-family: 'ChosunCentennial';
    text-align: center;
`
const Boundary = styled.div`
    width: calc(100% - 24px);
    max-width: 1200px;
    height: 1.4px;
    margin-top: 36px;
    background-color: white;
`
const ContentBox = styled.div`
    margin-top: 32px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h2{
        text-align: center;
        font-size: 22px;
        line-height: 24px;
        color: #FFFFFF;
    }
    input{
        margin-top: 48px;
        width: 100%;
        min-width: 400px;
        background-color: transparent;
        padding: 5px 10.5px;
        font-size: 20px;
        border: none;
        border-bottom: 2.4px solid rgb(127, 140, 141);
        color: #FFFFFF;
        &:after{
            position: absolute;
            z-index: 999999;
            left: 0;
            bottom: 0;
            width: 100px;
            height: 100px;
            content: '123';
            color: red;
        }
    }
    button{
        min-width: 400px;
        margin-top: 38px;
        font-size: 22px;
        padding: 5px 10.5px;
        color: #FFFFFF;
        font-family: 'ChosunCentennial';
        border: 1.4px solid rgb(127, 140, 141);
        border-radius: 8px;
        transition: all .15s ease-in-out;
        &:hover{
            border: 1.4px solid #FFFFFF;
        }
    }
`