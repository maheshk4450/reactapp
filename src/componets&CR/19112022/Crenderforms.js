import { useState } from "react";
import { useParams } from 'react-router-dom';
import Table1 from "./Crendertable";
const MyForms = () => {

    const {display} = useParams();
    const [school, setschool] = useState(false)
    const [collage, setcollage] = useState(false)
    const [gender, setgender] = useState("")
    const [data, setData] = useState("")
    const updateG = (e) => {
        setgender(e.target.value)
        console.log(e.target.value)
    }



    

 



    return (

        <main>
            <div>
                <div className="main_form">

                    <div className="form1">
                        <h1>studentdatails:</h1>
<h3>display:{display}</h3>
                        <forms className="form-1">

                            <label class="" ><h3>name</h3></label>

                            <input class="form-control" type="text" placeholder="" aria-label="default input example"
                               name="name"
                                onChange={(e) => (e.target.value)}

                            /><br></br>

                            <label class="" ><h3>age</h3></label>
                            <input class="form-control" type="text" name="age" placeholder="" aria-label="default input example"
                                
                                onChange={(e) => (e.target.value)}

                            /><br></br>

                            male:<input type="radio" value="male" name="gender" onClick={(e) => updateG(e)} />
                            female:<input type="radio" value="female" name="gender" onClick={(e) => updateG(e)} />

                            <input class="form-control" type="text" name="gender" placeholder="gender"
                                aria-label="Disabled input example"
                                disabled
                                value={gender}
                                onChange={(e) => setgender(e.target.value)}   ></input>


                            {/* <h1>{gender}</h1> */}
                        </forms>
                    </div><br></br>

                    <div className="form2">
                        <h3>collage info <input type="checkbox" value={gender} onClick={() => { setcollage(!collage) }} /></h3>


                        {collage &&
                            <forms className="form-2">
                                <label class="" ><h3>collage</h3></label>
                                <input class="form-control" type="text" name="collage" placeholder=""
                                    aria-label="default input example" id="collage" /><br></br>
                                <label class="" ><h3>course</h3></label>
                                <input class="form-control" type="text" name="course" placeholder=""
                                    aria-label="default input example" id="course" /><br></br>
                                <label class=""><h3>section</h3></label>
                                <input class="form-control" type="text" name="section" placeholder=""
                                    aria-label="default input example" id="section" />
                            </forms>
                        }
                    </div><br></br>
                    <div className="form3">

                        <h3>school info  <input type="checkbox" onClick={() => { setschool(!school) }} /></h3>

                        {school &&
                            <forms className="form-3">
                                <label class="" for="school"><h3>school</h3></label>

                                <input class="form-control" type="text" name="school" placeholder=""
                                    aria-label="default input example" id="school" />
                                    
                                    <br></br>
                                <label class="" ><h3>board</h3></label>

                                <input class="form-control" type="text" name="board" placeholder=""
                                    aria-label="default input example" id="board" />
                            </forms>
                        }

                    </div><br></br>


                    <button type="button"class="btn btn-dark">submit</button>
                    <Table1 data={data} />

                </div>

            </div>

        </main>


    )

}
export default MyForms;