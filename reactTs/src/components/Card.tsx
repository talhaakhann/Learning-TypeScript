import type { PropsWithChildren } from "react"

interface CardProps extends PropsWithChildren{
    name:string,
    price:number,
    IsSpecial?:boolean
    footer?:React.ReactNode
}

export function Card({ name, price,children, IsSpecial = false,footer }:CardProps) {
    return (
        <>
            <article>
                <h1>
                    {name}{IsSpecial && <span>
                        Star</span>}
                </h1>
                <p>{price}</p>
                {children}
                <div>
                    {footer && <footer>{footer}</footer>}
                </div>
            </article>
        </>
    )
}