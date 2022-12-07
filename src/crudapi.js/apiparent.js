import React from "react";
import Apiform from '../crudapi.js/apiform'
import Apitable from '../crudapi.js/apitable'

import { Link, Switch, useRouteMatch,Route } from "react-router-dom";

const ApiCrud = () => {
    const match=useRouteMatch();

    return (
        <main>
            <ul>
                <li><Link to={match.path+'/apiform'}>apiform</Link></li>
                <li><Link to={match.path+'/Apitable'}>apitable</Link></li>
            </ul>

            <Switch>
                <Route path={match.path+'/Apiform'} children={<Apiform />}/>
                <Route path={match.path+'/Apitable'} children={<Apitable />}/>
                
            </Switch>
           


           

        </main>
    )
}
export default ApiCrud;