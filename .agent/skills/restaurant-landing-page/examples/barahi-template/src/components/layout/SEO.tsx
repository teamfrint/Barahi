import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SEOConfig } from '../../types';

interface SEOProps {
  config?: SEOConfig;
  lang: string;
}

function SEO({ config, lang }: SEOProps) {
  const { t } = useTranslation();

  if (!config) return null;

  const title = t(config.title);
  const description = t(config.description);
  const ogType = config.ogType || 'website';
  const twitterCard = config.twitterCard || 'summary_large_image';

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {config.ogImage && <meta property="og:image" content={config.ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {config.ogImage && <meta name="twitter:image" content={config.ogImage} />}
    </Helmet>
  );
}

export default SEO;
