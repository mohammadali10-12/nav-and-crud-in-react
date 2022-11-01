
import React, { useSearchParams} from 'react-router-dom'


export default function Filter() {

    const [searchP,setSearchP]=useSearchParams();

    const age=searchP.get('age');  
    const city=searchP.get('city');  


  return (
    <div>
      <h3 className='text-center mt-20'>age is :{age}</h3>
      <h3  className='text-center'>city is :{city}</h3>
      <span className=' ml-[500px] font-serif font-semibold'>Enter text :<input type='text'  className='border-2 border-red-500' onChange={(e)=>setSearchP({text:e.target.value,age:20})}/></span>
      <button  className='pt-1 pb-1 pl-2 pr-2 bg-orange-500 rounded-full active:bg-orange-300 ml-[50px]' onClick={()=>setSearchP({age:30,city:'patan'})}>set Age</button>
    </div>
  )
}
