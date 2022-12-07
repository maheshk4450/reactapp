import React   from "react"
import{withRouter} from 'react-router-dom'

class State1 extends React.Component{
   state={
    name:'mahesh',age:25, marks:89
   
   }

   

    render(){
        const {withR}=this.state;
        return(<>
       <h1> {this.state.name}</h1>
       <h1> {this.state.age},{this.state.marks}</h1>

       <button onClick={()=>this.setState({withR})}>update</button>
            <h1>{this.props.withR}</h1>
        </>)
    } 
}
export default withRouter(State1);


