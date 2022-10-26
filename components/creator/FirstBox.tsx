import Image from "next/image"
import styled from "styled-components"
import backImage from '../../public/images/5c16cf0cc47cdf6cfb39a74fbfdea6e0728ae8b9.jpg'

export default function CreatorFirstBox(){
    return(
        <Wrapper>
            <Image
                layout="fill"
                objectFit="cover"
                alt="backImage"
                src={backImage}
                className='backImage'
            />
            <Title>BE A CREATOR</Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    .backImage{
        position: absolute;
        left: 0;
        filter: brightness(50%);
    }
`

const Title = styled.p`
    position: absolute;
    width: 100%;
    font-size: 10vw;
    text-align: center;
    font-family: 'GmarketSansMedium';
    color: #FFFFFF;
    bottom: 100px;
    letter-spacing: -.3vw;
    word-spacing: -1vw;
`