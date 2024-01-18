import type { CSSProperties } from 'vue'

export interface NavBarProps {
    shadow?: boolean
    backgroundColor?: CSSProperties["background-color"]
    textColor?: CSSProperties["color"]
}