import React from 'react'
import './aa.css'


const Contact = () => {
  return (
    <>
        <div id="contact" className="mx-4 md:mx16 lg:mx-24 my-40">
            <div className="text-4xl text-center font-bold mt-16">Contact Me!</div>
            <div className='flex justify-center'>
                <div className='mt-10'>
                    <form>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <div>
                                <input type="text" className='h-12 md:h-14 lg:h-14 w-96 md:w-80 lg:w-80 rounded-lg placeholder:px-4' required placeholder='Full Name'/>
                            </div>
                            <div>
                                <input type="email" className='h-12 md:h-14 lg:h-14 w-96 md:w-80 lg:w-80 rounded-lg placeholder:px-4' required placeholder='Email Address'/>
                            </div>
                            <div>
                                <input type="number" className='h-12 md:h-14 lg:h-14 w-96 md:w-80 lg:w-80 rounded-lg placeholder:px-4' required placeholder='Mobile Number'/>
                            </div>
                            <div>
                                <input type="email" className='h-12 md:h-14 lg:h-14 w-96 md:w-80 lg:w-80 rounded-lg placeholder:px-4' required placeholder='Email Subject'/>
                            </div>
                        </div>
                        <div>
                            <textarea className='mt-3 rounded-lg placeholder:px-4 placeholder:pt-3 resize-none w-full h-44 md:h-52 lg:h-52' required placeholder='Your Message'></textarea>
                        </div>
                        <div className='group flex justify-center mt-2'>
                            <input type="submit" className='bg-black text-white px-14 py-3 rounded-full active:scale-90 duration-300 hover:cursor-pointer hover:bg-gray-800'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact