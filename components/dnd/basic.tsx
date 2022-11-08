import * as React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

export default function DndPageBasic(){
    
    // Mock 데이터
    const [items, setItems] = React.useState(
        [...Array(4)].map((_, i) => ({
            id: `${i}${i}${i}`,
            content: `item-${i}`
        })),
    );

    // ---Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
    const onDragEnd = ({ source, destination } : DropResult) => {
        
        // 드래그 이벤트 없을 시
        if(!destination) return;

        // 깊은 복사
        const _items = JSON.parse(JSON.stringify(items)) as typeof items;
        // 기존 아이템 뽑아내기
        const [targetItem] = _items.splice(source.index, 1);
        // 기존 아이템을 새로운 위치에 삽입
        _items.splice(destination.index, 0, targetItem);
        // 상태 변경
        setItems(_items);
    }

    // requestAnimationFrame 초기화
    const [enabled, setEnabled] = React.useState(false);

    React.useEffect(()=> {
        const animation = requestAnimationFrame(()=> setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    },[]);

    if (!enabled) {
        return null;
    }
    // --- requestAnimationFrame 초기화 END
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot)=>(
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            color: 'white',
                                            backgroundColor: snapshot.isDragging ? 'red' : 'blue',
                                            ...provided.draggableProps.style,
                                        }}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}