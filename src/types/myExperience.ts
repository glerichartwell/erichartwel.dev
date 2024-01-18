import type { CSSProperties } from 'vue'
import type { Bullet } from '@/types/bulletList'

export interface ExperienceItem {
    key: string | number | symbol
    company: string
    title: string
    location: string
    dates: string
    year: string
    bullets?: Bullet[]
}

export interface MyExperienceProps {
    experienceItems: ExperienceItem[]
    shadow?: boolean
    title?: string
    subtitle?: string
    backgroundColor?: CSSProperties["background-color"]
    selectedColor?: CSSProperties["background-color"]
}