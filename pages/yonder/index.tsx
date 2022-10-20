import { Container } from "components/Container";
import * as React from 'react';
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import TimeText from "components/TimeText";

export default function Yonder (){
    const [name, setName] = React.useState<string>('');
    const [step, setStep] = React.useState<number>(0);
    // 이름 입력
    const onChange = (event:any) => {
        const {
            target: {name, value},
        } = event;
        {name === "name" && setName(value)}
    }
    const stepUp = () => {
        if(step === 0 ){
            if(name === "황채영"){
                alert('황채영 바보');
            } else if(name === ""){
                alert('이름이 존재하지 않습니다');
            } else {
                setStep(1);
            }
        }
    }
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
            </TopBox>
            <CenterBox>
                <LogoImageBox>
                    <Image
                        layout={'fill'}
                        objectFit={'cover'}
                        src={'/images/âPngtreeâbeautiful trees and meteor elements_3697006.png'}
                        alt={'logo'}
                    />
                </LogoImageBox>
                <Head>You design your life.</Head>
                <HeadSub>Why not design your death?</HeadSub>
                <Boundary/>
                {step === 0 && (
                    <ContentBox>
                        <h2>기억을 남기고자 하는 이름을 입력하세요</h2>
                        <div className="inputBox">
                            <input 
                                type="text" 
                                placeholder="남기고 싶은 이름" 
                                name="name"
                                value={name}
                                onChange={onChange} 
                                required 
                            />
                            <div className="focusLine"/>
                        </div>
                        <button onClick={()=> stepUp()}>다음</button>
                    </ContentBox>
                )}
                <ContentBox className={step === 1 ? "focus" : "nonFocus"}>
                    <h2>{`${name}님, 환영합니다.`}<br/>당신의 세계를 저장합니다. 동의하십니까?</h2>
                    <button onClick={()=> alert('여기서부터 만들어야 합니다')}>동의합니다</button>
                </ContentBox>
            </CenterBox>
        </Container>
    )
}

const TopBox = styled.div`
    width: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    max-height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .yonderBack{
        filter: brightness(20%) ;
    }
`
const CenterBox = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const LogoImageBox = styled.div`
    width: 200px;
    height: 200px;
    @media (max-width: 500px) {
        width: 120px;
        height: 120px;
    }
`
const Head = styled.p`
    margin-top: 10.5px;
    color: #FFFFFF;
    font-size: 24px;
    text-shadow: 3px 3px rgb(52, 73, 94);
    @media (max-width: 500px) {
        font-size: 20px;
    }
`
const HeadSub = styled.p`
    margin-top: 4px;
    color: #FFFFFF;
    font-size: 24px;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 20px;
        margin: 0px 12px 0 12px;
    }
`
const Boundary = styled.div`
    width: 100%;
    max-width: 600px;
    height: 1.4px;
    margin-top: 36px;
    background-color: white;
    @media (max-width: 840px) {
        max-width: calc(100% - 70px);
    }
`
const ContentBox = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all .35s ease-in-out;
    h2{
        text-align: center;
        font-size: 22px;
        line-height: 28px;
        color: #FFFFFF;
        @media (max-width: 500px) {
            font-size: 16px;
        }
    }
    .inputBox{
        input{
            margin-top: 48px;
            width: 100%;
            min-width: 400px;
            background-color: transparent;
            padding: 6.5px 10.5px;
            font-size: 20px;
            border: none;
            border-bottom: 2px solid rgb(127, 140, 141);
            color: #FFFFFF;
            @media (max-width: 500px) {
                font-size: 16px;
                min-width: 320px;
            }
            & + div{
                margin-top: -2px;
                width: auto;
                position: absolute;
                left: 0;
                min-width: 0px;
                height: 2px;
                background-color: #FFFFFF;
                transition: all .3s ease-in-out;
            }
            &:focus{
                & + div{
                    min-width: 400px;
                    @media (max-width: 500px) {
                        min-width: calc(100%);
                    }
                }
            }
        }
    }
    button{
        min-width: 400px;
        margin-top: 38px;
        font-size: 20px;
        padding: 5.5px 10.5px;
        color: #FFFFFF;
        border: 1.6px solid rgb(127, 140, 141);
        border-radius: 8px;
        transition: all .2s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        &:hover{
            border: 1.6px solid #FFFFFF;
            background-color: #FFFFFF;
            color: rgb(18, 94, 78);
        }
        @media (max-width: 500px) {
            min-width: calc(100% - 24px);
        }
    }
    &.focus{
        opacity: 1;
        transform: translateY(0);
    }
    &.nonFocus{
        opacity: 0;
        transform: translateY(50px);
    }
`