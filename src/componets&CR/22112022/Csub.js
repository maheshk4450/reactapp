import { useState } from "react"

const SUB = (props)=>{
    const[a,setA]=useState()
    const[b,setB]=useState()

    const minus=()=>{
       props.subractiion(a-b);
    }
    const mul=(mul)=>{
        props.multiplication(a*b)
    }



    return(
        <main>
            <div>
                <input type="text" class="form-control"
                onChange={(i)=>setA(i.target.value)}
                
                />
                <br/>

                <input type="text" class="form-control"
                onChange={(i)=>setB(i.target.value)}
                /><br/>

                <><button class="btn btn-outline-dark"  onClick={()=>minus()}>subract</button></>
                <><button class="btn btn-outline-dark" onClick={()=>mul()}>mul</button></>


            </div>



        </main>
    )
}
export default SUB;
