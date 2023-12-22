import axios from 'axios';

const URL = 'http://localhost:3000'

const  getUser =()=>axios.get(`${URL}/users`)//URL
const getUserId = (id)=> axios.get(`${URL}/users/${id}`)
const addUser =(data)=>axios.post(`${URL}/users`,data)//secondary data
const Edituser =(id,data)=>axios.pu(`${URL}/users.${id}`,data)
const deleteUser =(id)=>axios.delete(`${URL}/users/${id}`)

export {getUser, getUserId,addUser,Edituser,deleteUser}