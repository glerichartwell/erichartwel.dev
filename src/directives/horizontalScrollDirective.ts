export default {
    beforeMount(element: any) {
        element.horizontalScrollEvent = function(e: WheelEvent) {
            // prevenDefault() will help avoid worrisome 
            // inclusion of vertical scroll
            if (element.scrollWidth == element.clientWidth) return;
    
            if (e.deltaY > 0) {
                element.scrollLeft += 100;
                e.preventDefault();
            }
            else {
                element.scrollLeft -= 100;
                e.preventDefault();
            }
        }
        element.addEventListener('wheel', element.horizontalScrollEvent, {passive: false});
    },
    unmounted(element: any) {
        element.removeEventListener('wheel', element.horizontalScrollEvent);
    },
}