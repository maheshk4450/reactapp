
import { useState } from "react"

const Clients = (props) => {

    const [clientsForm, setClientsform] = useState(false)

    return (
        <main>
            <form>
                <b>clientdetails:-</b><input type="checkbox"
                    aria-label="checkbox"
                   
                    name="checkbox"
                    onClick={() => setClientsform(!clientsForm)}
                />

                {clientsForm && <div> <input type="text"
                    class="form-control"
                    name="clientname"
                    placeholder="name"
                    aria-label="clientname"
                    onChange={(i)=>(i.target.value)}
                /><br></br>
                    <input type="text"
                        class="form-control"
                        name="address"
                        placeholder="address"
                        aria-label="address"
                        onChange={(i)=>(i.target.value)}
                    /><br></br>
                    <input type="text"
                        class="form-control"
                        name="client num"
                        placeholder="client num"
                        aria-label="clientnum"
                        onChange={(i)=>(i.target.value)}
                    /><br></br>
                    <b>active:</b> <input type="radio" 
                        name="status" />
                     <b>inactive:</b> <input type="radio" value="notactive" 
                        name="status" /><br></br>
                    <input type="text" class="form-control" name="result" disabled />

                </div>}




            </form>






        </main>
    )
}
export default Clients;