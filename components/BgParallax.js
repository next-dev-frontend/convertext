import React, { useEffect } from 'react';

function BgParallax() {

  useEffect(() => {
    // Create an observer to check when the image is in the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the image is in the viewport, add the lazy-loaded class to remove lazy loading behavior
          entry.target.classList.add('lazy-loaded');
          observer.unobserve(entry.target);
        }
      });
    });

    // Observe the custom-img element
    const customImg = document.querySelector('.custom-img');
    observer.observe(customImg);

    // Clean up the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center justify-center h-96 mb-12 bg-fixed bg-center bg-cover custom-img">
      <span className="sr-only">code html background</span>
      <div className="z-10 p-2 text-2xl text-white bg-white bg-opacity-30 rounded">
        <div className="text-center">
          <h3 className="font-bold border-4 border-color-white text-white bg-gradient-to-r from-green-900 to-green-500 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">
            NO REGISTRATION!
          </h3>
        </div>
        <div className="text-center py-2">
          <h3 className="font-bold border-4 border-color-white text-white bg-gradient-to-r from-blue-900 to-blue-500 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">
            UNLIMITED TEXT SIZE!!
          </h3>
        </div>
        <div className="text-center">
          <h3 className="font-bold border-4 border-color-white text-white bg-gradient-to-r from-green-900 to-green-500 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">
            TOTALLY FREE FOREVER!!!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BgParallax;