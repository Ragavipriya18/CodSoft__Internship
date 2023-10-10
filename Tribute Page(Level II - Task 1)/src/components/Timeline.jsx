// Timeline.js
import React from 'react';

function Timeline() {
  return (
    <div name="timeline">

    <div className='text-white font-serif font-medium text-3xl mt-20 ml-14 md:ml-44 md:text-4xl'>
        Timeline 
    </div>

<div className="bg-slate-950 p-4 md:ml-40 md:mr-44">

      <div className="mb-4 ml-5 mr-5">
        <h2 className="text-lg text-white font-semibold animate-bounce ">1889
       
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Title: Birth of Jawaharlal Nehru</h3>
          <p className="text-gray-700 text-justify">Description: Jawaharlal Nehru was born on November 14, 1889, in Allahabad, British India.</p>
        </div>
      </div>

      <div className="mb-4 ml-5 mr-5">
        <h2 className="text-lg text-white font-semibold animate-bounce">1912</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Title: Education in England</h3>
          <p className="text-gray-700 text-justify">Description: Nehru traveled to England to study at Harrow School and later at Trinity College, Cambridge.</p>
        </div>
      </div>

      <div className="mb-4 ml-5 mr-5">
        <h2 className="text-lg text-white font-semibold animate-bounce">1919</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Title: Return to India</h3>
          <p className="text-gray-700 text-justify">Description: Nehru returned to India after completing his education in England and became involved in the Indian independence movement.</p>
        </div>
      </div>

      <div className="mb-4 ml-5 mr-5">
        <h2 className="text-lg text-white font-semibold animate-bounce">1942</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Title: Quit India Movement</h3>
          <p className="text-gray-700 text-justify">Description: Nehru was a prominent leader in the Quit India Movement, a significant campaign for India's independence from British rule.</p>
        </div>
      </div>

      <div className="mb-4 ml-5 mr-5">
        <h2 className="text-lg text-white font-semibold animate-bounce">1947</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Title: India's Independence</h3>
          <p className="text-gray-700 text-justify">Description: India gained independence from British colonial rule on August 15, 1947, and Nehru became the first Prime Minister of independent India.</p>
        </div>
      </div>

      <div className="mb-4 ml-5 mr-5">
        <h2 className="text-lg text-white font-semibold animate-bounce">1950</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Title: Adoption of Indian Constitution</h3>
          <p className="text-gray-700 text-justify">Description: Nehru played a crucial role in the adoption of the Indian Constitution, which established India as a democratic republic.</p>
        </div>
      </div>

      <div className="mb-4 ml-5 mr-5   ">
        <h2 className="text-lg text-white font-semibold animate-bounce">1964</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Title: Death of Jawaharlal Nehru</h3>
          <p className="text-gray-700 text-justify">Description: Jawaharlal Nehru passed away on May 27, 1964, leaving a lasting legacy as one of India's most influential leaders.
</p>
        </div>
      </div>



      
      {/* Additional timeline items can be added here */}
    </div>










    </div>
  );
}

export default Timeline;
