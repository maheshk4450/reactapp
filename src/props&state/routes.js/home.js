import React from "react";
import About from "./about"
import { useParams } from "react-router-dom";
import {Link, Route, useRouteMatch, Switch, useHistory  } from "react-router-dom";




const Home=()=>{
    const {para}=useParams()
    const match=useRouteMatch()

    return(
        <main>
            <h1>hello home</h1>
            <h1>{para}</h1>
            <ul>
                <li><Link to={match.path+'/about'}>aboutus</Link></li>
            </ul>
            <Switch>
                <Route path={match.path+'/about'} children={<About/>}/>
                
            </Switch>
        </main>
    )
}
export default Home;