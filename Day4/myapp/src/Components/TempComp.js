import {useState} from "react"

const TempComp=()=>{
    
const[data,setData]=useState({
    username:'',
    password:''
})
const handleChange=()=>{
    alert('input changed')
} 
const handleSubmit=()=>{
    alert('submitted')
}

    return(
        <>
        <form onsubmit={handleSubmit}>
            <input type="text"placeholder="username" id ="username"onChange={handleChange}/>
            <input type="password"placeholder="password" id="password"onChange={handleChange}/>
            <input type="submit"value ="Login"/>
        
        </form>
        </>
    ) 
}
export default TempComp