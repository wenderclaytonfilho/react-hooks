import {useState, useEffect, SetStateAction} from 'react';

function UseEffect(){
    const[items,setItems] = useState([])
    const [resourceType, setResourceType] = useState("posts");

    useEffect(()=>{

        const fetchResourcetypes = async () =>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            const responseJSON = await response.json();

            setItems(responseJSON);
        };
        
        fetchResourcetypes();
            

    }, [resourceType]) //Apenas se o resourceType mudar

    const changeResourceType = (resourceType: SetStateAction<string>) =>{
        setResourceType(resourceType);
    };

    return(
        <div>
            <h1>UseEffect</h1>
            <h2>{resourceType}</h2>
            <div style={{display:"flex",alignItems:"center"}}>
                <button onClick={() => changeResourceType("posts")}>Posts</button>
                <button onClick={() => changeResourceType("comments")}>Comments</button>
                <button onClick={() => changeResourceType("todos")}>Todos</button>
            </div>
            {/* <div>
            {items.map((item) => (
                <p>{item.id}</p>
            ))}
            </div> */}
            <a href='https://pt-br.react.dev/reference/react/useEffect'>Documentação</a>
        </div>

    );
};

export default UseEffect;