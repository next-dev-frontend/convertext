function BgParallax() {
  return (
    <div>
      <section id="bgParallax" className="select-none relative mx-auto flex bg-center bg-fixed bg-no-repeat items-center bg-cover justify-center w-full max-w-full h-96 px-4 py-8">
        <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/backgrounds/bg3-convertext.webp)' }} />
        <span className="sr-only">Image Background</span>
        <div className="sticky p-4 h-max max-w-3xl">

          <h3 className="font-bold text-white bg-green-700 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">NO REGISTRATION!</h3>
          <br />
          <h3 className="font-bold text-white bg-green-700 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">UNLIMITED TEXT SIZE!!</h3>
          <br />
          <h3 className="font-bold text-white bg-green-700 text-center p-2 text-3xl md:text-4xl lg:text-5xl rounded">TOTALLY FREE FOREVER!!!</h3>

        </div>
      </section>
    </div>
  );
}

export default BgParallax;