import { Container } from 'components/Container';
import DndPageBasic from 'components/dnd/basic';
import TodoBasicPage from 'components/dnd/todoBasic';
import * as React from 'react';

export default function DndPage(){
    return (
        <Container style={{gap: '20px'}}>
            <DndPageBasic/>
            <TodoBasicPage/>
        </Container>
    )
}