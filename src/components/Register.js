import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [formData,setFormData]=useState({})

    const navigate=useNavigate()

    const handleData=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
    })
        console.log(formData);
    }

    
    
    const addUser = (e) => {
        e.preventDefault()
        const data = JSON.stringify(formData)
        localStorage.setItem('gfg', data)
        navigate('/login')

    }

  return (
    <div>
        

        <form onSubmit={addUser}>
            <input type='text' placeholder='Enter Username' name='uname' onChange={handleData}/>
            <input type='email' placeholder='Enter Email' name='email' onChange={handleData}/>
            <button className='btn btn-warning'>Add User</button>
        </form>
        
    </div>
  );
}
