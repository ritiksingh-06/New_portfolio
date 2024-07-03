import React from 'react'
import './aa.css'

import project1_img from '../assets/imgs/portfolioimg1.jpg';
import project2_img from '../assets/imgs/portfolioimg2.jpg';
import project3_img from '../assets/imgs/portfolioimg3.jpg';

const Portfolio = () => {
  return (
    <>
        <div id="portfolio" className="mx-4 md:mx16 lg:mx-24 m-48">
          <div className="text-4xl text-center font-bold mt-12">Latest Projects</div>
          <div className="mt-11 flex justify-center">
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">



                <div className='imgg1 group w-96 md:w-80 h-56 md:h-52 rounded-2xl overflow-hidden border inset-0 bg-cover bg-center md:-rotate-3 lg:-rotate-3 duration-300 filter grayscale hover:filter-none hover:rotate-0' style={{ backgroundImage: `url(${project1_img})` }}>
                  <div className='w-full h-full translate-y-full group-hover:translate-y-0 duration-500 bg-gradient-to-b from-transparent to-black'>
                    <div className='px-3 pt-2'>
                      <div className='text-center text-white text-3xl font-bold'>Lorem ipsum dolor sit amet.</div>
                      <div className='text-center text-white'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, explicabo.</p></div>
                    </div>
                    <div className='px-20'>
                      <div>
                        <div className='flex justify-evenly mt-3'>
                          <div className='live_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-link-external flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Live</p>
                          </div>
                          <div className='code_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-code-alt flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Code</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='-mt-3 hover:mt-0 imgg2 group w-96 md:w-80 h-56 md:h-52 rounded-2xl overflow-hidden border inset-0 bg-cover bg-center duration-300 filter grayscale hover:filter-none' style={{ backgroundImage: `url(${project2_img})` }}>
                  <div className='w-full h-full translate-y-full group-hover:translate-y-0 duration-500 bg-gradient-to-b from-transparent to-black'>
                    <div className='px-3 pt-2'>
                      <div className='text-center text-white text-3xl font-bold'>Lorem ipsum dolor sit amet.</div>
                      <div className='text-center text-white'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, explicabo.</p></div>
                    </div>
                    <div className='px-20'>
                      <div>
                        <div className='flex justify-evenly mt-3'>
                          <div className='live_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-link-external flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Live</p>
                          </div>
                          <div className='code_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-code-alt flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Code</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='imgg3 group w-96 md:w-80 h-56 md:h-52 rounded-2xl overflow-hidden border inset-0 bg-cover bg-center md:rotate-3 lg:rotate-3 duration-300 filter grayscale hover:filter-none hover:rotate-0' style={{ backgroundImage: `url(${project3_img})` }}>
                  <div className='w-full h-full translate-y-full group-hover:translate-y-0 duration-500 bg-gradient-to-b from-transparent to-black'>
                    <div className='px-3 pt-2'>
                      <div className='text-center text-white text-3xl font-bold'>Lorem ipsum dolor sit amet.</div>
                      <div className='text-center text-white'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, explicabo.</p></div>
                    </div>
                    <div className='px-20'>
                      <div>
                        <div className='flex justify-evenly mt-3'>
                          <div className='live_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-link-external flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Live</p>
                          </div>
                          <div className='code_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-code-alt flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Code</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='imgg1 group w-96 md:w-80 h-56 md:h-52 rounded-2xl overflow-hidden border inset-0 bg-cover bg-center md:rotate-3 lg:rotate-3 duration-300 filter grayscale hover:filter-none hover:rotate-0' style={{ backgroundImage: `url(${project1_img})` }}>
                  <div className='w-full h-full translate-y-full group-hover:translate-y-0 duration-500 bg-gradient-to-b from-transparent to-black'>
                    <div className='px-3 pt-2'>
                      <div className='text-center text-white text-3xl font-bold'>Lorem ipsum dolor sit amet.</div>
                      <div className='text-center text-white'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, explicabo.</p></div>
                    </div>
                    <div className='px-20'>
                      <div>
                        <div className='flex justify-evenly mt-3'>
                          <div className='live_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-link-external flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Live</p>
                          </div>
                          <div className='code_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-code-alt flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Code</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-3 hover:mt-0 imgg2 group w-96 md:w-80 h-56 md:h-52 rounded-2xl overflow-hidden border inset-0 bg-cover bg-center duration-300 filter grayscale md:mt- hover:filter-none' style={{ backgroundImage: `url(${project2_img})` }}>
                  <div className='w-full h-full translate-y-full group-hover:translate-y-0 duration-500 bg-gradient-to-b from-transparent to-black'>
                    <div className='px-3 pt-2'>
                      <div className='text-center text-white text-3xl font-bold'>Lorem ipsum dolor sit amet.</div>
                      <div className='text-center text-white'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, explicabo.</p></div>
                    </div>
                    <div className='px-20'>
                      <div>
                        <div className='flex justify-evenly mt-3'>
                          <div className='live_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-link-external flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Live</p>
                          </div>
                          <div className='code_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-code-alt flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Code</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='imgg3 group w-96 md:w-80 h-56 md:h-52 rounded-2xl overflow-hidden border inset-0 bg-cover bg-center md:-rotate-3 lg:-rotate-3 duration-300 filter grayscale hover:filter-none hover:rotate-0' style={{ backgroundImage: `url(${project3_img})` }}>
                  <div className='w-full h-full translate-y-full group-hover:translate-y-0 duration-500 bg-gradient-to-b from-transparent to-black'>
                    <div className='px-3 pt-2'>
                      <div className='text-center text-white text-3xl font-bold'>Lorem ipsum dolor sit amet.</div>
                      <div className='text-center text-white'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, explicabo.</p></div>
                    </div>
                    <div className='px-20'>
                      <div>
                        <div className='flex justify-evenly mt-3'>
                          <div className='live_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-link-external flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Live</p>
                          </div>
                          <div className='code_icon'>
                            <a href="https://github.com/redashu" className='text-white text-3xl transition duration-300 hover:text-sky-500'><i class='bx bx-code-alt flip-back-icon-animation flip-icon-animation'></i></a>
                            <p className='text-white text-sm hidden'>Code</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




              </div>
          </div>
        </div>
    </>
  )
}

export default Portfolio