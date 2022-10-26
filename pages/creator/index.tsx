import CreatorFirstBox from "components/creator/FirstBox"
import styled from "styled-components"

export default function  Creator (){
    return(
        <Wrapper>
            <CreatorFirstBox/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
`