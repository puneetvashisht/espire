import React, {useState, useEffect} from 'react'

export default function ViewEmployees() {

  const [employees, setEmployees] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/employees')
    .then(res=>res.json())
    .then((data)=> {
        console.log(data)
        setEmployees(data)
    })
  }, [])

  let employeeList = employees.map((employee)=> {
    return (
        <tr key={employee.id}>
      <th scope="row">{employee.id}</th>
      <td>{employee.name}</td>
      <td>{employee.salary}</td>
      <td>@mdo</td>
    </tr>
    )
  })
  
    
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {employeeList}
  </tbody>
</table>
  )
}
