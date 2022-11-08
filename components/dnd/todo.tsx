import * as React from 'react';

export type TItemStatus = 'todo' | 'doing';
export type TItem = {
    id: string;
    status: TItemStatus;
    title: string;
    index: number;
};

export type TItems = {
    [key in TItemStatus]: TItem[];
};

export default function TodoPage(){
    return (
        <>
            <div className='min-h-[700px]'>

            </div>
        </>
    )
}