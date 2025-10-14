# SEO - Vanland Voyage

## ✅ Améliorations SEO Implémentées

### 1. Métadonnées Générales (app/layout.tsx)
- ✅ Title avec template personnalisé
- ✅ Description optimisée
- ✅ Mots-clés stratégiques
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Robots directives
- ✅ Langue française (lang="fr")
- ✅ URL de base (metadataBase)

### 2. Métadonnées par Page
Chaque page dispose de ses propres métadonnées optimisées :

#### Pages créées avec layout.tsx :
- `/` - Accueil : Focus sur "aménagement van Tours"
- `/about` - Qui sommes-nous : Histoire et valeurs
- `/prestations` - Nos prestations : Services détaillés
- `/realisations` - Portfolio : Exemples de projets
- `/projet` - Projet étape par étape : Process complet
- `/contact` - Contact : Informations pratiques
- `/boutique` - Boutique (coming soon)
- `/cgv` - CGV Atelier
- `/cgv-boutique` - CGV Boutique
- `/mentions-legales` - Mentions légales
- `/politique-cookies` - Politique cookies

### 3. Fichiers Techniques

#### Sitemap.xml (app/sitemap.ts)
- ✅ Génération automatique du sitemap
- ✅ Priorités par page
- ✅ Fréquence de mise à jour
- ✅ Accessible sur : `https://vanland-voyage.fr/sitemap.xml`

#### Robots.txt (app/robots.ts + public/robots.txt)
- ✅ Autorise l'indexation des pages publiques
- ✅ Bloque l'accès aux pages d'administration
- ✅ Référence le sitemap

### 4. Données Structurées (Schema.org)
Implémentées dans `components/StructuredData.tsx` :

- ✅ **Organization Schema** : Informations entreprise
- ✅ **LocalBusiness Schema** : SEO local (Google Maps)
  - Adresse : 840 impasse Petit Couleur, Chanceaux-sur-Choisille
  - Téléphone : 07 56 85 85 41
  - Horaires d'ouverture
  - Géolocalisation
- ✅ **Service Schema** : Catalogue de services
  - Aménagement complet
  - Aménagement partiel
  - Réparation et amélioration
  - Pose d'accessoires
- ✅ **Breadcrumb Schema** : Navigation

### 5. Mots-clés Ciblés

#### Principaux :
- aménagement van
- aménagement fourgon
- van aménagé Tours
- fourgon aménagé
- artisan van Tours
- homologation VASP

#### Secondaires :
- camper van
- vanlife
- isolation van
- électricité van
- renovation fourgon
- pose accessoires van

#### Longue traîne :
- aménagement complet fourgon Tours
- homologation VASP Indre-et-Loire
- atelier aménagement van Tours
- projet aménagement van sur mesure

## 📊 Recommandations Supplémentaires

### 1. Google Search Console
- [ ] Inscrire le site sur Google Search Console
- [ ] Ajouter le sitemap.xml
- [ ] Vérifier l'indexation des pages
- [ ] Surveiller les erreurs d'exploration

### 2. Google My Business
- [ ] Créer/optimiser la fiche Google My Business
- [ ] Ajouter des photos de l'atelier et réalisations
- [ ] Demander des avis clients
- [ ] Mettre à jour horaires et informations

### 3. Réseaux Sociaux
Dans `components/StructuredData.tsx`, ajoutez vos URLs :
```typescript
"sameAs": [
  "https://www.facebook.com/vanlandvoyage",
  "https://www.instagram.com/vanlandvoyage",
  // etc.
]
```

### 4. Contenu
- [ ] Blog/Actualités pour contenu frais
- [ ] Articles conseils aménagement van
- [ ] Guides techniques (isolation, électricité)
- [ ] Témoignages clients détaillés

### 5. Performance
- [x] Optimisation des images (fait avec script)
- [ ] Lazy loading des images
- [ ] Compression gzip/brotli (configurer sur serveur)
- [ ] Cache navigateur

### 6. Liens Internes
- [x] Navigation claire entre pages
- [ ] Liens contextuels dans le contenu
- [ ] Footer avec liens importants

### 7. Backlinks
- [ ] Inscription dans annuaires locaux (Tours, Indre-et-Loire)
- [ ] Partenariats avec fournisseurs (Victron, Autoterm, etc.)
- [ ] Articles invités sur blogs vanlife
- [ ] Relations presse locales

## 🔍 Vérification SEO

### Outils à utiliser :
1. **Google Search Console** - Performance et indexation
2. **Google PageSpeed Insights** - Performance
3. **Schema.org Validator** - Vérifier données structurées
4. **Screaming Frog** - Audit technique complet
5. **Ahrefs / Semrush** - Analyse de backlinks et mots-clés

### Tests manuels :
```bash
# Vérifier le sitemap
curl https://vanland-voyage.fr/sitemap.xml

# Vérifier le robots.txt
curl https://vanland-voyage.fr/robots.txt

# Vérifier les données structurées
# View Page Source > Chercher "application/ld+json"
```

## 📈 Métriques à Suivre

### KPIs SEO :
- Positionnement sur mots-clés cibles
- Trafic organique
- Taux de rebond
- Temps sur site
- Pages par session
- Conversions (formulaire contact)

### Objectifs locaux :
- Apparition dans le pack local Google (top 3)
- Avis Google My Business (objectif : 4.5+/5)
- Requêtes "près de chez moi" / "à Tours"

## 🚀 Prochaines Étapes

1. **Immédiat** :
   - Vérifier que le site est bien en production
   - Soumettre sitemap à Google Search Console
   - Optimiser Google My Business

2. **Court terme (1 mois)** :
   - Créer du contenu blog
   - Obtenir premiers avis clients
   - Améliorer performance (Core Web Vitals)

3. **Moyen terme (3 mois)** :
   - Stratégie backlinks
   - Optimisation continue des mots-clés
   - Extension du contenu

4. **Long terme (6+ mois)** :
   - Positionnement top 3 sur mots-clés principaux
   - Autorité locale établie
   - Trafic organique stable et croissant

## 📝 Notes

- Toutes les métadonnées sont en français
- Focus sur le SEO local (Tours, Indre-et-Loire, Centre-Val de Loire)
- Structure technique optimale pour Next.js 13+ App Router
- Données structurées conformes Schema.org
- Site multilingue non nécessaire (marché français uniquement)

