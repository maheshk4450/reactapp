import { useEffect, useState } from "react";

const Apitable = () => {
  const [Apilist, SetList] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((result) => {
        SetList(result)
      })
  }, [])

  const ADD = () => {

    fetch('http://localhost:3000/posts/', {
      method: 'PUT',
      body: JSON.stringify({
         data
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
  }
  const EDIT = () => {

  }
  const DELETE = () => {
    fetch('http://localhost:3000/posts/', {
      method: 'DELETE',
    });
  }
  return (
    <div>
      <h3>table api</h3>
      <table class="table" border='1px'>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">class</th>
            <th scope="col">marks</th>
            <th scope="col">edit/delete</th>
          </tr>
        </thead>
        <tbody>
          {Apilist.map((item) => {
            return (<tr >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.class}</td>
              <td>{item.marks}</td>
              <td>
                <button class="btn btn-success ms-2 mt-2"
                  onClick={() => ADD()}
                >add</button>
                <button class="btn btn-dark ms-2 mt-2"
                  onClick={() => EDIT()}
                >edit</button>
                <button class="btn btn-danger ms-2 mt-2"
                  onClick={() => DELETE()}
                >delete</button>
              </td>
            </tr>)
          })}
        </tbody>

      </table>
    </div>
  )
}
export default Apitable;