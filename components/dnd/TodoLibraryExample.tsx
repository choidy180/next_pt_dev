import {TItems, TItemStatus } from './todoBasic'
import * as React from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components';

export default function TodoLibraryExample({
    items,
    setItems
}: {
    items : TItems,
    setItems: (items: TItems) => void;
}) {
    const onDragEnd = ({ source, destination }: DropResult) => {

        // 이동 없을시 
        if(!destination) return;

        const sourceKey = source.droppableId as TItemStatus;
        const destinationKey = destination.droppableId as TItemStatus;

        // 깊은 복사
        const _items = JSON.parse(JSON.stringify(items)) as typeof items;
        // 기존 아이템 뽑아내기
        const [targetItem] = _items[sourceKey].splice(source.index, 1);
        // 기존 아이템을 새로운 위치에 삽입
        _items[destinationKey].splice(destination.index, 0, targetItem);
        // 상태 변경
        setItems(_items);
    };

    // --- requestAnimationFrame 초기화
    const [enabled, setEnabled] = React.useState(false);

    React.useEffect(()=> {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);

    if (!enabled) {
        return null;
    }
    // --- requestAnimationFrame 초기화 END

    return(
        <Container>
            <Wrapper>
                <h1>react-beautiful-dnd</h1>
                <span>with react library</span>
            </Wrapper>

            <ContentBox>
                <DragDropContext onDragEnd={onDragEnd}>
                    <DragBox>
                        {Object.keys(items).map((key) => (
                            <Droppable key={key} droppableId={key}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`box1${snapshot.isDraggingOver ? 'shadow':''}`
                                    }>
                                        <span>{key.toLocaleUpperCase()}</span>
                                        {items[key as TItemStatus].map((item, index)=> (
                                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`box2${snapshot.isDragging ? 'shadow':''}`}
                                                    >
                                                        <h5 className='bg-green-500'>{item.title}</h5>
                                                        <span className="text-sm text-gray-500">Make the world beatiful</span>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </DragBox>
                </DragDropContext>
            </ContentBox>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 12px;
    padding: 16px;
    background-color: #141414;
`
const Wrapper = styled.div`
    margin-bottom: 8px;
    h1{
        color: #FFFFFF;
        font-size: 20px;
        font-weight: bold;
    }
    span{
        color: #FFFFFF;
        font-size: 16px;
    }
`
const ContentBox = styled.div`
    margin-top: 16px;
    display: flex;
`
const DragBox = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: row;
    user-select: none;
    .box1{
        display: flex;
        flex-direction: column;
        gap: 12px;
        border-radius: 12px;
        background-color: grey;
        padding: 16px;
        border: 2px solid #FFFFFF;
    }
    .box1shadow{
        display: flex;
        flex-direction: column;
        gap: 12px;
        border-radius: 12px;
        background-color: grey;
        padding: 16px;
        border: 2px solid #FFFFFF;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }
    .box2{
        border-radius: 12px;
        background-color: #FFFFFF;
        padding: 16px;
        transition: all .3s ease-in-out;
    }
    .box2shadow{
        border-radius: 12px;
        background-color: #FFFFFF;
        padding: 16px;
        transition: all .3s ease-in-out;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }
`