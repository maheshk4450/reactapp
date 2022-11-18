import React from "react"
const Table=(props)=>{
    return(<main>

<table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">collage</th>
      <th scope="col">course</th>
      <th scope="col">section</th>
      <th scope="col">school</th>
      <th scope="col">gender</th>
      <th scope="col">board</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.age}</td>
      <td></td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{props.data.gender}</td>
      <td></td>
      <td>{}</td>
    
    </tr>
    
  </tbody>
</table>


    </main>

    )
}
export default Table