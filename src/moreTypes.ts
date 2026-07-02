"A type assertion tells TypeScript:";

"Trust me, I know the type better than you do.";

"TypeScript will stop complaining, but it does not perform any runtime type checking.";

let response: any = "42";

let numericLength:number=(response as string).length

type Book={
    name:string
}

let bookString='random book name'
let bookObject=JSON.parse(bookString) as Book

console.log(bookObject.name)

'The key difference is:any Disables TypeScript type checking. while unknown Keeps TypeScript type checking'

let value : any
value='45'
value =34
value=[1,3,4,7]
value =true
value.toUpperCase()


let newValue : unknown
newValue='45'
newValue =34
newValue=[1,3,4,7]
newValue =true
if(typeof newValue=='string'){
    newValue.toUpperCase()
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
}

const data:unknown="talha"
const strData:string=data as string

type Role='admin'|'user'|'superadmin'

function redirect(role:Role):void{
    if(role=="admin"){
        console.log("Redirecting to dashboard");
    }
    if(role =="user"){
         console.log("Redirecting to userdashboard");
    }
    role;
}

function neverReturn():never{
    while(true){

    }
}
