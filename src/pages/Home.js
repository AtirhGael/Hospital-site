import React from 'react'
import Header from '../components/Header'
import './home.css'
import background from '../assets/background.svg'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";


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
                <Link to='/service' className=" fab fa-pinterest text-blue-700  hover:text-white" > Learn More </Link>
              </button>
            <div>
              +237 650292489
            </div>
          </div>
        </div>
        </div>
        <div className='bg-[#F1F4FA] w-full '>
        <div className='lg:flex lg:justify-between items-end m-5 pt-10  '>
                <div className='text-blue-700'>
                    <span className='text-left text-xl pt-5'>
                        sercices
                    </span><br/>
                    <span className='text-gray-800 text-left pt-5 text-7xl  ' >
                        What are <br/>the Services <br/> we offer
                    </span>
                </div>               
            <button
            
             className="border-2 border-blue-600 hover:bg-blue-700 cursor-pointer p-1 rounded-lg h-10 w-30 ">
                <Link to='/service' className=" fab fa-pinterest text-blue-700  hover:text-white" >Learn more </Link>
              </button>
            </div>
           <div>
           <div className='sm:grid-cols-1 sm:gap-7 md:grid-cols-2 gap-4 lg:grid-cols-3  lg:flex sm:w-full py-12 px-10 rounded-sm'>
              <div className='bg-white p-4 h-100 lg:w-1/3 rounded-sm'>
                  <span className='text-blue-600 '> 01. </span><br/>
                  <span className='text-2xl'> MEDICAL SERVICES
                    </span><br/>
                    <img src={require('../assets/bg.JPG')} alt='med'
                  style={{
                    height:250,
                    width:'100%',
                    resize:'-moz-initial'
                  }}
                  />
                  <span className='text-xl'>Our medical services are designed to provide you with the highest quality care possible. We have a team of experienced and qualified professionals who are dedicated to your health and well-being.</span><br/>
                  <span className='text-xl text-blue-600 py-3'> learn More </span>
                  
              </div>
              <div className='bg-white p-4 h-100 lg:w-1/3 sm:w-full rounded-sm'>
                  <span className='text-blue-600 '> 02. </span><br/>
                  <span className='text-2xl'>ADVANCE BONE SURGERY </span><br/>
                  <img src={require('../assets/DSC_8528.JPG')} alt='med'
                  style={{
                    height:250,
                    width:'100%',
                    resize:'-moz-initial'
                  }}
                  />
                  <span className='text-xl'>
                      Advanced Bone Surgery is a team of experienced and dedicated surgeons who provide comprehensive care for a wide range of bone and joint conditions. Our surgeons are experts in the latest surgical techniques and technologies, and we are committed to providing our patients with the highest quality care possible.</span><br/>
                  <span className='text-xl text-blue-600 py-10'>Learn More</span>
                 
              </div>
              <div className='bg-white p-4 h-100 lg:w-1/3 rounded-sm'>
                  <span className='text-blue-600 '> 03. </span><br/>
                  <span className='text-2xl'> TRAINING SERVICES
                  </span><br/>
                          <img src={require('../assets/DSC_8404.JPG')} alt='med'
                  style={{
                    height:250,
                    width:'100%',
                    resize:'-moz-initial',
                    borderRadius:8
                  }}
                  />
                  <span className='text-xl'> We have a higher institute for training healthcare workers, food Processing, agriculture engineers and a school of business and management. 
                    our aim is to offer innovative education for a healthier feature, by problem based learning and practice based learning</span><br/>
                  <span className='text-xl text-blue-600 py-10'> Learn more </span>
              </div>   
              </div>
             
              
            </div>
           </div>
              <div
              className='flex justify-between py-20 px-10 rounded-xl '
              style={{
                backgroundImage:`url(${background})`,
                height:'100%',
                width:'100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
            <div className='flex flex-col'>
                <span className='text-blue-600 py-2 text-lg'> Need Help?</span>
                <span className='text-bold text-3xl py-4 '> we are here to Help.</span>
                <button className="border-2 border-blue-600 hover:bg-blue-700 cursor-pointer p-1 rounded-lg ">
                      <div className=" fab fa-pinterest text-blue-700  hover:text-white" >Contact Us Now </div>
              </button>
              </div>
              </div>
           <Footer/>
        </div>

  )
}

export default Home