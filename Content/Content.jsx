import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6"
import { FaPerson } from "react-icons/fa6";
import { GiHotMeal } from "react-icons/gi";
import { RiHealthBookFill } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md"
import { IoIosArrowUp } from "react-icons/io";
import Animation from '../Animation.jsx'


const Content = ({setPop,setSummary}) => {

    

  return (

    <>
        <main className='bg-white h-5/6 pt-2 relative'>

              
              <div className='flex justify-between items-center'>

                  <FaChevronLeft className='text-yellow-300 text-2xl' />
                  <h3 className='text-sm'>Personalize</h3>
                  <FaPhone className='bg-yellow-300 text-3xl  py-2 pr-3 rounded-l-2xl hover:animate-pulse'
                           onClick={()=>setPop(true)} />

              </div>

              <div className='text-center mt-4 space-y-1.5'>
                  <h3 className='font-serif font-bold text-lg'>How it works?</h3>
                  <p className='text-gray-400 text-xs font-bold'><Animation/></p>
              </div>

             <div className='flex justify-center gap-3 items-center mt-4 '>

                <div className='flex flex-col items-center space-y-1'>
                  < FaPerson /> 
                  <h3 className='text-xs text-gray-400'>Person</h3>
                </div> 

                 <div className='flex flex-col items-center space-y-1'>
                  < GiHotMeal />
                  <h3 className='text-xs text-gray-400'>Tasty Meals</h3>
                </div>
                
                 <div className='flex flex-col items-center space-y-1'>
                  <RiHealthBookFill />
                  <h3 className='text-xs text-gray-400'>Weekly Health </h3>
                  </div>

                 <div className='flex flex-col items-center space-y-1'>  
                  <MdDeliveryDining />
                  <h3 className='text-xs text-gray-400'>Home  Delivery</h3>
                 </div>

             </div>

             <div className='text-center space-y-1 mt-4'>
                 <h3 className='text-xl font-bold '>Your Goal</h3>
                 <h3 className='text-gray-500  text-sm animate-pulse'>Please select one</h3>
             </div>

             <div className='text-center mt-4 space-y-2'>

                <button className='bg-yellow-400 font-semibold text-xs rounded-full 
                                 w-60 py-1.5  hover:shadow-black hover:shadow-inner shadow-2xl'>Lose weight</button>
                <button className='bg-yellow-400 font-semibold text-xs rounded-full w-60 py-1.5
                                hover:shadow-black hover:shadow-inner shadow-2xl '>Desi Tiffin Service</button>
                <button className='bg-yellow-400 font-semibold text-xs rounded-full
                                 hover:shadow-black hover:shadow-inner shadow-2xl w-60 py-1.5'>Healthy Eating</button>

                <button className='bg-yellow-400 font-semibold text-xs rounded-full 
                                hover:shadow-black hover:shadow-inner shadow-2xl w-60 py-1.5'>Diabetes Management</button>

             </div>

             <div className='absolute -bottom-9 w-full flex justify-between rounded-t-2xl bg-slate-100 px-2 py-4 mt-1 '>
                    <h4>Summary</h4>
                    <IoIosArrowUp onClick={()=>setSummary(true)} />
                    
               </div>

           </main>
    </>
  )
}

export default Content
