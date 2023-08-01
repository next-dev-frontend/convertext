
import React from 'react';
import Image from 'next/legacy/image';

function BgParallax() {
  return (

    <div id="bgParallax" className="select-none relative flex bg-center bg-fixed bg-no-repeat items-center bg-cover justify-center w-full h-96 px-4 py-8">
      <Image
        src="/backgrounds/bg3-convertext.webp"
        alt="logo da ConverText"
        layout="fill"
        objectFit="cover"
        loading='lazy'
      />
      <div className="sticky p-4 h-max max-w-3xl bg-transparent">
        <h3 className="font-bold border-2 border-color-white text-white bg-green-700 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">NO REGISTRATION!</h3>
        <br />
        <h3 className="font-bold border-2 border-color-white text-white bg-green-700 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">UNLIMITED TEXT SIZE!!</h3>
        <br />
        <h3 className="font-bold border-2 border-color-white text-white bg-green-700 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">TOTALLY FREE FOREVER!!!</h3>
      </div>
    </div>

  );
}

export default BgParallax;