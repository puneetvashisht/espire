import React, {useState} from 'react'
function Badge(props){
//state can change , props do not

const [count, setCount] = useState(0)

const increment = () => {
    console.log('click event fired')
    setCount(count + 1);
}

    return (
        <button type="button" className="btn btn-primary" onClick={increment}>
    {props.caption} <span className="badge text-bg-secondary">{count}</span>
        </button>
    )
}
export default Badge;