import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { IoMdPerson } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdPhoneAndroid } from "react-icons/md";
import Header from './Header/Header';
import Content from './Content/Content';



const App = () => {
      
  const[pop,setPop] = useState(false)
  const[summary,setSummary]=useState(false)

  const closeIcon  =()=>{
       <IoIosArrowDown onClick={()=>setSummary(false)}/>
  }
  
  

  
  return (

    <div className='h-screen relative'>

       <div className='bg-green-100 h-full px-1'>

          <Header/>
           
           <Content setPop ={setPop} setSummary = {setSummary}/>


       </div>

       <Modal open={pop} onClose={()=>setPop(false)} center
       styles={{
        modal:{
          width:"80%",
          height:"55%",
          borderRadius:"3px",
        },
        closeButton:{
          top:"18px",
          outline:"none",
          height:"25px",
          width:"25px",
          backgroundColor:"#f0f0f0",
          borderRadius:"33px",
        }
      }
   
       }
       >
          <div className='text-center'>

             <h1 className='pt-3 font-medium mb-2 '>Request for a callback </h1>
             <p className='text-xs text-gray-400 '>
               Our team will be contact shortly to solve your
               queries and find key to your health.
            </p>

          </div>

          <div className='mt-4 relative  space-y-3'>
            
              <div className='flex justify-center items-center'>

                <IoMdPerson className='absolute left-6 text-gray-400'/> 
                <input type='text' 
                       placeholder='Name' 
                       className='bg-gray-200 rounded-full p-1.5 pl-8 text-sm outline-none'/>
              </div>

              <div className='flex justify-center items-center'>

                 <CgMail className='absolute left-6 text-gray-400' /> 
                 <input type='email' 
                        placeholder='Email' 
                        className='bg-gray-200 rounded-full p-1.5 pl-8 text-sm outline-none'/>
             </div>

             <div className='flex justify-center items-center'>

                   <MdPhoneAndroid className='absolute left-6 text-gray-400' /> 
                   <input type='number' 
                          placeholder='Phone Number' 
                          className='bg-gray-200 rounded-full p-1.5 pl-8 text-sm outline-none'/>
             </div>

          </div>

          <div className='text-center mt-4'>
             <button className='bg-yellow-400 p-1 px-2'>Submit</button>
          </div>

      </Modal>

      <Modal open={summary} closeIcon={closeIcon} 

        styles={{
          modal:{ width:"95%",height:"56%",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",top:"230px",margin:"auto"}
          }}>

           <div className='flex justify-between'>

               <h3 className='font-sans font-medium text-gray-700'>Summary</h3>
               <button onClick={()=>setSummary(false)}><IoIosArrowDown  size={20} color="#333" /> </button>

          </div>

         
          <div className="flex items-center p-1.5 mt-1">

               <FaCheck className='bg-yellow-400 rounded-full text-lg p-1 text-white' />

                 <div className='text-xs ml-2 font-semiBold'>
                    <h3>Goal</h3>
                    <h3 className='text-gray-400'>Healthy Eating</h3>
                 </div>

               <FaEdit className="ml-auto text-yellow-300" />

           </div>

           <div className="flex items-center p-1.5 mt-1">

              <FaCheck className='bg-yellow-400 rounded-full text-lg p-1 text-white' />

                  <div className='text-xs ml-2 font-semiBold'>
                     <h3>Gender</h3>
                     <h3 className='text-gray-400'>Male</h3>
           </div>

             <FaEdit className="ml-auto text-yellow-300" />

          </div>

          <div className='flex justify-center mt-2'>

             <button className='border border-solid px-28 py-1 text-gray-400 text-xs'> BMI</button>

          </div>

      </Modal>
      

    </div>
  )
}

export default App
