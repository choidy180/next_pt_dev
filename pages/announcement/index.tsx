import AutoHeightImage from "components/AutoHeightImage";
import { Container } from "components/Container";
import * as React from 'react';
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Announcement (){
    React.useEffect(()=>{
        AOS.init();
    },[]);
    return(
        <Container>
            <TopBox>
                <AutoHeightImage src='/images/991516355E53EB3125.png' style={{position: 'absolute' , top: '0px', left: '0px', filter: 'brightness(30%)', minHeight: '100vh !important'}}/>
                <Hello data-aos="fade-up">
                    안녕하세요
                </Hello>
            </TopBox>
        </Container>
    )
}

const TopBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Hello = styled.p`
    font-size: 20px;
    position: absolute;
    top: 10vh;
    color: #FFFFFF;
`