# Mode Maintenance

## Vue d'ensemble

Le mode maintenance permet de mettre le site hors ligne pour tous les visiteurs tout en permettant aux administrateurs d'y accéder via un mot de passe.

## Configuration

### Variables d'environnement

Ajoutez ces variables à votre fichier `.env` :

```env
# Activer/désactiver le mode maintenance
MAINTENANCE_MODE=false

# Mot de passe pour contourner la maintenance
MAINTENANCE_BYPASS_PASSWORD=votre_mot_de_passe_securise
```

### Activation du mode maintenance

1. Dans votre fichier `.env`, changez :
   ```env
   MAINTENANCE_MODE=true
   ```

2. Redémarrez votre serveur Next.js

3. Tous les visiteurs seront redirigés vers la page de maintenance

### Accès administrateur pendant la maintenance

Quand le mode maintenance est activé, les administrateurs peuvent accéder au site :

1. Visitez le site - vous serez redirigé vers `/maintenance`
2. Sur la page de maintenance, cliquez sur le petit point en bas pour révéler le formulaire admin
3. Entrez le mot de passe défini dans `MAINTENANCE_BYPASS_PASSWORD`
4. Vous serez redirigé vers le site avec un accès complet pendant 24h

Le cookie de bypass expire après 24 heures.

## Architecture technique

### Fichiers créés

- **`/app/maintenance/page.tsx`** : Page de maintenance avec design moderne et formulaire de bypass
- **`/app/api/maintenance/bypass/route.ts`** : API pour vérifier le mot de passe et créer le cookie de bypass
- **`/middleware.ts`** : Modifié pour gérer la redirection vers la page de maintenance

### Fonctionnement du middleware

Le middleware vérifie dans cet ordre :

1. **Mode maintenance activé ?** → Si `MAINTENANCE_MODE=false`, tout fonctionne normalement
2. **Ressource statique ?** → Les assets (images, CSS, JS) sont toujours accessibles
3. **Page de maintenance ?** → La page `/maintenance` est accessible sans bypass
4. **Cookie de bypass ?** → Si présent et valide, l'utilisateur accède au site normalement
5. **Sinon** → Redirection vers `/maintenance`

### Sécurité

- Le mot de passe de bypass est stocké uniquement dans `.env` (côté serveur)
- Le cookie de bypass est `httpOnly` pour éviter l'accès JavaScript
- Le cookie expire automatiquement après 24h
- Le formulaire de bypass est caché par défaut (discret)

## Exemples d'utilisation

### Mise en maintenance rapide

```bash
# Dans votre .env
MAINTENANCE_MODE=true
```

Puis redémarrez :
```bash
npm run dev
# ou
npm run build && npm start
```

### Désactivation

```bash
# Dans votre .env
MAINTENANCE_MODE=false
```

Redémarrez le serveur et le site redevient accessible pour tous.

## Personnalisation

### Modifier le design de la page de maintenance

Éditez `/app/maintenance/page.tsx` - la page utilise Tailwind CSS et est entièrement personnalisable.

### Changer la durée du bypass

Dans `/app/api/maintenance/bypass/route.ts`, modifiez :

```typescript
maxAge: 60 * 60 * 24, // 24 heures actuellement
```

### Ajouter des IPs en whitelist

Vous pouvez modifier le middleware pour autoriser certaines IPs sans mot de passe :

```typescript
const allowedIPs = ['123.456.789.0']; // IPs autorisées
const clientIP = request.ip || request.headers.get('x-forwarded-for');
if (allowedIPs.includes(clientIP)) {
  return NextResponse.next();
}
```

## Troubleshooting

### Le site n'entre pas en mode maintenance

- Vérifiez que `MAINTENANCE_MODE=true` dans `.env`
- Vérifiez que vous avez redémarré le serveur
- Vérifiez les logs du serveur pour voir si la variable est bien chargée

### Le bypass ne fonctionne pas

- Vérifiez que `MAINTENANCE_BYPASS_PASSWORD` est défini dans `.env`
- Vérifiez que le mot de passe est correct
- Vérifiez que les cookies sont activés dans votre navigateur
- Essayez en navigation privée pour exclure les problèmes de cache

### Erreur après activation

- Vérifiez que tous les fichiers ont été créés correctement
- Vérifiez les logs de la console pour les erreurs
- Assurez-vous que le middleware est bien configuré

