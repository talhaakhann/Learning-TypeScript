import { useState } from "react"

type OrderFormProps={
    onSubmit(order:{product:string,quantity:number}):void
}

function OrderForm({onSubmit}:OrderFormProps) {
    const [product,setProduct]=useState<string>("")
    const [quantity,setQuantity]=useState<number>(0)
    const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit({product,quantity})
    }
  return (
    <form onSubmit={handleSubmit} >
        <label htmlFor="">
            Product Name
        </label>
        <input type="text"
        value={product}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setProduct(e.target.value)}
         />
        <label htmlFor="">
            Quantity
        </label>
        <input type="number"
        value={quantity}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setQuantity(Number(e.target.value))}
         />
         <button type="submit">
            Place Order
         </button>
    </form>
  )

}

export default OrderForm
