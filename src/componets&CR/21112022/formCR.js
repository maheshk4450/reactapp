import raect from "react"
import { useState } from "react"
import Company from "./company"
import Clients from "./clients"
import Table from "./table"

const MainForm = () => {
    const [data, setData] = useState({})
    const [tablelist, settablelist] = useState([])


    return (
        <main>
            <div>
               <Company />

            </div>

            <div>
                <Clients />
            </div>

            <div>
                <br/>

                <button class="btn btn-outline-dark" >addtotable </button>

            </div>
            <div>
                <Table />


            </div>





        </main>
    )
}
export default MainForm;