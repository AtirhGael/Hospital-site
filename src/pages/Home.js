import React from 'react'
import Header from '../components/Header'
import './home.css'
import background from '../assets/background.svg'
import Footer from '../components/Footer'


function Home() {

  return (
    <div >
      <div style={{
        backgroundImage:`url(${background})`,
        height:'100%',
        width:'100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        
      }}>
      <Header/>

      
        <div className='text-left gap-4 m-5 pt-4 lg:w-1/2 md:w-1/2 sm:w-1 ' >
            <h1 className='text-7xl text-gray-600 '>Save Yourself.</h1>
            <h1 className='text-6xl text-gray-600 '>Save Each</h1>
            <h1 className='text-5xl text-gray-600 '>Other.</h1>
          <div className='text-x text-left pt-10'> 
          Welcome to ST ALESSANDRO CLINIC & UNIVERSITY INSTITUTE DOUALA 
          created in August 2021 and named after late Professor Alessandro Faldini, a father who has done great things  in the field of orthopedic surgery.
          </div>
          <div className='gap-5 flex flex-row items-center py-10' >
          <button className="border-2 border-blue-600 hover:bg-blue-700 cursor-pointer p-1 rounded-lg ">
                <div className=" fab fa-pinterest text-blue-700  hover:text-white" > Learn More </div>
              </button>
            <div>
              +237 650292489
            </div>
          </div>
        </div>
        </div>
        <div className='bg-[#F1F4FA] w-full'>
        <div className='lg:flex lg:justify-between items-end m-5 pt-10  '>
                <div className='text-blue-700'>
                    <span className='text-left text-xl pt-5'>
                        sercices
                    </span><br/>
                    <span className='text-gray-800 text-left pt-5 text-7xl  ' >
                        What are <br/>the Services <br/> we offer
                    </span>
                </div>               
            <button className="border-2 border-blue-600 hover:bg-blue-700 cursor-pointer p-1 rounded-lg h-10 w-30 ">
                <div className=" fab fa-pinterest text-blue-700  hover:text-white" > Emergency Call </div>
              </button>
            </div>
           <div>
           <div className='mike'>
              <div className='bg-white p-4 h-100 w-1/3 rounded-sm'>
                  <span className='text-blue-600 '> 01. </span><br/>
                  <span className='text-2xl'> MEDICAL SERVICES
                    </span><br/>
                  <span className='text-xl'>Our medical services are designed to provide you with the highest quality care possible. We have a team of experienced and qualified professionals who are dedicated to your health and well-being.</span><br/>
                  <span className='text-xl text-blue-600 py-3'> We offer a wide range of services, including: </span>
                  <ul className='list-disc px-10'>
                    <li className='py-1 text-lg '> general consultation and treatment</li>
                    <li className='py-1 text-lg '> maternity services and delivery</li>
                    <li className='py-1 text-lg '> specialized services ( gynaecology, pediatrics, general surgery, orthopedic surgery)</li>
                  </ul>
              </div>
              <div className='bg-white p-4 h-100 w-1/3 rounded-sm'>
                  <span className='text-blue-600 '> 02. </span><br/>
                  <span className='text-2xl'>ADVANCE BONE SURGERY </span><br/>
                  <span className='text-xl'>
Advanced Bone Surgery is a team of experienced and dedicated surgeons who provide comprehensive care for a wide range of bone and joint conditions. Our surgeons are experts in the latest surgical techniques and technologies, and we are committed to providing our patients with the highest quality care possible.</span><br/>
                  <span className='text-xl text-blue-600 py-10'> We offer a wide range of services, including: </span>
                  <ul className='list-disc px-10'>
                    <li className='py-1 text-lg '> total knee replacement</li>
                    <li className='py-1 text-lg '> total hip replacement</li>
                    <li className='py-1 text-lg '> shoulder joint replacement</li>
                    <li className='py-1 text-lg '>ankle joint replacement</li>
                    <li className='py-1 text-lg '> spinal surgery</li>
                    <li className='py-1 text-lg '> correction of deformities</li>
                    <li className='py-1 text-lg '> neglected trauma cases</li>
                  </ul>
              </div>
              <div className='bg-white p-4 h-100 w-1/3 rounded-sm'>
                  <span className='text-blue-600 '> 03. </span><br/>
                  <span className='text-2xl'> TRAINING SERVICES
 </span><br/>
                  <span className='text-xl'> We have a higher institute for training healthcare workers, food Processing, agriculture engineers and a school of business and management. 
our aim is to offer innovative education for a healthier feature, by problem based learning and practice based learning</span><br/>
                  <span className='text-xl text-blue-600 py-10'> Learn more </span>
              </div>   
              </div>
              <div className='mike'>
              <div className='bg-white p-4 h-100 w-1/3 rounded-sm'>
                  <span className='text-blue-600 '> 01. </span><br/>
                  <span className='text-2xl'> Fever </span><br/>
                  <span className='text-xl'> We have a one or two years vocational training program under the ministry of vocational training and employment</span><br/>
                  <span className='text-xl text-blue-600 py-10'> Learn more </span>
              </div>
              <div className='bg-white p-4 h-100 w-1/3 rounded-sm'>
                  <span className='text-blue-600 '> 01. </span><br/>
                  <span className='text-2xl'> Fever </span><br/>
                  <span className='text-xl'> We have a one or two years vocational training program under the ministry of vocational training and employment</span><br/>
                  <span className='text-xl text-blue-600 py-10'> Learn more </span>
              </div>
              <div className='bg-white p-4 h-100 w-1/3 rounded-sm'>
                  <span className='text-blue-600 '> 01. </span><br/>
                  <span className='text-2xl'> Fever </span><br/>
                  <span className='text-xl'> We have a one or two years vocational training program under the ministry of vocational training and employment</span><br/>
                  <span className='text-xl text-blue-600 py-10'> Learn more </span>
              </div>
              
              
              </div>

              <div>
                
              </div>
            </div>
           </div>
           <Footer/>
        </div>

  )
}

export default Home