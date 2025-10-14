# Configuration de l'Administration

## Variables d'environnement requises

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```bash
# MongoDB Atlas
MONGODB_URI=votre_uri_mongodb_atlas

# Mot de passe admin
ADMIN_PASSWORD=votre_mot_de_passe_securise

# NextAuth (pour les sessions)
NEXTAUTH_SECRET=une_cle_secrete_aleatoire
NEXTAUTH_URL=http://localhost:3000
```

## Configuration MongoDB Atlas

1. Créez un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créez un nouveau cluster (gratuit)
3. Créez un utilisateur de base de données
4. Autorisez l'accès depuis votre IP (ou 0.0.0.0/0 pour tous)
5. Récupérez votre URI de connexion :
   - Cliquez sur "Connect" → "Connect your application"
   - Copiez l'URI et remplacez `<password>` par votre mot de passe
   - Format : `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority`

## Accès à l'administration

1. **Page de login** : `/admin-login`
   - Entrez le mot de passe défini dans `ADMIN_PASSWORD`
   
2. **Dashboard admin** : `/administration`
   - Accès protégé par middleware
   - Session valide 24h

## Fonctionnalités

### ✅ Déjà implémenté
- Authentification par mot de passe
- Protection des routes admin
- Dashboard d'accueil
- Modèle Réalisations (MongoDB)
- Connexion MongoDB Atlas

### 🚧 À venir
- CRUD complet des réalisations
- Upload d'images
- Gestion des témoignages
- Statistiques du site
- Paramètres généraux

## Développement local

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## Sécurité

- ⚠️ **Important** : Ne jamais commit le fichier `.env.local`
- Utilisez un mot de passe fort pour `ADMIN_PASSWORD`
- En production, utilisez HTTPS obligatoirement
- Changez régulièrement le `NEXTAUTH_SECRET`

