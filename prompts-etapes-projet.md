# Klic Site — Prompts étape par étape (Cursor / Claude Code)

Ce fichier contient les prompts à utiliser, dans l'ordre, pour construire le
site Klic Site du premier commit jusqu'au déploiement.

**Avant de commencer**, place ces 4 fichiers à la racine de ton projet (ou dans
un dossier `docs/` que tu référenceras) :

- `klic-site-prd.md`
- `klic-site-branding.html`
- `.cursorrules` (à la racine, obligatoire — Cursor le lit automatiquement)
- ce fichier, `prompts-etapes-projet.md`

Chaque prompt est conçu pour être copié tel quel dans Cursor (Composer/Agent)
ou dans Claude Code. Ils supposent que `.cursorrules` est déjà en place : tu
n'as donc pas besoin de répéter les règles de sécurité et de code à chaque
fois, l'agent doit déjà les respecter.

Fais une pause après chaque étape pour vérifier le résultat avant de passer à
la suivante. Ne saute pas l'étape 0.

---

## Étape 0 — Cadrage avec l'agent

But : s'assurer que l'agent a bien intégré le PRD et la marque avant d'écrire
la moindre ligne de code.

```
Lis entièrement @.cursorrules, @klic-site-prd.md et @klic-site-branding.html.
Résume en 10 lignes maximum : le positionnement, la cible, l'offre,
le canal de conversion prioritaire, les 3 contraintes de design les
plus importantes, et toute information importante. Ne code rien pour l'instant, je veux juste valider
que tu as bien compris le projet avant qu'on commence.
```

Vérifie le résumé. S'il manque quelque chose d'important, corrige-le avant de
continuer — tout le reste du projet part de cette compréhension.

---

## Étape 1 — Initialisation du projet

```
Initialise un projet Next.js (App Router) en TypeScript strict avec
Tailwind CSS, selon la stack définie dans .cursorrules section 2.
Configure : ESLint, Prettier, un .gitignore complet (dont .env*),
et un .env.example vide qui liste les variables d'environnement
prévues (sans valeurs réelles). Ajoute un README.md minimal qui
explique comment lancer le projet en local.
Ne crée pas encore de pages de contenu, juste la structure du projet.
```

Vérifie que le projet démarre (`npm run dev`) et que `.env*` est bien ignoré
par Git avant de continuer.

---

## Étape 2 — Design system (tokens Tailwind)

```
En te basant sur klic-site-branding.html section "Couleur" et
"Typographie", configure le thème Tailwind (tailwind.config) avec :
- les couleurs de marque (encre, papier, brume, accent indigo) comme
  tokens nommés, pas de couleurs Tailwind par défaut utilisées ailleurs
  dans le projet
- les polices Manrope (display) et Inter (texte courant) via next/font
- une échelle typographique cohérente avec la charte
Crée ensuite un composant de démonstration temporaire (page /style-guide,
non liée dans la navigation finale) qui affiche les couleurs, les
titres et le texte courant, pour que je puisse valider visuellement
le système avant de construire les vraies pages.
```

Regarde `/style-guide` dans le navigateur. Valide ou ajuste avant de
continuer — c'est la fondation visuelle de tout le site.

---

## Étape 3 — Layout global, navigation et pied de page

```
Construis le layout global du site : en-tête avec navigation (Accueil,
Réalisations, Offres, Méthode, À propos, Contact), un CTA WhatsApp
visible en permanence (voir PRD section 13), et un pied de page avec
liens légaux (mentions-legales, politique-de-confidentialite) et
informations de contact.
Respecte l'arborescence exacte du PRD section 6 (routes en français).
Le header doit être responsive avec un menu mobile accessible au
clavier (focus visible, fermeture avec Échap).
N'utilise pas encore de vraies pages de contenu, juste des pages
placeholder pour chaque route afin de tester la navigation complète.
```

---

## Étape 4 — Page d'accueil, section par section

Construis l'accueil section par section plutôt qu'en un seul prompt — c'est
la page la plus importante du site.

```
Construis la section Hero de la page d'accueil selon le PRD section 7.
Titre, texte d'accompagnement, CTA principal ("Parler de mon projet"
vers le contact/WhatsApp) et CTA secondaire ("Voir nos réalisations").
Utilise un visuel de site professionnel en contexte africain moderne
(pas de banque d'images générique pour l'instant, un placeholder avec
légende explicite suffit — je fournirai les vraies images plus tard).
```

