# Configuration Resend pour le formulaire de contact

## Prérequis

1. Compte Resend créé sur [resend.com](https://resend.com)
2. Domaine vérifié (`vanland-voyage.fr`)

## Configuration

### 1. Obtenir la clé API

1. Connectez-vous sur [resend.com](https://resend.com)
2. Allez dans **API Keys**
3. Créez une nouvelle clé API avec les permissions "Sending access"
4. Copiez la clé (elle ne sera affichée qu'une seule fois)

### 2. Vérifier votre domaine

1. Dans Resend, allez dans **Domains**
2. Ajoutez votre domaine `vanland-voyage.fr`
3. Configurez les enregistrements DNS (SPF, DKIM, DMARC)
4. Attendez la vérification (peut prendre quelques heures)

### 3. Variables d'environnement

Ajoutez dans `.env.local` :

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Utilisation

Le formulaire de contact envoie un email à `contact@vanland-voyage.fr` avec :
- Informations du client (prénom, nom, email, téléphone)
- Type de service demandé
- Message détaillé
- Date et heure de la demande

## Test en développement

Avant que le domaine soit vérifié, Resend permet d'envoyer des emails uniquement vers :
- L'email associé à votre compte Resend
- Les emails que vous avez ajoutés dans "Verified Emails"

Pour tester :
1. Ajoutez `contact@vanland-voyage.fr` dans "Verified Emails"
2. Vérifiez l'email via le lien reçu
3. Testez le formulaire en local

## Email de réponse automatique (optionnel)

Pour envoyer un email de confirmation au client, ajoutez ceci dans `/app/api/contact/route.ts` après l'envoi principal :

```typescript
// Email de confirmation au client
await resend.emails.send({
  from: "Vanland Voyage <contact@vanland-voyage.fr>",
  to: [email],
  subject: "Nous avons bien reçu votre message",
  html: `
    <h2>Bonjour ${firstName} ${lastName},</h2>
    <p>Merci pour votre message ! Nous l'avons bien reçu et nous vous répondrons dans les plus brefs délais.</p>
    <p>À très bientôt,<br/>L'équipe Vanland Voyage</p>
  `,
});
```

## Production

En production (sur Vercel), assurez-vous que :
1. La variable `RESEND_API_KEY` est configurée dans les variables d'environnement Vercel
2. Le domaine est vérifié dans Resend
3. Les enregistrements DNS sont corrects

## Limites

- **Plan gratuit** : 3 000 emails/mois, 100 emails/jour
- **Plan Pro** : À partir de 20$/mois pour 50 000 emails

## Support

Documentation Resend : https://resend.com/docs

