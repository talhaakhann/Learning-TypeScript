import type { ProductList } from "../types"
import { Card } from "./Card"

function CardList({items}:ProductList) {
  return (
    <div>
      {items.map((item)=>(
        <Card
        key={item.id}
        name={item.name}
        price={item.price}
        IsSpecial={item.IsSpecial}
        />
      ))}
    </div>
  )
}

export default CardList
