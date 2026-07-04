// A generic is a placeholder for a type. It lets you write code like function once and
//  use it with different data types while keeping type safety.

//@ General function

function wrapInArray<T>(item:T):T[]{
    return [item]
}

wrapInArray('Talha')
wrapInArray(45)
wrapInArray({name:'talha'})

function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b]
}

pair('Talha',20)
pair(20,{name : 'Talha'})

//Generics in Interfaces

interface Box<T>{
    content:T
}

const numberBox:Box<Number>={
    content:45
}

const stringNumberBox:Box<string>={
    content:'45'
}

interface ApiResponse<T>{
    status:number,
    data:T
}

const apiResponse:ApiResponse<{user:string}>={
    status:200,
    data:{user:"Talha"}
}