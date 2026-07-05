import { useState } from "react";

export function Counter(){
    const [count,setCount]=useState<number>(0)
    return (
        <>
        <div>
        <p>Your count is:{count}</p>
        </div>
        <button onClick={()=>setCount(count+1)}>
        Click to increase
        </button>
        </>
    )
}