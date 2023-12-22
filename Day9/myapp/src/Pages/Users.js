import React, { useEffect, useState } from "react";
import { getUser,deleteUser } from "../Services/api";
import {useNavigate} from 'react-router-dom'

const Users=()=>{

        const navigate = useNavigate()
    const [user,setuser] = useState([])

    const fetchData=async()=>{

        try{
            const res = await getUser()
            console.log(res.data)
            setuser(res.data)
       
        }
        catch(e){
            console.log(e);
        }
    }

    const handleDelete=async(id)=>{
        try{
           const res = await deleteUser(id)

           if(res.status===200){
            alert('deleted')
           }
           fetchData()
        }
        catch(e){
            console.log(e)
        }

    }
    const handleEdit=(id)=>{
        navigate(`/edit/${id}`)
    }

    console.log(user)
    useEffect(()=>{
        fetchData()
    },[])

    return(
        <>
          <table>
            <thread>
                <tr>
                    <th>
                        USERNAME
                    </th>
                    <th>
                        PASSWORD
                    </th>
                    <th>
                        Edit
                    </th>
                    <th>
                        DELETE
                    </th>
                </tr>

                <tbody>
                    {
                        user.map((user)=>(
                     
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.password}</td>

                        <td>
                            <button className="edit-btn" onClick={()=>handleEdit}>Edit</button>
                        </td>
                        <td>
                            <button className="del-btn" onClick={()=>handleDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                    ))
                }
                </tbody>

            </thread>

          </table>
        </>

    )
}
export default Users;