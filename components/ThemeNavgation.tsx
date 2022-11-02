import styled from "styled-components"

export const ThemeNavigation = () => {
    return (
        <Container>
            <div className="head">
                <h1>테마 설정</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="mode">
                <h2>MODE</h2>
                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    </div>
                </div> 
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 300px;
    height: 100vh;
    right: 0;
    z-index: 9999999;
    background-color: #FFFFFF;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
    .head {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        font-weight: 700;
        border-bottom: 1px solid #e3e3e3;
        h1{
            font-size: 20px;
        }
        svg{
            width: 30px;
            height: 30px;
            cursor: pointer;
            border-radius: 50%;
            &:hover{
                animation: shaking .4s linear infinite;
            }
            @keyframes  shaking{
                0%
                {
                    transform: rotate(0deg);
                }
                25%
                {
                    transform: rotate(15deg);
                }
                50%
                {
                    transform: rotate(0deg);
                }
                75%
                {
                    transform: rotate(-10deg);
                }
                100%
                {
                    transform: rotate(0deg);
                }
            }
        }
    }
    .mode{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
        h2{
          font-size: 20px;
          font-weight: 500;
        }
        div {
            margin-top: 12px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            div {
                width: 100%;
                box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 14px 0;
                gap: 8px;
                transition: all .15s ease-in-out;
                cursor: pointer;
                svg{
                    width: 34px;
                    height: 34px;
                }
                &:hover{
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                }
            }
        }
    }
`