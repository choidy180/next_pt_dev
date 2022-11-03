import { TItems, TItemStatus } from "pages/dnd";
import * as React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import styled from "styled-components";
import { Container } from "./Container";

export default function DndLibrary({
    items,
    setItems,
}: {
    items: TItems;
    setItems: (items: TItems) => void;
}) {
    const onDragEnd = ({source, destination}: DropResult) => {
        if (!destination) return;

        const sourceKey = source.droppableId as TItemStatus;
        const destinationKey = destination.droppableId as TItemStatus;

        const _items = JSON.parse(JSON.stringify(items)) as typeof items;
        const [targetItem] = _items[sourceKey].splice(source.index, 1);
        items[destinationKey].splice(destination.index, 0, targetItem);
        setItems(_items);
    };

    // --requestAnimationFrame 초기화
    const [enabled, setEnabled] = React.useState(false);
    React.useEffect(()=>{
        const animation = requestAnimationFrame(()=>setEnabled(true));
        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        }
    },[]);
    if(!enabled){
        return null;
    }

    // --requestAnimationFrame 초기화 END
    return (
        <Container>
            <Wrapper>
                <DragDropContext onDragEnd={onDragEnd}>
                    <DragContainer>
                        {Object.keys(items).map((key)=>(
                            <Droppable key={key} droppableId={key}>
                                {(provided, snapshot)=>(
                                    <DragBox ref={provided.innerRef} {...provided.droppableProps} className={`${snapshot.isDraggingOver ? 'shadow' : ''}`}>
                                        <span>{key.toLocaleUpperCase()}</span>
                                        {items[key as TItemStatus].map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                                {(provided, snapshot)=> (
                                                    <DragContentBox
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={snapshot.isDragging ? 'shadow' : ''}
                                                    >
                                                        <h5>{item.title}</h5>
                                                        <span>Make the world beatiful</span>
                                                    </DragContentBox>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </DragBox>
                                )}
                            </Droppable>
                        ))}
                    </DragContainer>
                </DragDropContext>
            </Wrapper>
        </Container>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #303030;
    padding: 60px 18px;
`

const DragContainer = styled.div`
    width: 100%;
    max-width: 800px;
    transform: translateX(50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 20px;
    background-color: #141414;
`

const DragBox = styled.div`
    width: 100%;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #b7b7b7;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    gap: 12px;
    span{
        font-size: 20px;
    }
`

const DragContentBox = styled.div`
    width: 100%;
    padding: 8px;
    background-color: #fff;
    &.shadow{
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
`