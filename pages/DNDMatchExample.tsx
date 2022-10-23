import { registDND } from 'func/DNDMatchExample.drag';
import * as React from 'react';

const [ready, setReady] = React.useState(false);

React.useEffect(()=> {
    if(!ready){
        setReady(true);
        return;
    }
    // 이벤트 등록
    const cleanup = registDND(...);

    // 이벤트를 해제한다.
    return () => cleanup();
},[ready]);

if(!ready) return <></>