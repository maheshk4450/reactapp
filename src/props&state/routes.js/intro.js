import { useState,useEffect } from "react";


const Intro=()=>{
    const[count,setcount]=useState(0)
    
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;

      
      });

   
   
    return(
        <main>
            <h1>hello intro{count}</h1>
            <button onClick={()=>setcount(count+1)}>fetch</button>
        </main>
    )
}
export default Intro;