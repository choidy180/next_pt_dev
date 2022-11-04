import * as React from 'react';

export default function DndPage(){
    return (
        <>
            <div draggable='true' className='item'>
                <p>드래그용 아이템</p>
            </div>
        </>
    )
}