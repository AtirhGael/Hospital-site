import React from 'react'
import Header from '../components/Header'

function About() {
  return (
    <div>
        <Header/>
        <div>
            <div className='lg:w-1/2 md:1/2 sm:1 m-10 pt-5'>
            <span className='text-gray-800 text-left text-7xl'>
                About Us
            </span><br/>
            <span className='text-gray-800 text-left lg:text-xl md:text-lg pt-5 sm:text-sm '>
            ST ALESSANDRO CLINIC & UNIVERSITY INSTITUTE DOUALA 
                    created in August 2021 and named after late Professor Alessandro Faldini, a father who has done great things  in the field of orthopedic surgery. Help those who are physically challenged and the underprivileged in developing countries was his concern. We are thus continuing from where he left us. We are out to offer to the population of Cameroon and beyond, high level of medical care and training at affordable cost.
            </span>
            </div>
            
           
        </div>
    </div>
  )
}

export default About