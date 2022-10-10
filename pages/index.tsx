import { NextPage } from 'next';
import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isThemeAtom } from 'recoil/theme';
import styled from 'styled-components';

const Home:NextPage = () => {
    const setDarkAtom = useSetRecoilState(isThemeAtom);
    const isTheme = useRecoilValue(isThemeAtom);
    React.useEffect(()=>{
        // 
    })
    return(
        <Container>
            <AbsoluteBox>
                <AbsoluteMainBox> 
                    <div className="box" style={isTheme ? {transform : 'none'} : {transform: 'translateX(-50%)'}} data-aos="fade-up">
                        <div className="wrapper blue">
                            <img className="one" src="/images/KakaoTalk_Photo_2022-10-07-12-18-18.gif" alt="" />
                        </div>
                        <div className="wrapper red">
                            <img className="two" src="/images/KakaoTalk_Photo_2022-10-07-12-18-26.gif" alt="" />
                        </div>
                    </div>
                    <AbsoluteBtnBox>
                      <div id="blue" className={isTheme ? 'focus' : ''} onClick={()=> setDarkAtom(true)}/>
                      <div id="purple" className={isTheme ? '' : 'focus'} onClick={()=> setDarkAtom(false)}/>
                    </AbsoluteBtnBox>
                </AbsoluteMainBox>
                <AbsoluteTitleBack>
                      <h2>communicative<br/>developer</h2>
                      <p><b style={ isTheme ? { color :"rgb(116, 185, 255)"} : {color : "#000000"}}>방문해주셔서 감사합니다</b><br/>웹개발을 전반적으로 다루는 개발 블로그가 되도록 노력하겠습니다</p>
                </AbsoluteTitleBack>
            </AbsoluteBox>
            <Box color="#FFFFFF">

            </Box>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    scroll-snap-type: y mandatory;
`
const AbsoluteBox = styled.div`
    position: sticky; 
    width: 100%;
    height: 100%;
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
  left: 50%;
  transform: translateX(calc(-100% - 40px));
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
  @media (max-width: 1280px) {
    left: 0;
  }
  .wrapper{
    flex-shrink: 0;
    width: 500px;
    @media (max-width: 1024px) {
      width: calc(100vw - 80px);
    }
    @media (max-width: 784px) {
      width: 100vw;
    }
  }
  img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    pointer-events: none;

  }
  .blue{
    background-color: rgb(116, 185, 255);
  }
  .red{
    background-color: #FFE616;
  }
  @media (max-width: 1280px) {
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
        color: ${props=>props.theme.pointColor};
      }
      @media (max-width: 1400px) {
        font-size: 18px;
        line-height: 22px;
        b{
          font-size: 36px;
          line-height: 36px;
          color: ${props=>props.theme.pointColor};
        }
      }
      @media (max-width: 1280px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
`

const Box = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.color};
    z-index: 15;
`

export default Home;