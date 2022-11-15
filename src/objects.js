import Componet from './componet'
const Objects = () => {
    const[X,setx] = [{ name: "maheshk", age: 24, class: "veda" },
               { name: "bharath", age: 24, class: "v" },
               { name: "narayana", age: 26, class: "o" },
               { name: "me", age: 565, class: "u" }
             ];
           
            const update=()=>({...X[1],name:'mbfhdy',age:26,class:'cvbn'})
    return (
        <>
        <button onClick={()=>X.update()}></button>

         
            <Componet a={X}/>

        </>
    )
}
export default Objects;