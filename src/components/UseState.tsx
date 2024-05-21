//O Número de vezes que um Hook pode ser executado não pode mudar, ou seja eu não posso utilizar em laços ou condicionais.

import {useState} from 'react';

function UseState() {

    const [count, setCount] = useState(0);

    const incrementCount = () =>{
        //setCount(count +1);
        setCount((prevState)=> prevState+1) //Indicado utilizar prevState
    }


    return(
        <div>
            <h1>UseState</h1>
            <h2>{count}</h2>
            <button onClick ={incrementCount}>Click to increment</button>
            <a href='https://pt-br.react.dev/reference/react/useState'>Documentação</a>
        </div>
    )

}

export default UseState