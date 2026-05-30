import { SITE } from '@/lib/constants';

const StructuredData = () => {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": SITE.name,
    "url": SITE.url,
    "image": SITE.defaultImage,
    "sameAs": [
      SITE.github,
      SITE.linkedin,
      `https://twitter.com/${SITE.twitter.replace('@', '')}`
    ],
    "jobTitle": "Fullstack Developer | Software Engineer | API & Web Systems Developer",
    "description": SITE.description,
    "worksFor": {
      "@type": "Organization",
      "name": SITE.name
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE.name,
    "url": SITE.url,
    "description": SITE.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
    </>
  );
};

export default StructuredData;