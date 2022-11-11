import Componet from './componet'
const Objects = () => {
    const X = [{ name: "maheshk", age: 24, class: "veda" },
               { name: "bharath", age: 24, class: "veda" },
               { name: "narayana", age: 26, class: "l" }
             ];
    return (
        <>
            <Componet a={X}/>
            
        </>
    )
}
export default Objects