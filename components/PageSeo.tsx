import { ArticleJsonLd, NextSeo } from 'next-seo'

function PageSeo({ title, titleTemplate, description, path, children }) {
  const url = `https://conver-text.vercel.app${path}`
  const imageUrl = 'https:/conver-text.vercel.app/backgrounds/bg1-convertext.webp';
  const currentDate = new Date().toISOString();

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
            publishedTime: currentDate,
            modifiedTime: currentDate,
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
          'https:/conver-text.vercel.app/backgrounds/bg1-convertext.webp',
          'https:/conver-text.vercel.app/backgrounds/bg2-convertext.webp',
          'https:/conver-text.vercel.app/backgrounds/bg3-convertext.webp',

        ]}
        datePublished={currentDate}
        dateModified={currentDate}
        authorName="Lopes Matheus S."
        publisherName="ConverText Website"
        publisherLogo="https://conver-text.vercel.app/logos/logo-72x72.png"
        description={description}
      />

      {children}
    </div>
  )
}
export default PageSeo
