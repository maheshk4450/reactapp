import react, { useState } from "react"
import SUB from './Csub'
import ADD from './Cadd'

const OUtput=()=>{
    const[result,setResult]=useState()

const adding=(add)=>{
    setResult(add)
}

const subract=(sub)=>{
    setResult(sub)
}

    return(
        <main>

            <div><ADD  addition={(add)=>adding(add)}/>  </div><br/>

            <div> <SUB subractiion={(sub)=>subract(sub)}/></div><br/>

            <input type="text" class="form-control" disabled
                 value={result}  /> 
        </main>
    )
}
export default OUtput;