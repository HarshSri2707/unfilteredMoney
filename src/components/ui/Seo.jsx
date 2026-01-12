import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../config/seo.config';

const Seo = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  author,
  publishedDate,
  modifiedDate,
}) => {
  const fullTitle = title || seoConfig.defaultTitle;
  const fullDescription = description || seoConfig.defaultDescription;
  const fullImage = image || `${seoConfig.siteUrl}${seoConfig.defaultImage}`;
  const fullUrl = url || seoConfig.siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content={seoConfig.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />

      {/* Article specific */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedDate && (
            <meta property="article:published_time" content={publishedDate} />
          )}
          {modifiedDate && (
            <meta property="article:modified_time" content={modifiedDate} />
          )}
        </>
      )}

      {/* Structured Data for Articles */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: fullTitle,
            description: fullDescription,
            image: fullImage,
            datePublished: publishedDate,
            dateModified: modifiedDate || publishedDate,
            author: {
              '@type': 'Person',
              name: author || 'UnfilteredMoney Team',
            },
            publisher: {
              '@type': 'Organization',
              name: seoConfig.siteName,
              logo: {
                '@type': 'ImageObject',
                url: `${seoConfig.siteUrl}/logo.png`,
              },
            },
          })}
        </script>
      )}

      {/* Structured Data for Website */}
      {type === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: seoConfig.siteName,
            url: seoConfig.siteUrl,
            description: fullDescription,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          })}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;