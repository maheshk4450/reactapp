import react from "react"
import { useState } from "react";

const MyForms = () => {
    const[school,setschool]=useState(false)
    const[collage,setcollage]=useState(false)
    const [gender,setgender]=useState("")
   const updateG=(e)=>{
    setgender(e.target.value)
   }

    return (

        <main>
            <div>
            <div className="main_form">
                
                <div className="form1">
                   <h1>studentdatails:</h1> 
                    <forms className="form-1">
                    <label >name</label>
                    <input type="text" placeholder="name" id="name"/><br></br>
                    <label >age</label>
                    <input type="text" placeholder="age" id="age"/><br></br>
                    <input type="radio" value="male" name="gender" onClick={(e)=>updateG(e)}/>

                     <input type="radio" value="female" name="gender"onClick={(e)=>updateG(e)}/>
                     <h1>{gender}</h1>
                    </forms>
                    </div><br></br>
                    <div className="form2">
                    <h3>collage info <input type="checkbox" onClick={()=>{setcollage(!collage)}}/></h3> 

                   {collage&& <forms className="form-2">
                      
                        <label >collage</label>
                        <input type="text" placeholder="college" id="collage"/><br></br>
                        <label >course</label>
                        <input type="text" placeholder="course" id="course"/><br></br>
                        <label >branch</label>
                        <input type="text" placeholder="branch" id="branch"/>
                        </forms>}
                    </div><br></br>
                    <div className="form3">
                    <h3>school info  <input type="checkbox" onClick={()=>{setschool(!school)}}/></h3>

                       {school && <forms className="form-3">
                       
                        
                        <label for="school">school</label>

                        <input type="text" placeholder="school" id="school"/><br></br>
                        <label >board</label>

                        <input type="text" placeholder="board" id="board"/>
                        </forms>}
                       
                    </div><br></br>
                         <button className="button"  >submit</button>
                </div>

            </div>

        </main>


    )

}
export default MyForms;