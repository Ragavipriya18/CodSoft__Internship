import React, { useState } from 'react';

const images = [
  'gallery1.jpeg',
  'gallery2.jpeg',
  'gallery3.jpeg',
  'gallery4.jpeg',
  'gallery5.jpeg',
  'gallery6.jpeg',
  'gallery7.jpeg',
  'gallery8.jpeg',
  'gallery9.jpeg',
  'gallery10.jpeg',
  // Add more image URLs here
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div name="gallery">
       <div className='text-white font-serif font-medium mt-10 text-3xl ml-14 md:ml-44 md:text-4xl'>
    Gallery 
     </div>
    
    <div className="w-full relative mt-10 md:mx-auto">
      <div className="overflow-hidden w-full">
        <div className="flex transition-transform duration-300 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} alt={`Image ${index + 1}`} className="w-96 h-96 mx-auto md:w-96 " />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 flex items-center h-full w-10 bg-black bg-opacity-40">
        <button className="text-white" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>

        </button>
      </div>
      <div className="absolute top-0 right-0 flex items-center h-full w-10 bg-black bg-opacity-40">
        <button className="text-white" onClick={nextSlide}> 
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
    </button> 
      </div>
    </div>
    </div>
  );
};

export default Gallery;
