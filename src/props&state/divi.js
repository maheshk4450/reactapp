import React from 'react';
import Subraction from './subratcion';
const Division=(props)=>{
    return(
        <div>
        <h1>{props.A/props.B}</h1>
       <Subraction A={props.A} B={props.B}/>
        </div>
    );
}
export default Division;