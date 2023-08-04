import Image from "next/legacy/image";

function BgParallax() {

  return (
    <div className="flex items-center justify-center w-full max-w-full h-96 mb-12 relative bg-cover bg-fixed bg-center bg-no-repeat">
      <Image
        src="/backgrounds/bg3-convertext.webp"
        alt="logo sobre seguros"
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />

      <div className="z-10 p-2 text-2xl text-white bg-white bg-opacity-30 rounded">
        <div className="text-center">
          <h3 className="font-bold border-4 border-color-white text-white bg-gradient-to-r from-green-900 to-green-500 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">NO REGISTRATION!</h3>
        </div>
        <div className="text-center py-2">
          <h3 className="font-bold border-4 border-color-white text-white bg-gradient-to-r from-blue-900 to-blue-500 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">UNLIMITED TEXT SIZE!!</h3>
        </div>
        <div className="text-center">
          <h3 className="font-bold border-4 border-color-white text-white bg-gradient-to-r from-green-900 to-green-500 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">TOTALLY FREE FOREVER!!!</h3>
        </div>
      </div>
    </div >

  );
}

export default BgParallax;