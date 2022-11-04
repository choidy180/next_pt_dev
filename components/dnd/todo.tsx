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
    const [items, setItems] = React.useState<TItems>({
        todo: [...Array(5)].map((_, i) => ({
            id: `${i}${i}${i}`,
            title: `Title ${i + 1}000`,
            status: 'todo',
            index: i,
        })),
        doing: [],
    });
    return (
        <>
            <div className='min-h-[700px]'>

            </div>
        </>
    )
}