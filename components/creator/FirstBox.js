import Image from "next/image"
import { useRef, useState } from "react"
import styled from "styled-components"
import backImage from '../../public/images/5c16cf0cc47cdf6cfb39a74fbfdea6e0728ae8b9.jpg'
import throttle from '../../utils/horizonDrag';

export default function CreatorFirstBox(){
    const scrollRef = useRef(null);
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState();

    const onDragStart = (e) => {
        e.preventDefault();
        setIsDrag(true);
        setStartX(e.pageX + scrollRef.current.scrollLeft);
    }
    const onDragEnd = () => {
        setIsDrag(false);
    }

    const onDragMove = (e) => {
        if(isDrag){
            scrollRef.current.scrollLeft = startX - e.pageX;
        }
    };
    const delay = 100;
    const onThrottleDragMove = throttle(onDragMove, delay);
    return(
        <Wrapper 
            ref={scrollRef}
            onMouseDown={onDragStart}
            onMouseMove={isDrag  ? onThrottleDragMove : null}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
        >
            <Image
                layout="fill"
                objectFit="cover"
                alt="backImage"
                src={backImage}
                className='backImage'
            />
            <Title>BE A CREATOR</Title>
            <SubTitle>Let me introduce the project that I made</SubTitle>
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
    font-size: 7vw;
    text-align: center;
    font-family: 'Pretendard-SemiBold';
    color: #FFFFFF;
    bottom: 80px;
`

const SubTitle = styled.p`
    position: absolute;
    width: 100%;
    font-size: 1vw;
    text-align: center;
    font-family: 'Pretendard-Regular';
    font-weight: 100;
    color: #FFFFFF;
    bottom: 68px;
`