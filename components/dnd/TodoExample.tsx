import * as React from 'react'
import { TItems, TItemStatus } from './todo'
import registDND from './TodoExample.drag';

export default function TodoExample({
    items,
    setItems,
}: {
    items: TItems;
    setItems: React.Dispatch<React.SetStateAction<TItems>>;
}){
    React.useEffect(()=> {
        const clear = registDND(({ source, destination }) => {
            if (!destination) return;

            const sourceKey = source.droppableId as TItemStatus;
            const destinationKey = destination.droppableId as TItemStatus;

            setItems((items) => {
                const _items = JSON.parse(JSON.stringify(items)) as typeof items;
                const [targetItem] = _items[sourceKey].splice(source.index, 1);
                _items[destinationKey].splice(destination.index, 0, targetItem);
                return _items;
            });
        });
        return () => clear();
    }, [setItems]);

    return (
        <div className='p-4'>
            <div className='mb-2'>
                <h1 className='text-3xl font-bold'>Drag and Drop</h1>
            </div>
        </div>
    )
}