```
Ajoute la section "Problème" de l'accueil selon le PRD section 7.
Question centrale, liste des problèmes fréquents, CTA "Voir ce qui
peut bloquer vos conversions". Pas d'intégration Convexa — un simple
lien ou CTA suffit, cette section reste indépendante pour le MVP.
```

```
Ajoute la section "Méthode Klic" (4 piliers : Stratégie, Conversion,
Design, Technologie) selon le PRD section 7. Design éditorial, pas de
cartes SaaS génériques avec ombre — inspire-toi du système de la
charte de marque.
```

```
Ajoute la section "Avant / Après" selon le PRD section 7, qui montre
la transformation de manière visuelle et lisible sur mobile.
```

```
Ajoute la section "Réalisations" de l'accueil (3 à 6 projets) selon
le PRD section 7. Utilise des données de projets fictives mais
clairement identifiées comme temporaires (commentaire dans le code),
avec des formulations honnêtes du type "Refonte complète du site" —
jamais de chiffres inventés. Structure les données pour qu'elles
soient faciles à remplacer par du contenu réel plus tard (fichier de
données séparé, pas de contenu en dur dans le JSX).
```

---

## Étape 5 — Pages Offres et Méthode

```
Construis la page /offres selon le PRD section 11 : trois offres
(Essentiel, Conversion, Sur mesure), avec Conversion mise en avant
comme offre principale. Reprends le ton de la charte de marque —
clair, concret, sans survente, aucun prix inventé si je ne t'en donne
pas (laisse un placeholder explicite "Prix sur devis" plutôt qu'un
chiffre halluciné).
```

```
Construis la page /methode selon le PRD section 9 (les 4 étapes :
Comprendre, Structurer, Concevoir, Construire). C'est une vraie
séquence, donc la numérotation 01-04 est justifiée ici.
```

---

## Étape 6 — Réalisations et étude de cas

```
Construis la page /realisations (liste complète des projets) et le
template de page /realisations/[slug] selon le PRD sections 7 et 8.
Le template d'étude de cas doit suivre exactement la structure de la
section 8 du PRD (Contexte, Problème, Objectif, Stratégie,
Architecture, Direction artistique, Mécanismes de conversion, Écrans
clés, Implémentation technique, Résultats vérifiés, Appel à l'action).
Utilise un seul projet fictif complet comme exemple, clairement
commenté comme placeholder à remplacer.
```

---

## Étape 7 — À propos

```
Construis la page /a-propos. Ton humain et confiant, aligné avec la
personnalité de marque (charte de marque section 3). Présente Klic
Site, sa méthode de travail, et le positionnement sur l'IA défini dans
le PRD section 10 et la charte de marque section 12 — jamais de
promesse que l'IA garantit plus de ventes.
```

---

## Étape 8 — Contact, formulaire et sécurité (étape critique)

C'est l'étape la plus sensible du projet : elle touche à la collecte de
données personnelles. Prends le temps de la valider entièrement.

```
Construis la page /contact avec le formulaire décrit au PRD section 12
(Nom, Entreprise, WhatsApp/téléphone, e-mail, secteur, site actuel,
besoin, budget approximatif, délai souhaité).

Applique strictement .cursorrules section 3 :
- validation du formulaire avec un schéma typé (Zod), côté client ET
  dans la route API qui reçoit les données
- honeypot anti-spam sur le champ le moins visible
- rate limiting sur la route API de soumission
- aucune donnée sensible ou secret en dur dans le code
- messages d'erreur génériques côté client, logs détaillés uniquement
  côté serveur, jamais de stack trace exposée au visiteur

Après un envoi réussi : afficher une confirmation claire, proposer de
continuer sur WhatsApp (PRD section 13, avec message prérempli), et
indiquer un délai de réponse.

Explique-moi en une liste ce que tu as mis en place niveau sécurité
pour ce formulaire spécifiquement, pour que je puisse le vérifier
point par point.
```

Relis la réponse de l'agent ligne par ligne. Si un point de la checklist
sécurité de `.cursorrules` (section 3.4) n'est pas couvert, redemande-le
explicitement avant de passer à l'étape suivante.

---

## Étape 9 — Pages légales

```
Construis /mentions-legales et /politique-de-confidentialite. Structure
standard pour un studio web basé en Afrique francophone. Indique
clairement quelles données sont collectées via le formulaire de
contact (PRD section 12), pourquoi, et pendant combien de temps —
reste cohérent avec ce qui est réellement implémenté dans le
formulaire de l'étape 8. Je compléterai les informations juridiques
exactes (raison sociale, adresse, etc.) moi-même avant publication.
```

---

## Étape 10 — SEO

