import React from 'react'
import WorkImg from '../assests/work.jpeg'
const Work = () => {
  return (
    <div name='work' className= 'w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify -center w-full h-full'>
            <div className ='pb-8'> 
                <p className ='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className ='py-6'>Currently, I work at Tata Consultancy Services as a Software Developer</p>
            </div>
            <div 
           
            className ='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 
                <div style ={{backgroundImage:`url(${WorkImg})`} } className ='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'> 
                        <span className ='text-2xl font-bold text-black tracking-wider'> 
                         I currently work here as a Assistant System Engineer Trainee. 
                        </span>
                        <div className='pt-8 text-center'></div>
                        <div>
                            <a href ="/">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work