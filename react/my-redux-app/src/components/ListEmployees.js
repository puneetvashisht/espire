import React, {useState, useEffect} from 'react'

export default function () {

  const [employees, setEmployees] = useState([{id: 1, name: 'Name2', salary: 99999}])
 

  const deleteEmployee = (id) => {
    let fileteredEmployees = employees.filter((employee)=>employee.id != id)
    setEmployees(fileteredEmployees)
  }

  let employeeList = employees.map((employee)=> {
    return (
        <li key={employee.id}>{employee.name}</li>
     )
  })
  
    
  return (
    <ul>
      {employeeList}
    </ul>
  )
}
