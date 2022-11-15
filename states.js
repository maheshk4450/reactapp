import React, { useState } from "react"

class State1 extends React.Component{
   state={
    name:'mahesh'
   }
   

    render(){
        return(<>
       <h1> {this.state.name}</h1>

       <h1> <button onClick={()=>this.setState({name:'tfytf'})}>update</button></h1>
    
        </>)
    }

   
    
}
export default State1;


