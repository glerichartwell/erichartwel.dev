import type { CSSProperties, AnchorHTMLAttributes } from "vue"

export interface ButtonSize {
    height: CSSProperties["height"]
    width: CSSProperties["width"]
}
  
export interface ButtonProps {
    size?: "sm" | "md" | "lg" | "xl" | ButtonSize
    color?: CSSProperties["color"]
    secondaryColor?: CSSProperties["color"]
    backgroundColor?: CSSProperties["background-color"]
}

export interface IconButtonProps {
    shadow?: boolean
    href?: AnchorHTMLAttributes["href"]
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "auto"
    fontSize?: CSSProperties["font-size"]
    /**
     * The color prop only changes the color if the icon-button is used for text. Apply your desired color to SVG before
     * passing into the component via src
     * @default inherit
     */
    color?: CSSProperties["color"]
    margin?: CSSProperties["margin"]
    padding?: CSSProperties["padding"]
    src?: string
}