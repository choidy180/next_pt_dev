import DndLibrary from 'components/DndLibrary';
import * as React from 'react';

export type TItemStatus = 'todo' | 'doing';

export type TItem = {
    id: string;
    status: TItemStatus;
    title: string;
};

export type TItems = {
    [key in TItemStatus]: TItem[];
};

export default function DndPage(){
    const [items, setItems] = React.useState<TItems>({
        todo: [...Array(5)].map((_, i) => ({
            id: `${i}${i}${i}`,
            title: `Title ${i + 1}000`,
            status: 'todo',
        })),
        doing: [],
    });
    return (
        <>
            <DndLibrary items={items} setItems={setItems} />
        </>
    )
}