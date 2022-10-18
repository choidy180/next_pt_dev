import styled from "styled-components"

export const Container = ({children}:any) => {
    return (
        <ContainerBox>
            {children}
        </ContainerBox>
    )
}

const ContainerBox = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`