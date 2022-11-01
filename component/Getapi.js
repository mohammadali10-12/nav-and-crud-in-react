import React, { useEffect, useState } from 'react'

export default function Getapi() {
    const [name, setName] = useState("");
    const [email, setPassword] = useState("");
    const [address, setAdd] = useState("");
    const [id,setId] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, [])

    function getData() {
        fetch('http://localhost:4000/users').then((result) => {
            result.json().then((resp) => {
                setData(resp)
                setName(resp[0].name)
                setPassword(resp[0].email)
                setAdd(resp[0].address)
                setId(resp[0].id)

            })
        })
    }


    function deleteUser(id) {

        fetch(`http://localhost:4000/users/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                getData()
            })
        })

    }


    function updateUser(id) {
    
 let dt = data[id-3]
    setName(dt.name)
    setPassword(dt.email)
    setAdd(dt.address)
    setId(dt.id)
    }

function upUsers(){
  let item ={name,email,address,id}
  fetch(`http://localhost:4000/users${id}`,{
    method:'PUT',
    headers:{
  'Accept':'application/json',
  'Content-Type':'application/json'
    },
    body:JSON.stringify(item)
}).then((result)=>{
    result.json().then((resp)=>{
        console.log(resp);
        getData()
    })
 })
}

    return (
        <div>
         

            <h1>user detail</h1>
            <table className='table-auto '>
                <tbody>
                    <tr className='bg-orange-400 border-4 border-purple-500 table-row ' >
                        <td className='borde border-red-600'>Id</td>
                        <td className='borde border-red-600'>Name</td>
                        <td className='borde border-red-600'>Email</td>
                        <td className='borde border-red-600'>Address</td>
                    </tr>
                    {
                        data.map((item, i) =>
                            <tr key={i} className='border-4 border-separate border-purple-500'>
                                <td className='borde border-red-600'>{item.id}</td>
                                <td className='borde border-red-600'>{item.name}</td>
                                <td className='borde border-red-600'>{item.email}</td>
                                <td className='borde border-red-600'>{item.address}</td>
                                <td> <button className='rounded-lg border-2 border-black  pl-2 pr-2 bg-slate-400 text-white active:bg-slate-200' onClick={() => deleteUser(item.id)}>DELETE</button></td>
                                <td> <button className='rounded-lg border-2 border-black  pl-2 pr-2 bg-slate-400 text-white active:bg-slate-200' onClick={() => updateUser(item.id)}>UPDATE</button></td>

                            </tr>

                        )
                    }

                </tbody>
            </table>
            <div>
                <span className=' ml-[670px] mt-4 font-serif font-semibold  pl-[29px];'>Enter Name :<br /><input type='text' name='name' value={name} className='ml-[670px]  border-2 border-red-500 mb-3 'onChange={(e) => { setName(e.target.value) }} /></span><br />
                <span className=' ml-[670px]  font-serif font-semibold'>Enter Email :<br /><input type='text' name='email' value={email} className='ml-[670px]  border-2 border-red-500' onChange={(e) => { setPassword(e.target.value) }} /></span><br />
                <span className=' ml-[670px]  font-serif font-semibold'>address :<br /><input type='text' name='password' value={address} className='ml-[670px]  border-2 border-red-500' onChange={(e) => { setAdd(e.target.value) }} /></span><br />
                <button className='pt-2 pb-2 pl-5 pr-5 mt-4 bg-sky-400 text-purple-900 font-serif rounded-2xl hover:bg-blue-600 active:bg-sky-600  ml-[670px]' onClick={upUsers}>Update Data</button>
            </div>
        </div>
    )
}
