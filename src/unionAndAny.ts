let ApiResponse :'success'|'pending'|'error' ='pending'


let sub:string|number='1M'

let orders=['23','1','56','21']

let currentOrder;

for(let order of orders){
    if(order==='28'){
        currentOrder=order;
        break
    }
}

console.log(currentOrder);
