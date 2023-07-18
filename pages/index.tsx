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
    >
      <main>
        <article className="flex flex-col mx-auto w-full max-w-5xl p-8 pt-10 space-y-4">
          <div className="flex items-start gap-8">
            <div className="sm:grid sm:rounded-full">
              <div className="relative w-16 md:w-24 lg:w-32 h-auto border-2 border-white rounded-full">
                <a href="/">
                  <Image
                    src="/logos/logo-convertext.webp"
                    alt="logo sobre seguros"
                    layout="responsive"
                    objectFit="cover"
                    width={512}
                    height={512}
                    className="rounded-full"
                  />
                </a>
              </div>
            </div>
            <div>
              <strong className="rounded border border-white bg-colorGreen px-3 py-1.5 text-[14px] font-medium text-white">
                Free Forever
              </strong>
              <h1 className="mt-4 font-bold text-2xl sm:text-3xl md:text-4xl text-colorBlue">
                Convert Text To Html With Tailwind or Css
              </h1>
              <p className="mt-1 text-md sm:text-xl text-gray-500">
                ConvertText provides a user-friendly interface that simplifies the conversion process. With its intuitive design and easy-to-follow instructions, users can effortlessly transform their text and articles into HTML code with inline styles!
              </p>
              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs font-medium">Coming soon with new features!</p>
                </div>
                <span className="hidden sm:block" aria-hidden="true">-</span>
                <p className="mt-2 text-xs font-medium text-gray-600 sm:mt-0">
                  Check available settings
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </PageSeo>
  )
}