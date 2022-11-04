import * as React from 'react'
import TodoLibraryExample from './TodoLibraryExample';

export type TItemStatus = 'todo' | 'doing';

export type TItem = {
    id: string;
    status: TItemStatus;
    title: string;
};

export type TItems = {
    [key in TItemStatus]: TItem[];
};

export default function TodoBasicPage(){
    const [items, setItems] = React.useState<TItems>({
        todo: [...Array(5)].map((_, i) => ({
            id: `${i}${i}${i}`,
            title: `Title ${i + 1}000`,
            status: 'todo',
        })),
        doing: [],
    });
    return (
        <TodoLibraryExample items={items} setItems={setItems}/>
    )
}