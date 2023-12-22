import { useState } from "react"
import { addUser } from "../Services/api"
import { useNavigate } from 'react'

const AddUser=()=>{
    const navigate = useNavigate()
    const[data,setData]=useState({
        username:'',
        password:''
    })
    const handleChange=(e)=>{
            setData({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(e)=>{
           e.preventDefault();

        try{
            const res =  await addUser(data)

            if(res.status===200){
                alert('user added')
            }
        }
        catch(e){
            console.log(data)

        }
    }

    return(
        <>
         <form class="operation" onSubmit={handleSubmit}>

                    <h1 class="co">FooDle</h1>


                    <input type="text" id ="username" class="format"onChange={handleChange} placeholder="USERNAME" />
                    <input type="password" class="format" placeholder="PASSWORD" />


                    <input type="button" class="opt" value="Add" />

                </form>
        </>
    )
}
export default addUser