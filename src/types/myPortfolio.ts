export interface PortfolioItem {
    key: string | number | symbol
    src: string
    alt?: string
    title?: string
    info?: string
    url?: string
}
  
export interface MyPortfolioProps {
    portfolioItems: PortfolioItem[]
}
