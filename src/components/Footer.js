import React from 'react'

function Footer() {
  return (
    <div>
        <div className='lg:flex gap-20 bg-blue-600 p-20' >
            <div>
                <span className='text-white text-lg'> Copyright@2023 St Alessandro Clinic</span>
                <div > facebook, twitter </div>
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

            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer