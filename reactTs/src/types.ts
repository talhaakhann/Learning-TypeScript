
export interface Product{
    id:number
    name:string,
    price:number,
    IsSpecial?:boolean
}

export interface ProductList{
    items:Product[]
}