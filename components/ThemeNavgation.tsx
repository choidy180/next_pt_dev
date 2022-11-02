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
        h1{
            font-size: 20px;
        }
        svg{
            width: 30px;
            height: 30px;
            cursor: pointer;
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
`