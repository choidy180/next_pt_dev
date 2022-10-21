import { Container } from "components/Container"
import styled from "styled-components"

export default function Practice (){
    return(
        <Container>
            <PraticeBox>
                <video src="/video/particles.mp4" muted={true} autoPlay={true}/>
                <H2><span>P</span>articles Di<span>st</span>ortion Effects</H2>
            </PraticeBox>
        </Container>
    )
}

const PraticeBox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    video{
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
        pointer-events: none;
        mix-blend-mode: screen;
        transform: scale(0.5);
    }
`

const H2 = styled.h2`
    position: relative;
    margin: 0;
    font-size: 4em;
    font-weight: 900;
    color: #fff;
    z-index: 1;
    overflow: hidden;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        width: 120%;
        height: 100%;
        background: linear-gradient(90deg, transparent 0%, #000 5%, #000 100%);
        animation: animate 5.5s linear forwards;
        animation-delay: 2s;
    }
    @keyframes animate {
        0%{
            left: 110%;
        }
        100%{
            left: -20%;
        }
    }
    span{
        color: #ff022c;
    }
`