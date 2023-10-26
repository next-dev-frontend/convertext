import Image from 'next/legacy/image'
import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))

export default function Home() {

  return (
    <PageSeo
      title="Free Text To Html Converter"
      titleTemplate="%s | With Tailwind or Css"
      description="ConvertText provides a user-friendly interface that simplifies the conversion process. With its intuitive design and easy-to-follow instructions, users can effortlessly transform their text and articles into HTML code with inline styles!"
      path="/"
      publishedTime="2023-07-18T22:20:00Z"
      modifiedTime="2023-08-01T22:05:53Z"
    >

      <main>
        <article className="select-none flex flex-col mx-auto w-full max-w-5xl p-8 space-y-4">

          <div className="flex items-start gap-4">
            <div className="pt-5 sm:grid sm:rounded-full">
              <div className="relative w-16 md:w-24 lg:w-32 h-auto border-2 border-white rounded-full">
                <a href="/">
                  <Image
                    src="/logos/logo-convertext.webp"
                    alt="logo da ConverText"
                    layout="responsive"
                    objectFit="cover"
                    width={512}
                    height={512}
                    priority={true}
                    className="rounded-full"
                  />
                </a>
              </div>
            </div>
            <div>
              <h1 className="mt-4 font-bold text-3xl sm:text-4xl md:text-5xl text-colorBlue">
                Convert Text to Html, Totally Free!
              </h1>
              <h2 className="mt-4 italic text-2xl sm:text-3xl md:text-4xl text-green-700">
                Add your css or tailwind styles
              </h2>
              <p className="hidden md:flex mt-1 pt-4 text-md sm:text-xl text-gray-600">
                ConvеrtTеxt providеs a usеr-friеndly intеrfacе that simplifiеs thе convеrsion procеss.  With its intuitivе dеsign and еasy-to-follow instructions,  usеrs can еffortlеssly transform thеir tеxt and articlеs into HTML codе with inlinе stylеs!
              </p>
              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-900">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-medium">Coming soon with new features!</p>
                </div>
                <span className="hidden sm:block" aria-hidden="true">-</span>
                <p className="mt-2 text-sm font-medium text-gray-900 sm:mt-0">
                  Check available settings
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-white bg-green-700 text-center p-2 text-sm md:text-lg lg:text-xl rounded">
              No rеgistration! - Unlimited text size! - Totally FREE forеvеr!
            </h2>
          </div>

        </article>
      </main>
    </PageSeo>
  )
}