import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { isThemeAtom } from 'recoil/theme';
import styled from 'styled-components';
import { BsPlusLg } from "react-icons/bs";

export const Navigation = () => {
    const isTheme = useRecoilValue(isThemeAtom);
    const [mbNavView, setMbNavView] = React.useState(true);
    return(
        <>
            <Container color={isTheme ? 'rgb(116, 185, 255)' : '#FFE616'}>
                <span>공지사항</span>
                <span>가이드</span>
                <span>커뮤니티</span>
                <span>미디어</span>
                <span>고객지원</span>
            </Container>
            <MbContainer style={mbNavView ? {marginLeft: '100vw'} : {}} color={isTheme ? 'rgb(116, 185, 255)' : '#FFE616'}>
                <BsPlusLg style={mbNavView ? {display: 'none'} : { display: 'block'}} onClick={()=>setMbNavView(true)}/>
                <div style={mbNavView ? { display: 'block'} : {display: 'none'}} onClick={()=>setMbNavView(false)}/>
                <span>공지사항</span>
                <span>가이드</span>
                <span>커뮤니티</span>
                <span>미디어</span>
                <span>고객지원</span>
            </MbContainer>
        </>
    )
}

const Container = styled.div`
    position: fixed;
    top: 30px;
    right: 40px;
    z-index: 999999;
    width: 460px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'GmarketSansMedium';
    font-weight: bold;
    span{
        cursor: pointer;
        &::before{
            position: absolute;
            content: '';
            left: 0;
            bottom: -3px;
            opacity: 0.7;
            width: 0%;
            height: 4px;
            transition: all .25s ease-in-out;
            background-color: ${props =>props.color};
        }
        &:hover{
            &::before{
                width: 100%;
            }
        }
    }
    @media (max-width: 1024px) {
        display: none;
    }
`

const MbContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.color};
    z-index: 99999999;
    transition: all .4s ease-in-out;
    background-color: #FFFFFF;
    span{
        font-size: 24px;
        cursor: pointer;
        &::before{
            content: '';
            position: absolute;
            bottom: -4px;
            width: 0;
            height: 4px;
            font-weight: 500;
            background-color: ${props=>props.color};
            transition: all ease-in-out .2s;
        }
        &:hover{
            &::before{
                width: 100%;
            }
        }
    }
    svg{
        position: fixed;
        top: 30px;
        right: 24px;
        font-size: 28px;
        transform: rotate(45deg);
        cursor: pointer;
    }
    div{
        position: fixed;
        top: 40px;
        right: 24px;
        width: 28px;
        height: 3px;
        border-radius: 4px;
        background-color: #000000;
        cursor: pointer;
        &::before{
            content: '';
            position: absolute;
            top: -8px;
            width: 100%;
            height: 3px;
            border-radius: 4px;
            background-color: #000000;
        }
        &::after{
            content: '';
            position: absolute;
            top: 8px;
            width: 100%;
            height: 3px;
            border-radius: 4px;
            background-color: #000000;
        }
        @media (max-width: 784px) {
            background-color: #FFFFFF;
            &::before, &::after{
                background-color: #FFFFFF;
            }
        }
    }
    @media (min-width: 1024px) {
        div{
            display: none !important;
        }
    }
`
