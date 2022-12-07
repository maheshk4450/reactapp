import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const ADD = (props)=>{
    const[a,setA]=useState()
    const[b,setB]=useState()

    const plus=()=>{

        props.addition(parseFloat(a)+parseFloat(b))
    }


    return(
        <main>
            <div>
                <input type="text" class="form-control"
                onChange={(i)=>setA(i.target.value)}

                /><br/>

                <input type="text" class="form-control"
                onChange={(i)=>setB(i.target.value)}

                /><br/>
                <><button class="btn btn-outline-dark" onClick={()=>plus()}>adding</button></>
               


              <div> 
                
              
            </div>

            </div>





        </main>
    
    )
}
export default ADD;