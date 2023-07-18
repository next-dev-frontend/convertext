import { ArticleJsonLd, NextSeo } from 'next-seo'

function PageSeo({ title, titleTemplate, description, path, children }) {
  const url = `https://convertext.vercel.app${path}`
  const imageUrl = 'https:/convertext.vercel.app/backgrounds/bg1-convertext.webp';

  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleTemplate}
        canonical={url}

        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: 'Lopes Matheus S.'
          },
          {
            name: 'application-name',
            content: 'Convert Text to Html'
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1'
          }
        ]}

        openGraph={{
          type: 'article',
          article: {
            publishedTime: '2022-06-23T23:04:13Z',
            modifiedTime: '2022-01-23T18:04:43Z',
            tags: ['convert text to html', 'convert text', 'convert to html', 'text to html', 'txt to html'],
          },
          url: url,
          site_name: 'Website ConverText',
          title: title,
          description: description,
          images: [
            {
              url: imageUrl,
              alt: 'template ConverText',
              width: 380,
              height: 380,
              type: 'image/webp',
            },
          ],
        }}
      />

      <ArticleJsonLd
        url={url}
        title={title}
        images={[
          'https:/convertext.vercel.app/backgrounds/bg1-convertext.webp',
          'https:/convertext.vercel.app/backgrounds/bg2-convertext.webp',
          'https:/convertext.vercel.app/backgrounds/bg3-convertext.webp',

        ]}
        datePublished="2022-06-21T23:04:13Z"
        dateModified="2022-01-21T18:04:43Z"
        authorName="Lopes Matheus S."
        publisherName="Website ConverText"
        publisherLogo="https://convertext.vercel.app/logos/logo-72x72.png"
        description={description}
      />

      {children}
    </div>
  )
}
export default PageSeo
