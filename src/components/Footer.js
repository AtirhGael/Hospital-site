import React from 'react'
import map from '../assets/map-pin.svg'
import mail from '../assets/mail.svg'
import call from '../assets/phone.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'



function Footer() {
  return (
    <div>
        <div className='lg:flex gap-20 bg-blue-600 p-20' >
            <div>
                <span className='text-white text-lg'> Copyright@2023 St Alessandro Clinic</span>
                <div className='flex gap-5 py-5'><img src={facebook} /> <img src={twitter} /> </div>
            </div>
            <div className='lg:flex gap-20 '>
            <div>
                <span className='text-lg text-white'> Quick Link</span>
                <div> Home</div>
                <div> Contagion</div>
                <div> Symptoms</div>
                <div> preventions</div>
            </div>
            <div>
                <span className='text-lg text-white'> Contact Info</span>
                    <ul>
                        <li className='flex gap-2 py-2 text-white'><img src={map} /> Douala Bonaberi</li>
                        <li  className='flex gap-2 py-2 text-white'><img src={mail}  /> Alexandro@gmail.com</li>
                        <li  className='flex gap-2 py-2 text-white'><img src={call} /> +237 6708088888</li>
                        
                    </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer