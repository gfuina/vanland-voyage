export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://vanland-voyage.fr/#organization",
    "name": "Vanland Voyage",
    "alternateName": "Vanland Voyage - Aménagement de Van",
    "url": "https://vanland-voyage.fr",
    "logo": "https://vanland-voyage.fr/logo.png",
    "image": "https://vanland-voyage.fr/images/hero.jpg",
    "description": "Artisans passionnés spécialisés dans l'aménagement de fourgons sur-mesure près de Tours. Projet complet, rénovation, pose d'accessoires.",
    "telephone": "+33756858541",
    "email": "contact@vanland-voyage.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "840 impasse Petit Couleur, ZI du Cassantin",
      "addressLocality": "Chanceaux-sur-Choisille",
      "postalCode": "37390",
      "addressRegion": "Centre-Val de Loire",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.4833,
      "longitude": 0.7333
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "€€€",
    "areaServed": {
      "@type": "City",
      "name": "Tours"
    },
    "sameAs": [
      // Ajoutez vos réseaux sociaux ici
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://vanland-voyage.fr/#localbusiness",
    "name": "Vanland Voyage",
    "url": "https://vanland-voyage.fr",
    "telephone": "+33756858541",
    "email": "contact@vanland-voyage.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "840 impasse Petit Couleur, ZI du Cassantin",
      "addressLocality": "Chanceaux-sur-Choisille",
      "postalCode": "37390",
      "addressRegion": "Centre-Val de Loire",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.4833,
      "longitude": 0.7333
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services d'aménagement de van",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aménagement complet sur-mesure",
            "description": "Aménagement complet de fourgon neuf avec homologation VASP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aménagement partiel",
            "description": "Accompagnement et réalisation partielle de votre projet d'aménagement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Réparation et amélioration",
            "description": "Réparation et amélioration de fourgons aménagés existants"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pose d'accessoires",
            "description": "Installation d'équipements et accessoires pour van"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://vanland-voyage.fr"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

