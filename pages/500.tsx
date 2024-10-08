export default function page500() {
  return (
    <section id="page500" className="relative flex flex-wrap flex-shrink md:flex-shrink-0 items-center justify-center m-auto bg-no-repeat w-full max-w-full h-96 md:h-screen">
      <div className="absolute grid h-screen place-content-center bg-opacity-0">
        <div className="text-center">
          <strong className="text-9xl font-black text-colorRed">500</strong>
          <p className="mt-4 text-gray-500 pb-8">Server error. Try later.</p>
          <div className="w-full items-center">
            <a href="/">
              <button
                id="navAction1"
                className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-colorBlue border-4 border-white text-white hover:bg-white hover:text-colorBlue hover:border-colorBlue rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-1000 ease-in-out shadow-xl"
              >
                Back to Home Page
              </button>
            </a>
          </div>
        </div>
      </div>


    </section>
  )
}