import React from 'react';

const Achievements = () => {
  return (
    <div name="achievements"> 
      <div className='text-white font-serif font-medium text-3xl mt-20 ml-14 md:ml-44 md:text-4xl'>
        Achievements
      </div>

      {/* row1 */}

      <div className='flex flex-wrap md:ml-44'>

      <a href=''>
        <div className='bg-white w-80 h-36 rounded-xl mt-5 ml-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 mx-auto '>
            <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <p className='ml-3 mr-3 text-justify text-gray-950 font-serif font-medium'><span className='text-red-950 font-mono'>Architect of Modern India:</span> Nehru is often referred to as the "Architect of Modern India" due to his role in shaping the country's democratic, secular, and socialist.</p>
          </div>
        </a>

        <a href=''>
        <div className='bg-white w-80 h-36 rounded-xl mt-5 ml-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 mx-auto'>
            <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <p className='ml-3 mr-3 text-justify text-gray-950 font-serif font-medium'><span className='text-red-950 font-mono'>First Prime Minister of India:</span> Nehru became India's first Prime Minister on August 15, 1947, when India gained independence. He served in this position until his death in 1964.</p>
        </div>
        </a>

        <a href=''>
        <div className='bg-white w-80 h-36 rounded-xl mt-5 ml-10   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300  mx-auto '>
            <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <p className='ml-3 mr-3 text-justify text-gray-950 font-serif font-medium'><span className='text-red-950 font-mono'>Indian Constitution:</span>Nehru played a significant role in the drafting of the Indian Constitution. His commitment to democratic values and social justice is reflected in the Constitution.</p>
        </div>
        </a>

        </div>

        {/* row2 */}

        <div className='flex flex-wrap md:mt-14 md:ml-44'>
        <a href=''>
        <div className='bg-white w-80 h-36 rounded-xl mt-5 ml-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300  mx-auto  '>
            <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <p className='ml-3 mr-3 text-justify text-gray-950 font-serif font-medium'><span className='text-red-950 font-mono'>Educational Reforms:</span>Nehru was a strong advocate for education. He worked to promote scientific and technical education, leading to the establishment of institutions.</p>
        </div>
        </a>

        <a href=''>
        <div className='bg-white w-80 h-36 rounded-xl mt-5 ml-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300  mx-auto'>
            <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <p className='ml-3 mr-3 text-justify text-gray-950 font-serif font-medium'><span className='text-red-950 font-mono'>Foreign Policy:</span> He actively engaged in shaping India's foreign policy, promoting principles of peace and cooperation. He was instrumental in resolving international disputes.</p>
        </div>
        </a>

        <a href=''>
        <div className='bg-white w-80 h-36 rounded-xl mt-5 ml-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 mx-auto'>
            <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <p className='ml-3 mr-3 text-justify text-gray-950 font-serif font-medium'><span className='text-red-950 font-mono '>Children's Day:</span> In honor of Nehru's affection for children and his contributions to education, his birthday, November 14, is celebrated as Children's Day in India.</p>
        </div>
        </a>

        </div>
        

    
    </div>
  )
}

export default Achievements;








