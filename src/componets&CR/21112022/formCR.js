import raect from "react"
import { useState } from "react"
import Company from "./company"
import Clients from "./clients"
import Table from "./table"
import { Link, Route, useRouteMatch, Switch, useHistory } from "react-router-dom"

const MainForm = () => {
    const [data, setData] = useState({})
    const [tablelist, settablelist] = useState([])
  const A=useRouteMatch()
  
  const history=useHistory();


  const clikhistory= ()=>{
    
   
    history.push("/add/:addition")
  }
   



    return (
        <main>
            <ul>
            <li><Link to={A.path+'/a'}>comapany</Link> </li><br />
           <li> <Link to={A.path+'/b'} >clients</Link></li>
           <li> <Link to={A.path+'/c'} >table</Link></li>
            </ul>
            <Switch>

            <Route path={A.path+'/a'}  children={ <Company />}/>
            <Route path={A.path+'/b'}  children={ <Clients />}/>
            <Route path={A.path+'/c'}  children={ <Table />}/>
            </Switch>
            <button onClick={()=>clikhistory()}>history</button>
            
            <div>
                <br />

                <button class="btn btn-outline-dark" >inserintotable </button>

            </div>
            <div><br />

                <Table />


            </div>





        </main>
    )
}
export default MainForm;