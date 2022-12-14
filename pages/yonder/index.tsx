import { Container } from "components/Container";
import * as React from 'react';
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Yonder (){
    const [name, setName] = React.useState<string>('');
    const [step, setStep] = React.useState<number>(0);
    const [relationship, setRelationship] = React.useState<string | undefined>('');
    // 이름 입력
    const onChange = (event:any) => {
        const {
            target: {name, value},
        } = event;
        {name === "name" && setName(value)}
        {name === "relationship" && setRelationship(value)}
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
    const DefRelationship = (relation:string) => {
        if(relation === 'myself'){
            setRelationship(relation);
            setStep(4);
        } else if(step === 3){
            setRelationship(relation);
            setStep(4);
        } else {
            setStep(3);
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
                    src={'/images/nature-g9.jpg'}
                    alt={'heaven'}
                    className={'yonderBack'}
                />
            </TopBox>
            <CenterBox>
                <LogoImageBox>
                    <Image
                        layout={'fill'}
                        objectFit={'cover'}
                        src={'/images/elements_3697006.jpg'}
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
                                autoComplete="off"
                            />
                            <div className="focusLineBefore"/>
                            <div className="focusLine"/>
                        </div>
                        <button className="homeBtn" onClick={()=> stepUp()}>다음</button>
                    </ContentBox>
                )}
                <ContentBox className={step === 1 ? "focus" : "nonFocus"}>
                    <h2 className="stepDelay">{`${name}님과의 관계를 설정합니다.`}<br/>{`${name}님 본인이 맞으신가요?`}</h2>
                    <ButtonBox>
                        <button onClick={()=> DefRelationship('myself')}>본인입니다</button>
                        <button onClick={()=> DefRelationship('')}>본인이 아닙니다</button>
                    </ButtonBox>
                </ContentBox>
                <ContentBox className={step === 3 ? "focus" : "nonFocus"}>
                    <h2 className="stepDelay">{name}님과는 무슨 관계인가요?</h2>
                    <ul>
                        <li onClick={()=>DefRelationship('가족')}>가족</li>
                        <li onClick={()=>DefRelationship('연인')}>연인</li>
                        <li onClick={()=>DefRelationship('친구')}>친구</li>
                    </ul>
                    <div className="inputBox">
                        <input 
                            type="text" 
                            placeholder="직접 입력" 
                            name="relationship"
                            value={relationship}
                            onChange={onChange} 
                            required 
                            autoComplete="off"
                            style={{width: '200px'}}
                        />
                        <div className="focusLine"/>
                    </div>
                </ContentBox>
                <ContentBox className={step === 4 ? "focus" : "nonFocus"}>
                    <h2 className="stepDelay">{`${name}님 과의 관계를 ${relationship === 'myself' ? '본인' : relationship}으로 설정합니다.`}<br/>동의하시겠습니까?</h2>
                    <ButtonBox>
                        <button onClick={()=> alert('개발 해야함')}>동의합니다</button>
                        <button onClick={()=> alert('개발 해야함')}>동의하지 않습니다</button>
                    </ButtonBox>
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
    min-height: 200px;
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
        &.stepDelay{
            width: 0%;
            height: auto;
            animation: animate 1.5s linear forwards;
            animation-delay: .6s;   
            white-space: nowrap;
            overflow: hidden;
        }
        @media (max-width: 500px) {
            font-size: 16px;
        }
    }
    ul{
        width: 200px;
        margin-top: 48px;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        gap: 12px;
        li{
            font-size: 24px;
            transition: all .15s ease-in-out;
            color: rgb(127, 140, 141);
            &:hover{
                cursor: pointer;
                color: #FFFFFF;
                text-decoration: underline;
            }
            @media (max-width: 500px) {
                font-size: 18px;
            }
        }
        @media (max-width: 500px) {
            margin-top: 28px;
            width: 180px;
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
                margin-top: 28px;
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
                background-color: transparent;
                & + div{
                    min-width: 400px;
                    @media (max-width: 500px) {
                        min-width: calc(100%);
                    }
                }
            }
        }
        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px white inset;
            box-shadow: 0 0 0 1000px white inset;
        }
    }
    button{
        min-width: 300px;
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
        @media (max-width: 768px) {
            margin-top: 0px;
            &.homeBtn{
                margin-top: 38px;
            }
        }
    }
    &.focus{
        display: flex;
        opacity: 1;
        transform: translateY(0);
    }
    &.nonFocus{
        display: none;
        opacity: 0;
        transform: translateY(50px);
    }
    @keyframes animate {
        0%{
            width: 0%;
        }
        100%{
            width: 100%;
        }
    }
`

const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        margin-top: 38px;
    }
`