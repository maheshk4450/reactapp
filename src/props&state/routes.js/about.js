import Intro from "./intro";
import Qualifi from "./qualification";
import Skill from "./skill";
import {Link, Route, useRouteMatch, Switch, useHistory  } from "react-router-dom";
const About=()=>{
    const match2=useRouteMatch()
    return(
        <main>
            <h1>hello about us</h1>
            <ul>
                <li><Link to={match2.path+'/intro'}>intro</Link></li>
                <li><Link to={match2.path+'/qlaifi'}>qualification</Link></li>
                <li><Link to={match2.path+'/skill'}>skills</Link></li>
                 
            </ul>
            <Switch>
                <Route path={match2.path+'/intro'} children={<Intro/>}/>
                <Route path={match2.path+'/qlaifi'} children={<Qualifi/>}/>
                <Route path={match2.path+'/skill'} children={<Skill/>}/>
            </Switch>
        </main>
    )
}
export default About;