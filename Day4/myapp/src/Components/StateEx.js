import {useState} from 'react'

const StateEx=()=>{
    const [visible,setVisible]=useState(false);
    const toggle=()=>
    {
        setVisible(!visible)
    }
        return(
            <>
            {visible? 
            (<div><p>visible</p>
            <button className="ab">OK</button>
            <button className="db"></button></div>):}
            <button onClick={toggle}>show/hide</button>
            {visible?'hide':'show'}
            const [data,setData]=useState
            ({
                username:"",
                password:""
            })
            </>
        )
    
}