```
Implémente le SEO du site selon le PRD section 14 :
- title et meta description uniques par page, en français, sans
  bourrage de mots-clés, alignés sur les thématiques listées
- Open Graph et Twitter Card sur toutes les pages publiques
- sitemap.xml et robots.txt générés automatiquement
- données structurées JSON-LD pertinentes (Organization, et
  LocalBusiness si applicable)
- liens internes cohérents entre offres, réalisations et contact
Vérifie que les URLs respectent exactement l'arborescence du PRD
section 6.
```

---

## Étape 11 — Accessibilité

```
Fais une passe d'accessibilité complète sur tout le site selon
.cursorrules section 5 et le PRD section 18 (WCAG 2.2 AA) :
navigation clavier de bout en bout, focus visible partout, contraste
suffisant, labels de formulaire corrects, alternatives textuelles,
respect de prefers-reduced-motion. Liste-moi les corrections que tu as
apportées, page par page.
```

---

## Étape 12 — Performance

```
Fais une passe de performance selon .cursorrules section 6 et le PRD
section 15 : optimisation des images (formats modernes, dimensions
explicites), lazy loading hors premier écran, réduction du JavaScript
client (Server Components par défaut), polices optimisées via
next/font, suppression des dépendances non essentielles. Donne-moi un
résumé des changements et des points qui nécessitent encore des vraies
images/assets de ma part pour être pleinement optimisés.
```

---

## Étape 13 — Audit de sécurité final

Avant tout déploiement, fais relire l'ensemble du projet une dernière fois
avec un prompt dédié — ne te contente pas de la vérification faite étape par
étape.

```
Fais un audit de sécurité complet du projet en te basant sur
.cursorrules section 3, point par point :
1. Toutes les entrées utilisateur sont-elles validées côté client ET
   serveur ?
2. Un secret pourrait-il fuiter dans le code, les logs, ou le bundle
   envoyé au client ? Vérifie en particulier les variables NEXT_PUBLIC_.
3. Une route pourrait-elle exposer une erreur détaillée au visiteur ?
4. Le formulaire de contact est-il protégé contre le spam et les abus
   (rate limiting, honeypot) ?
5. Les en-têtes de sécurité HTTP (CSP, X-Content-Type-Options,
   Referrer-Policy, HSTS) sont-ils configurés ?
6. Le fichier .env* est-il bien absent du dépôt Git (vérifie
   l'historique, pas seulement le .gitignore actuel) ?
7. Une commande npm audit (ou équivalente) révèle-t-elle des
   vulnérabilités non résolues dans les dépendances ?
Donne-moi un rapport clair avec, pour chaque point, "conforme" ou
"à corriger" et l'action précise à mener si nécessaire.
```

Ne déploie pas tant qu'un point n'est pas explicitement "conforme".

---

## Étape 14 — Préparation au déploiement (Vercel)

```
Prépare le projet pour un déploiement sur Vercel :
- liste exhaustive des variables d'environnement à configurer sur
  Vercel (à partir de .env.example), avec une courte description de
  chacune
- vérifie que next.config contient les en-têtes de sécurité définis à
  l'étape 13
- vérifie que le build de production passe sans erreur ni warning
  bloquant (npm run build)
- rédige une checklist de mise en ligne dans un fichier
  DEPLOIEMENT.md : domaine, DNS, variables d'environnement, vérification
  post-déploiement (formulaire, WhatsApp, SEO, accessibilité mobile)
```

Configure ensuite les variables d'environnement directement dans le
dashboard Vercel (jamais dans un fichier commité), connecte le dépôt Git, et
déploie.

---

## Étape 15 — Vérification post-lancement

Une fois le site en ligne, fais une dernière passe de vérification humaine
(pas besoin de prompt agent ici) en suivant la checklist MVP du PRD section
23 :

- comprendre Klic Site en moins de 10 secondes ;
- réalisations crédibles visibles ;
- méthode et offres compréhensibles ;
- contact possible en une ou deux actions ;
- WhatsApp facile à ouvrir depuis mobile ;
- navigation mobile parfaite ;
- formulaire testé en conditions réelles (un vrai envoi de bout en bout) ;
- vérification que les pages légales sont correctes et complètes.

---

## Étape 16 (optionnelle) — Itération après lancement

```
Propose un plan d'optimisation post-lancement basé sur les métriques
définies au PRD section 20 (clics WhatsApp, clics CTA, démarrage et
envoi de formulaire, consultation des réalisations et des offres).
Ne construis rien encore, propose seulement un plan priorisé.
```

Utilise ce prompt une fois que le site a suffisamment de trafic pour avoir
des données réelles à analyser — pas avant.
