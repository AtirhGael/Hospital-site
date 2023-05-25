import React from 'react'
import Header from '../components/Header'
import data from '../components/data'

function About() {
  return (
    <div>
        <Header/>
        <div>
            <div className='lg:w-1/2 md:1/2 sm:1 m-10 pt-5'>
            <span className='text-gray-800 text-left text-7xl py-10'>
                About Us
            </span><br/>
            <span className='text-gray-800 text-left lg:text-xl md:text-lg pt-5 sm:text-sm py-10'>
            ST ALESSANDRO CLINIC & UNIVERSITY INSTITUTE DOUALA 
                    created in August 2021 and named after late Professor Alessandro Faldini, a father who has done great things  in the field of orthopedic surgery. Help those who are physically challenged and the underprivileged in developing countries was his concern. We are thus continuing from where he left us. We are out to offer to the population of Cameroon and beyond, high level of medical care and training at affordable cost.
            </span>
            </div>
            <div className='p-10 bg-[#F1F4FA] '>
              <div className='text-center text-5xl items-center '>Our Teem </div>

              <div className='text-center text-lg py-10'>
              Our team includes doctors, nurses, medical assistants, and other support staff. We all work together to provide you with the highest quality of care. We are passionate about our work and we are committed to helping you achieve your health goals.
              </div>
           
{/* start here */}

           <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 p-10 '>
              {data.map((item)=>(
                <div className='gap-2'>
                <div className=' bg-white justify-center items-center rounded-xl p-5  hover:bg-blue-300 border border-gray-100    '>
               <div >
               <img src={item.image}
                style={{
                  height:200,
                
                 width:200,
                 objectFit:'contain'
                }}
                />   </div>
                <div className='text-center'>            
                <div className='text-l py-1'> {item.name}</div>
                <div className='text-gray-600'> {item.specialization}</div>
                <div className='text-gray-600 '> {item.phone}</div>
              </div>
              </div>
              </div>
              ))}
           </div>

{/* ends here */}

        </div>
        </div>
    </div>
  )
}

export default About