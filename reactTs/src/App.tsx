
import './App.css'
import type { Product } from './types.ts'
import { Card } from './components/Card.tsx'
import { Counter } from './components/Counter.tsx'
import CardList from './components/CardList.tsx'
import OrderForm from './components/OrderForm.tsx'


function App() {

  const menu:Product[]=[
    {id:1,name:"Iphone",price:50000},
    {id:2,name:"Samsung",price:50000},
    {id:3,name:"OnePlus",price:50000}
  ]

  return (
    <>
      <div>
        <Card name='Headphone' price={5000} footer={<button>Buy now</button>} />
      </div>
      <div>
        <Counter/>
      </div>
      <div>
    <CardList items={menu}/>
      </div>
      <div>
        <OrderForm onSubmit={(order)=>{
          console.log(order.product,order.quantity);         
        }}/>
      </div>
    </>
  )
}

export default App
