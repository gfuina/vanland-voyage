# 🎨 Guide d'utilisation de Lordicon

## Installation

Lordicon est déjà configuré dans le projet via le composant `LordIcon.tsx` qui charge automatiquement le CDN.

## Utilisation de base

```tsx
import LordIcon from "@/components/LordIcon";

// Exemple simple
<LordIcon
  src="https://cdn.lordicon.com/lomfljuq.json"
  trigger="hover"
  size={80}
/>
```

## Props disponibles

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | **required** | URL de l'icône Lordicon |
| `trigger` | string | "hover" | Type d'animation: "hover", "click", "loop", "loop-on-hover", "morph", "morph-two-way" |
| `colors` | string | - | Couleurs personnalisées (format: "primary:#121331,secondary:#08a88a") |
| `stroke` | string\|number | - | Épaisseur du trait |
| `size` | number | 96 | Taille en pixels |
| `delay` | number | - | Délai avant l'animation (ms) |
| `state` | string | - | État initial de l'icône |
| `className` | string | "" | Classes CSS additionnelles |
| `style` | object | {} | Styles inline additionnels |

## Exemples d'utilisation

### Icône au survol (hover)
```tsx
<LordIcon
  src="https://cdn.lordicon.com/rhvddzym.json"
  trigger="hover"
  colors="primary:#1e3a8a,secondary:#3b82f6"
  size={64}
/>
```

### Icône en boucle
```tsx
<LordIcon
  src="https://cdn.lordicon.com/whrxobsb.json"
  trigger="loop"
  size={100}
/>
```

### Icône avec clic
```tsx
<LordIcon
  src="https://cdn.lordicon.com/lomfljuq.json"
  trigger="click"
  colors="primary:#16a34a"
  size={50}
/>
```

### Icône personnalisée avec tes couleurs
```tsx
// Couleurs Vanland Voyage
<LordIcon
  src="https://cdn.lordicon.com/lecprnjb.json"
  trigger="hover"
  colors="primary:#1e3a8a,secondary:#f59e0b" // navy et accent
  size={80}
/>
```

## Icônes pré-configurées

Tu peux utiliser les icônes pré-configurées depuis `VanlandIcons` :

```tsx
import LordIcon from "@/components/LordIcon";
import { VanlandIcons } from "@/components/LordIconExamples";

// Email
<LordIcon
  src={VanlandIcons.email}
  trigger="hover"
  colors="primary:#1e3a8a,secondary:#3b82f6"
  size={64}
/>

// Téléphone
<LordIcon
  src={VanlandIcons.phone}
  trigger="hover"
  colors="primary:#1e3a8a,secondary:#3b82f6"
  size={64}
/>

// Outils
<LordIcon
  src={VanlandIcons.tools}
  trigger="loop-on-hover"
  colors="primary:#1e3a8a,secondary:#f59e0b"
  size={80}
/>
```

## Trouver plus d'icônes

1. Va sur [lordicon.com/icons](https://lordicon.com/icons)
2. Choisis une icône gratuite ou premium
3. Copie l'URL du JSON (finit par `.json`)
4. Utilise-la dans ton composant

Exemple:
```
https://cdn.lordicon.com/lomfljuq.json
```

## Couleurs du site Vanland Voyage

Pour garder une cohérence visuelle, utilise ces couleurs :

```tsx
// Navy (bleu foncé principal)
primary:#1e3a8a

// Secondary (bleu clair)
secondary:#3b82f6

// Accent (jaune/orange)
accent:#f59e0b

// Exemples de combinaisons
colors="primary:#1e3a8a,secondary:#3b82f6"
colors="primary:#1e3a8a,secondary:#f59e0b"
colors="primary:#3b82f6,secondary:#f59e0b"
```

## Exemple d'intégration dans un bouton

```tsx
<button className="flex items-center gap-3 px-6 py-3 bg-secondary text-white rounded-2xl hover:shadow-lg transition-all">
  <LordIcon
    src={VanlandIcons.email}
    trigger="hover"
    colors="primary:#ffffff"
    size={24}
  />
  <span>Nous contacter</span>
</button>
```

## Exemple d'intégration dans une card

```tsx
<div className="bg-white rounded-3xl p-8 shadow-lg">
  <LordIcon
    src={VanlandIcons.tools}
    trigger="loop-on-hover"
    colors="primary:#1e3a8a,secondary:#f59e0b"
    size={64}
    className="mb-4"
  />
  <h3 className="text-xl font-bold text-navy mb-2">
    Aménagement complet
  </h3>
  <p className="text-gray-600">
    De la conception à la réalisation
  </p>
</div>
```

## Performance

- Le script Lordicon se charge une seule fois de manière asynchrone
- Les icônes sont vectorielles (légères)
- Utilise le CDN de Lordicon pour un chargement rapide

## Notes

- Les icônes gratuites sont limitées mais largement suffisantes
- Pour des animations custom, considère un abonnement Lordicon
- Les icônes fonctionnent dans tous les navigateurs modernes

