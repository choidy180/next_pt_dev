import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isThemeAtom } from 'recoil/theme';
import styled from 'styled-components';

export const Navigation = () => {
    const isTheme = useRecoilValue(isThemeAtom);
    const setDarkAtom = useSetRecoilState(isThemeAtom);
    return(
        <>
            <h1 onClick={()=> setDarkAtom((e)=>!e)}>{isTheme ? "TRUE" : "FALSE"}</h1>
            <Container>
                <span onClick={()=> console.log(isTheme)}>공지사항</span>
                <span>가이드</span>
                <span>커뮤니티</span>
                <span>미디어</span>
                <span>고객지원</span>
            </Container>
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
            bottom: 2px;
            opacity: 0.7;
            width: 0%;
            height: 4px;
            transition: all .15s ease-in-out;
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
