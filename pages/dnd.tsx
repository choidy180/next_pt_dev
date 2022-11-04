import { Container } from 'components/Container';
import DndPageBasic from 'components/dnd/basic';
import TodoBasicPage from 'components/dnd/todoBasic';
import TodoExample from 'components/dnd/TodoExample';
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


export default function DndPage(){
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
        <Container style={{gap: '20px'}}>
            <DndPageBasic/>
            {/* <TodoBasicPage/> */}
            <TodoExample items={items} setItems={setItems} />
        </Container>
    )
}