import * as React from 'react';
import styled from "styled-components";

export default function TimeText(){
    const [timer, setTimer] = React.useState<String>('00:00:00');
    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        setTimer(`${hours}:${minutes}:${seconds}`)
    }
    const startTimer = () => {
        setInterval(currentTimer, 1000);
    }
    React.useEffect(()=>{
        startTimer();
    },[]);
    return(
        <Clock>{timer}</Clock>
    )
}

const Clock = styled.p`
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    font-size: 20px;
    padding: 20px;
    color: #FFFFFF;
    z-index: 300;
`