import { useState } from 'react';

const Advantages = () => {

  const code = `<section id="code" className="container mx-auto pt-4 pb-10 w-full max-w-5xl">
      
    <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none py-8">
      <div className="w-auto pl-5">
        <h1 className="my-4 text-left lg:text-center text-3xl md:text-4xl lg:text-5xl text-blue-500 font-bold">
          TITLE HERE
        </h1>
      </div>
    </div>

    <div className="w-full mb-6">
      <div className="h-1 mx-8 my-0 py-0 bg-gray-400 bg-opacity-25"></div>
    </div>

    <div className="flex flex-wrap text-gray-500">
      <div className="w-full px-8 text-sm md:text-md lg:text-lg">
        <div className="mx-auto align-middle">
          YOUR GENERATED CODE HERE!
        </div>
      </div>
    </div>

</section>`;

  const [isCopied, setIsCopied] = useState(false);

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (

    <section id="code" className="select-none container mx-auto pt-4 pb-4 w-full max-w-5xl">

      <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 py-8">
        <div className="w-auto pl-5">
          <h2 className="my-4 text-left lg:text-center text-3xl md:text-4xl lg:text-5xl text-colorBlue font-bold">
            Use To Quickly Create Content
          </h2>
        </div>
      </div>

      <div className="w-full mb-6">
        <div className="h-1 mx-8 my-0 py-0 bg-gray-400 bg-opacity-25" />
      </div>

      <div className="flex flex-wrap text-gray-500">
        <div className="w-full px-4">
          <div className="mx-auto align-middle">

            <p className="mt-1 text-md md:text-lg lg:text-xl text-gray-600">
              This is just one example of how you can create content for your page. In this code, an H1 tag was inserted where the text title should be added, as the text to html converter does not create H1 tags (only H2 and H3). Just below, where it says YOUR GENERATED CODE HERE!, is where the html code generated on this site must be added. Feel free to copy, modify and use this sample code.
            </p>

          </div>
        </div>
      </div>


      <div className="flex flex-wrap text-gray-500">
        <div className="w-full px-4 text-sm md:text-md lg:text-lg">
          <div className="mx-auto align-middle">

            <div className="flex flex-nowrap items-center justify-center px-4 md:px-0 shadow-xl md:shadow-none py-8">
              <div className="w-auto pl-5">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                  onClick={copyCodeToClipboard}
                >
                  {isCopied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
            </div>


            <pre className="text-xs md:text-sm lg:text-md block overflow-x-auto p-2 bg-gray-900 rounded text-white">
              <div className="w-full h-auto flex items-center pt-2 pb-6">
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mx-1"></span>
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500 mx-1"></span>
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 mx-1"></span>
              </div>
              {code}
            </pre>

          </div>
        </div>
      </div>
    </section>


  );
}
export default Advantages
