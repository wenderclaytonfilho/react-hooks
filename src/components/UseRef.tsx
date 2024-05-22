import {useState} from 'react';

function UseRef(){

    const [name, setName] = useState("");


    return(
        <div>
            <h1>UseRef</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>Hello! My name is {name}</p>        
        </div>
    )
}

export default UseRef