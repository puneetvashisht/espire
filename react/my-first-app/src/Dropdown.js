import React, { useState } from 'react'

export default function Dropdown() {

    const [cuisines, setCuisines] = useState([
        "Mexican", "Japanese", "Indian", "Malay"
    ])
    const [show, setShow] = useState(false)
    const [caption, setCaption] = useState('Select cuisine')

    const toggleShow = () =>{
        setShow(!show)
    }
    const changeCaption = (cuisine) =>{
        setCaption(cuisine)
        setShow(false);
    }

  let cuisineList =  cuisines.map((cuisine, i)=> <li><a className="dropdown-item" href="#" onClick={()=>changeCaption(cuisine)}>{cuisine}</a></li>)
  return (
    <div className="dropdown">
  <button onClick={toggleShow} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {caption}
  </button>
  <ul className={show?'dropdown-menu show': 'dropdown-menu'}>
    {cuisineList}
  </ul>
</div>
  )
}
