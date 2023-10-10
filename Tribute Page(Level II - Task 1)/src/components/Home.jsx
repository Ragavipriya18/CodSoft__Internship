import React from 'react'

const Home = () => {

 
  return (
    <div name="home">
    <div className='text-3xl text-white font-serif font-medium items-center justify-center flex py-24'>
    
    Pandit Jawaharlal Nehru!
    </div>

    <div className='flex md:ml-40 md:mr-40'>
        <img className='rounded-full items-center md:hover:scale-110 duration-75 justify-center' src='logo1.png' alt='' height={200} width={200}></img>
        <p className='text-white text-1xl mx-5 text-justify md:text-2xl md:text-justify md:mt-11'>"We have laid down in our Constitution that India is a secular state. That does not ,mean irreligion. It means equal respect for all faiths and equal opportunities for those who profess any faith."
        <br/><br/>
        <span className='text-red-500 '>-Jawaharlal Nehru</span>
        
        </p>
        
    </div>


    </div>
  )
}

export default Home;
