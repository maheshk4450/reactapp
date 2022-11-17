import React   from "react"

class State1 extends React.Component{
   state={
    name:'mahesh',age:25
   }
   

    render(){
        return(<>
       <h1> {this.state.name}</h1>
       <h1> {this.state.age}</h1>

       <h1> <button onClick={()=>this.setState({name:'tfytf',age:20})}>update</button></h1>
            <h1>{this.props.a}</h1>
        </>)
    }

   
    
}
export default State1;


