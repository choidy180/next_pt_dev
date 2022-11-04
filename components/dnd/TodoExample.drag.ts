const isTouchScreen =
    typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

const startEventName = isTouchScreen ? 'touchstart' : 'mousedown';
const moveEventName = isTouchScreen ? 'touchmove' : 'mousemove';
const endEventName = isTouchScreen ? 'touchend' : 'mouseup';

const getDelta = (startEvent: MouseEvent | TouchEvent, moveEvent: MouseEvent | TouchEvent) => {
    if (isTouchScreen) {
        const se = startEvent as TouchEvent;
        const me = moveEvent as TouchEvent;
        return {
            deltaX: me.touches[0].pageX - se.touches[0].pageX,
            deltaY: me.touches[0].pageY - se.touches[0].pageY,
        };
    }
    const se = startEvent as MouseEvent;
    const me = moveEvent as MouseEvent;
    return {
        deltaX: me.pageX - se.pageX,
        deltaY: me.pageY - se.pageY,
    };
};

export type DropItem = {
    droppableId: string;
    index: number;
};
  
export type DropEvent = {
    source: DropItem;
    destination?: DropItem;
};

export default function registDND(onDrop: (event: DropEvent) => void) {
    const clearDroppableShadow = () => {
        document.querySelectorAll<HTMLElement>('[data-droppable-id]').forEach((element) => {
            element.style.boxShadow = 'none';
        });
    };
    const startHandler = (startEvent: MouseEvent | TouchEvent) => {
        const item = (startEvent.target as HTMLElement).closest<HTMLElement>('.dnd-item');

        if(!item || item.classList.contains('moving')){
            return;
        }

        let destination: HTMLElement | null | undefined;
        let destinationItem: HTMLElement | null | undefined;
        let destinationIndex: number;
        let destinationDroppableId: string;

        // 에러 메시지 출력
        const source = item.closest<HTMLElement>('[data-droppable-id]');
        if (!source) return console.warn('Need `data-droppable-id` at dnd-item parent');
        if (!item.dataset.index) return console.warn('Need `data-index` at dnd-item');

        // 다른 보드로 이동시 생성하는 임시 sourceItem
        let movingItem: HTMLElement;
        const sourceIndex = Number(item.dataset.index);
        const sourceDroppableId = source.dataset.droppableId!;

        const itemRect = item.getBoundingClientRect();

        //--- Ghost 만들기
        const ghostItem = item.cloneNode(true) as HTMLElement;
        ghostItem.classList.add('ghost');
        ghostItem.style.position = 'fixed';
        ghostItem.style.top = `${itemRect.top}px`;
        ghostItem.style.left = `${itemRect.left}px`;
        ghostItem.style.width = `${itemRect.width}px`;
        ghostItem.style.height = `${itemRect.height}px`;
        ghostItem.style.pointerEvents = 'none';

        ghostItem.style.border = '2px solid rgb(96 165 250)';
        ghostItem.style.opacity = '0.95';
        ghostItem.style.boxShadow = '0 30px 60px rgba(0, 0, 0, .2)';
        ghostItem.style.transform = 'scale(1.05)';
        ghostItem.style.transition = 'transform 200ms ease, opacity 200ms ease, boxShadow 200ms ease';

        item.classList.add('placeholder');
        item.style.cursor = 'grabbing';

        document.body.style.cursor = 'grabbing';
        document.body.appendChild(ghostItem);
        //--- Ghost 만들기 END

        document.querySelectorAll<HTMLElement>('.dnd-item:not(.ghost)').forEach((item) => {
            item.style.transition = 'all 200ms ease';
        })

        const moveHandler = (moveEvent: MouseEvent | TouchEvent) => {
            // Touch 이벤트에서 moveEvent와 scrollEvent가 겹치지 않도록 가능하면 방지한다.
            if(moveEvent.cancelBubble) moveEvent.preventDefault();

            // --- Ghost Drag
            const { deltaX, deltaY } = getDelta(startEvent, moveEvent);
            ghostItem.style.top = `${itemRect.top + deltaY}px`;
            ghostItem.style.left = `${itemRect.left + deltaX}px`;
            // --- Ghost Drag End

            // --- Drop 영역확인
            const ghostItemRect = ghostItem.getBoundingClientRect();

            const pointTarget = document.elementFromPoint(
                ghostItemRect.left + ghostItemRect.width / 2,
                ghostItemRect.top + ghostItemRect.height / 2,
            );

            const currentDestinationItem = pointTarget?.closest<HTMLElement>('.dnd-item');
            const currentDestination = pointTarget?.closest<HTMLElement>('[data-droppable-id]');
            const currentDestinationDroppableId = currentDestination?.dataset.droppableId;
            const currentDestinationIndex = Number(currentDestinationItem?.dataset.index);

            clearDroppableShadow();
            if (currentDestination) {
                currentDestination.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
            }

            const currentSourceItem = movingItem ?? item;
            const currentSourceIndex = Number(currentSourceItem.dataset.index);
            const currentSource = currentSourceItem.closest<HTMLElement>('[data-droppable-id]')!;
            const currentSourceDroppableId = currentSource.dataset.droppableId;

            if (
                currentDestinationItem?.isSameNode(currentSourceItem) ||
                currentDestinationItem?.classList.contains('moving')
            ) {
                return;
            }
        }
    }
}