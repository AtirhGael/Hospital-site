import React from 'react'
import Header from '../components/Header'
import background from '../assets/abtbg.JPG'
import Footer from '../components/Footer'

function Services() {
  return (
    <div>
        <div style={{
        backgroundImage:`url(${background})`,
        backgroundSize: 'cover',
        height:500,
        
        
      }}>
        <Header/>
        <div className='text-7xl py-2 text-center justify-end ' >
          Our Services
        </div>
      </div>
      <div>

{/* first starts here */}

      <div className='bg-[#F1F4FA] w-full '>
        <div className='lg:flex lg:justify-between items-end p-5   '>
                <div className='text-blue-700'>
                    <span className='text-left text-xl pt-5'>
                        sercices
                    </span><br/>
                    <span className='text-gray-800 text-left pt-5 text-7xl  ' >
                        Our 
                         <br/> Services
                    </span><br/>
                </div>               
            </div>
            <div className='p-10'>
                <span className='text-blue-600  text-2xl '> 01. </span>
                <span className='text-2xl'> MEDICAL SERVICES
                    </span><br/> <span className='text-xl'>Our medical services are designed to provide you with the highest quality care possible. We have a team of experienced and qualified professionals who are dedicated to your health and well-being.</span><br/>
                    <span className='text-xl text-blue-600'> We offer a wide range of Medical services, including: </span>
                    </div>
           <div>
           <div className='sm:grid-cols-1 sm:gap-7 md:grid-cols-2 gap-4 lg:grid-cols-3  lg:flex sm:w-full py-12 px-10 rounded-sm'>
{/* section */}
              <div className='bg-white p-4 h-100 lg:w-1/3 rounded-2xl'>
                  <span className='text-2xl'> General Consultation And Treatment
                    </span><br/>
                    <img src={require('../assets/bg.JPG')} alt='med'
                  style={{
                    height:250,
                    width:'100%',
                    resize:'-moz-initial',
                    borderRadius:10
                  }}
                  />     
                  <ul className='list-disc px-10'> 
                    <li className='py-1 text-lg '> maternity services and delivery</li>
                    <li className='py-1 text-lg '> specialized services ( gynaecology, pediatrics, general surgery, orthopedic surgery)</li>
                  </ul>
              </div> 
 {/*section ends  */}

 {/* section */}
 <div className='bg-white p-4 h-100 lg:w-1/3 rounded-2xl'>
                  <span className='text-2xl'>  Maternity Services And Delivery
                    </span><br/>
                    <img src={require('../assets/bg.JPG')} alt='med'
                  style={{
                    height:250,
                    width:'100%',
                    resize:'-moz-initial',
                    borderRadius:10
                  }}
                  />     
                  <ul className='list-disc px-10'> 
                    <li className='py-1 text-lg '> maternity services and delivery</li>
                    <li className='py-1 text-lg '> specialized services ( gynaecology, pediatrics, general surgery, orthopedic surgery)</li>
                  </ul>
              </div> 
 {/*section ends  */}
 {/* section */}
 <div className='bg-white p-4 h-100 lg:w-1/3 rounded-2xl'>
                  <span className='text-2xl'>specialized services 
                    </span><br/>
                    <img src={require('../assets/bg.JPG')} alt='med'
                  style={{
                    height:250,
                    width:'100%',
                    resize:'-moz-initial',
                    borderRadius:10
                  }}
                  />  
                  <span className='text-xl text-blue-600'> We offer a wide range including: </span>   
                  <ul className='list-disc px-10'> 
                    <li className='py-1 text-lg '> gynaecology</li>
                    <li className='py-1 text-lg '> pediatrics</li>
                    <li className='py-1 text-lg '> general surgery</li>
                    <li className='py-1 text-lg '> orthopedic surgery</li>
                  </ul>
              </div> 
 {/*section ends  */}
             </div>
            </div>
           </div>
{/* ends her */}

{/* first starts here */}

<div className='bg-[#F1F4FA] w-full '>
            <div className='p-10'>
                <span className='text-blue-600  text-2xl '> 02. </span>
                <span className='text-2xl'> ADVANCE BONE SURGERY
                    </span><br/> <span className='text-xl'> Advanced Bone Surgery is a team of experienced and dedicated surgeons who provide comprehensive care for a wide range of bone and joint conditions. Our surgeons are experts in the latest surgical techniques and technologies, and we are committed to providing our patients with the highest quality care possible.</span><br/>
                    <span className='text-xl text-blue-600'> We offer a wide range of Medical services, including: </span>
                    </div>
           <div>
           <div className='sm:grid-cols-1 sm:gap-7 md:grid-cols-2 gap-4 lg:grid-cols-3  lg:flex sm:w-full py-12 px-10 rounded-sm '>
{/* section */}
              <div className='bg-white p-4 h-100 lg:w-1/3 rounded-2xl'>
                  <span className='text-2xl'> Total Knee Replacement
                    </span><br/>
                    <img src={require('../assets/bg.JPG')} alt='med'
                  style={{
                    height:250,
                    width:'100%',
                    resize:'-moz-initial',
                    borderRadius:10
                  }}
                  />     
                  <ul className='list-disc px-10'> 
                    <li className='py-1 text-lg '> maternity services and delivery</li>
                    <li className='py-1 text-lg '> specialized services ( gynaecology, pediatrics, general surgery, orthopedic surgery)</li>
                  </ul>
              </div> 
 {/*section ends  */}

 {/* section */}
 <div className='bg-white p-4 h-100 lg:w-1/3 rounded-2xl'>
                  <span className='text-2xl'>  Total Hip Replacement
                    </span><br/>
                    <img src={require('../assets/bg.JPG')} alt='med'
                  style={{
                    height:250,
                    width:'100%',
                    resize:'-moz-initial',
                    borderRadius:10
                  }}
                  />     
                  <ul className='list-disc px-10'> 
                    <li className='py-1 text-lg '> maternity services and delivery</li>
                    <li className='py-1 text-lg '> specialized services ( gynaecology, pediatrics, general surgery, orthopedic surgery)</li>
                  </ul>
              </div> 
 {/*section ends  */}
 {/* section */}
 <div className='bg-white p-4 h-100 lg:w-1/3 rounded-2xl'>
                  <span className='text-2xl'>shoulder joint replacement
                    </span><br/>
                    <img src={require('../assets/bg.JPG')} alt='med'
                  style={{
                    height:250,
                    width:'100%',
                    resize:'-moz-initial',
                    borderRadius:10
                  }}
                  />  
                  <span className='text-xl text-blue-600'> We offer a wide range including: </span>   
                  <ul className='list-disc px-10'> 
                    <li className='py-1 text-lg '> gynaecology</li>
                    <li className='py-1 text-lg '> pediatrics</li>
                    <li className='py-1 text-lg '> general surgery</li>
                    <li className='py-1 text-lg '> orthopedic surgery</li>
                  </ul>
              </div> 
 {/*section ends  */}
 {/* section */}
 <div className='bg-white p-4 h-100 lg:w-1/3 rounded-2xl'>
                  <span className='text-2xl'>shoulder joint replacement
                    </span><br/>
                    <img src={require('../assets/bg.JPG')} alt='med'
                  style={{
                    height:250,
                    width:'100%',
                    resize:'-moz-initial',
                    borderRadius:10
                  }}
                  />  
                  <span className='text-xl text-blue-600'> We offer a wide range including: </span>   
                  <ul className='list-disc px-10'> 
                    <li className='py-1 text-lg '> gynaecology</li>
                    <li className='py-1 text-lg '> pediatrics</li>
                    <li className='py-1 text-lg '> general surgery</li>
                    <li className='py-1 text-lg '> orthopedic surgery</li>
                  </ul>
              </div> 
 {/*section ends  */}
             </div>
            </div>
           </div>
{/* ends her */}

{/* third starts here */}

<div className='bg-[#F1F4FA] w-full '>
            <div className='p-10'>
                <span className='text-blue-600  text-2xl '> 03. </span>
                <span className='text-2xl'> TRAINING SERVICES
                    </span><br/> <span className='text-xl'>We have a higher institute for training healthcare workers, food Processing, agriculture engineers and a school of business and management. 
our aim is to offer innovative education for a healthier feature, by problem based learning and practice based learning.</span><br/>
                          <span className='text-xl text-blue-600'> We offer a wide range of Training services, including: </span>
                    </div>
           <div>
           <div className='sm:grid-cols-1 sm:gap-7 md:grid-cols-2 gap-4 lg:grid-cols-3  lg:flex sm:w-full py-12 px-10 rounded-sm'>
{/* section */}
              <div className='bg-white p-4 h-100 lg:w-1/3 rounded-2xl'>
                  <span className='text-2xl'>We have a one or two years vocational training program under the ministry of vocational training and employment
                    </span><br/>
                    
              </div> 
 {/*section ends  */}

 {/* section */}
 <div className='bg-white p-4 h-100 lg:w-1/3 rounded-2xl'>
                  <span className='text-2xl'>  a 3 years HND program in the health programs, food Processing and agriculture Engineering, under the ministry of higher education

                    </span><br/>
                   
              </div> 
 {/*section ends  */}
 {/* section */}
 <div className='bg-white p-4 h-100 lg:w-1/3 rounded-2xl'>
                  <span className='text-2xl'>a 2 years program if the fields of business and management under higher education.

                    </span><br/>
                   
              </div> 
 {/*section ends  */}
             </div>
            </div>
           </div>
{/* ends her */}


      </div>
      <Footer/>
    </div>
  )
}

export default Services
  {/*
        <li className='py-1 text-lg '> total knee replacement</li>
        <li className='py-1 text-lg '> total hip replacement</li>
        <li className='py-1 text-lg '> shoulder joint replacement</li>
        <li className='py-1 text-lg '>ankle joint replacement</li>
        <li className='py-1 text-lg '> spinal surgery</li>
        <li className='py-1 text-lg '> correction of deformities</li>
        <li className='py-1 text-lg '> neglected trauma cases</li>
      </ul>
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
  </div>    */}