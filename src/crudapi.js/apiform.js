import { useHistory } from "react-router-dom";

import { useState } from "react";


const Apiform = (props)=>{
  const [data,setData]=useState({})
  console.log(data)


  const pathhistory=useHistory();

const save=()=>{
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(
        data
    ),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
  pathhistory.push('/parent/Apitable')
}
const cancel=()=>{
  pathhistory.push('/parent/Apitable')
}
  


    return(
        <main>
          <div className="form">
            API FORM:Crud OPERATION
            <form>
            <input type="text" placeholder="name" class="form-control me-5 pe-5"
            onChange={(e)=>setData({...data,id:e.target.value})}
            
            /><br/>

            <input type="text" placeholder="class" class="form-control"
            onChange={(e)=>setData({...data,name:e.target.value})}
            /><br/>

            <input type="text" placeholder="marks" class="form-control"
            onChange={(e)=>setData({...data,class:e.target.value})}
            /><br/>
           
             <input type="text" placeholder="age" class="form-control"
            onChange={(e)=>setData({...data,marageks:e.target.value})}
            />
            </form>
          </div>
          <div>
            <button class="btn btn-warning ms-2 mt-2"
            onClick={()=>cancel()}
            
            >cancel</button>
            <button class="btn btn-success ms-2 mt-2"
            onClick={()=>save()}
            >save</button>
          </div>
           

        </main>
    )
}
export default Apiform;