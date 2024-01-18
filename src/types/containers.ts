import type { CSSProperties } from "vue"

export interface FlexColumnProps {
    reverse?: boolean
    flex?: CSSProperties["flex"]
    gap?: CSSProperties["gap"]
    justifyContent?: CSSProperties["justify-content"]
    alignItems?: CSSProperties["align-content"]
    margin?: CSSProperties["margin"]
    padding?: CSSProperties["padding"]
    width?: CSSProperties["width"]
    height?: CSSProperties["height"]
}

export interface FlexRowProps {
    reverse?: boolean
    wrap?: CSSProperties["flex-wrap"]
    flex?: CSSProperties["flex"]
    gap?: CSSProperties["gap"]
    justifyContent?: CSSProperties["justify-content"]
    alignItems?: CSSProperties["align-content"]
    margin?: CSSProperties["margin"]
    padding?: CSSProperties["padding"]
    width?: CSSProperties["width"]
    height?: CSSProperties["height"]
}