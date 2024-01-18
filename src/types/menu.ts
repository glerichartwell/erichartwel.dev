import type { CSSProperties } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

export interface MenuProps {
    text?: String
    margin?: CSSProperties['margin']
    gap?: CSSProperties['gap']
    borderRadius?: CSSProperties['border-radius']
    backgroundColor?: CSSProperties["background-color"]
    shadow?: boolean
}

export interface MenuItemProps {
    to: RouteLocationRaw
    activeClass?: string
}