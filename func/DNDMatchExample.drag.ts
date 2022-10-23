export const registDND = (onDrop: (props: {source: string; destination: string; isCorrect: boolean}) => void,
) => {
    
    /** 모바일 기기 Touch 이벤트 */
    const isTouchScreen =
        typeof window !== 'undefined' &&
        window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    const startEventName = isTouchScreen ? 'touchstart' : 'mousedown';
    const moveEventName = isTouchScreen ? 'touchmove' : 'mousemove';
    const endEventName = isTouchScreen ? 'touchend' : 'mouseup';

    /** 마우스 움직임 변화를 측정하는 유틸 */
    const getDelta = (startEvent: MouseEvent | TouchEvent, moveEvent: MouseEvent | TouchEvent) => {
        if(isTouchScreen){
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

    const dropAreaList = document.querySelectorAll<HTMLElement>('.dnd-drop-area');
    /** DND 등록 이벤트 */
    const startHandler = (clickEvent: MouseEvent | TouchEvent)=> {
        const item = clickEvent.currentTarget as HTMLElement;
        if(
            !item.classList.contains('dnd-drag-item') ||
            item.classList.contains('ghost') ||
            item.classList.contains('placeholder')
        ) {
            return;
        }

        const itemRect = item.getBoundingClientRect();

        /** Ghost 만들기 */
        const ghostItem = item.cloneNode(true) as HTMLElement;
        ghostItem.classList.add('ghost');
        ghostItem.style.position = 'fixed';
        ghostItem.style.top = `${itemRect.top}px`;
        ghostItem.style.left = `${itemRect.left}px`;
        ghostItem.style.pointerEvents = 'none';
        ghostItem.style.textShadow = '0 30px 60px rgba(0, 0, 0, .3)';
        ghostItem.style.transform = 'scale(1.05)';
        ghostItem.style.transition = 'transform 200ms ease';

        item.style.opacity = '0.5';
        item.style.cursor = 'grabbing';

        document.body.style.cursor = 'grabbing';
        document.body.appendChild(ghostItem);

        const mouseMoveHandler = (moveEvent: MouseEvent) => { 
            // Ghost Drag
            const deltaX = moveEvent.pageX - clickEvent.pageX;
            const deltaY = moveEvent.pageX - clickEvent.pageY;

            ghostItem.style.top = `${itemRect.top + deltaY}px`;
            ghostItem.style.left = `${itemRect.left + deltaX}px`;
        }

        const mouseUpHandler = (moveEvent: MouseEvent) => {
            // Ghost 제자리 복귀
            ghostItem.style.transition = 'all 200ms ease';
            ghostItem.style.left = `${itemRect.left}px`;
            ghostItem.style.top = `${itemRect.top}px`;
            ghostItem.style.transform = 'none';

            ghostItem.addEventListener(
                'transitionend',
                ()=>{
                    item.removeAttribute('style');
                    document.body.removeAttribute('style');
                    ghostItem.remove();
                },
                {once: true},
            );
        }

        // Drag 대상이 아니면 이벤트 종료
        if (!item.classList.contains('dnd-drag-item')){
            return;
        }

        // Drag 시작 이벤트 관련 동작
        // {...}

        /**  Drag 움직임 이벤트 관련 동작 */
        const moveHandler = (moveEvent: MouseEvent | TouchEvent) => {
            const ghostItemRect = ghostItem.getBoundingClientRect();
            const ghostCenterX = ghostItemRect.left + ghostItemRect.width / 2;
            const ghostCenterY = ghostItemRect.top + ghostItemRect.height / 2;
            const dropItem = document.elementFromPoint(ghostCenterX, ghostCenterY)?.closest<HTMLElement>('.dnd-drop-area');

            dropAreaList.forEach((area) => {
                area.classList.remove('active');
                area.removeAttribute('style');
            });

            if(dropItem){
                dropItem.classList.add('active');
                dropItem.style.filter = 'drop-shadow(16px 16px 16px gray)';
            }
        };

        // Drag 종료(Drop) 이벤트 관련 동작
        const endHandler = () => {
            // {...}
            document.removeEventListener(moveEventName, moveHandler);
        };
        document.addEventListener(moveEventName, moveHandler);
        document.addEventListener(endEventName, endHandler, {once: true})
    }

    // document에 DND 이벤트를 등록해준다.
    document.addEventListener(startEventName, startHandler);
    return () => document.removeEventListener(startEventName, startHandler);
}