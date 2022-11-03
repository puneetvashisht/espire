import React, {useState, useEffect} from 'react'

export default function ViewEmployees() {

  const [employees, setEmployees] = useState([{id: 1, name: 'Name1', salary: 99999}])
 

  const deleteEmployee = (id) => {
    let fileteredEmployees = employees.filter((employee)=>employee.id != id)
    setEmployees(fileteredEmployees)
  }

  let employeeList = employees.map((employee)=> {
    return (
        <tr key={employee.id}>
      <th scope="row">{employee.id}</th>
      <td>{employee.name}</td>
      <td>{employee.salary}</td>
      <td><button onClick={()=>deleteEmployee(employee.id)} className='btn btn-danger'> X </button></td>
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
