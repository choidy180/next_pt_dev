import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { isThemeAtom } from "recoil/theme";
import styled from "styled-components";

export const ThemeChangeBtn = () => {
    const setDarkAtom = useSetRecoilState(isThemeAtom);
    const router = useRouter();
    return(
        <Container className={router.asPath === '/yonder' ? 'opacity' : ''}>
            <p>Design by MinSeok</p>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    padding: 6px 10.5px;
    font-size: 16px;
    z-index: 999999;
    left: 40px;
    bottom: 30px;
    background-color: #FFFFFF;
    border-radius: 28px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    transition: all ease-in-out .15s;
    -webkit-transform-origin:0 0;
    transform-origin:0 0;
    cursor: pointer;
    @media (max-width: 1024px) {
        transform: rotate(-90deg);
        font-size: 14px;
        left: 12px;
        bottom: 14px;
    }
    @media (max-width: 640px) {
        padding: 4px 8.5px;
        font-size: 12px;
    }
    &.opacity{
        display: none;
    }
`