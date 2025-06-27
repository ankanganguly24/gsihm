import React from 'react'

const Location = () => {
  return (
    <div>
        <div className='flex items-center justify-center py-10'>
<h1 className='text-4xl text-primary font-bold my-3 text-center'>Our Location</h1>
        </div>

        <div className='w-[100%]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7124.615145828867!2d88.378901!3d26.766464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4476b0ea850f5%3A0xc26811584f7e86ef!2sGodwin%20Modern%20School!5e0!3m2!1sen!2sus!4v1751050638991!5m2!1sen!2sus"  loading="lazy" className='w-full h-80'></iframe>
      
        </div>
    </div>
  )
}

export default Location