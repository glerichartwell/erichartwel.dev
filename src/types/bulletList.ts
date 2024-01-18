export interface Bullet {
    content: string
    bullets?: Bullet[]
}

export interface BulletListProps {
    list?: Bullet[]
}