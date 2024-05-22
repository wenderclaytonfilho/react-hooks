import {useState, useRef} from 'react';

function UseRef(){

    const [name, setName] = useState("");

    const inputRef = useRef();

    const focusInput = () =>{
        inputRef.current.focus();
    }

    return(
        <div>
            <h1>UseRef</h1>
            <input 
            ref={inputRef}
            value={name} 
            onChange={(e)=>setName(e.target.value)}
            />
            <p>Hello! My name is {name}</p>
            <button onClick={
                focusInput
            }>Focus Input</button>   
            <a href="https://pt-br.react.dev/reference/react/useRef">Documentação</a>
        </div>
    )
}

export default UseRef