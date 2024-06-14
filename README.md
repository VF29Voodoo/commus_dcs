# Listing des Communautés DCS Francophones

Bienvenue sur le dépôt GitHub des Communautés DCS World Francophones ! Vous trouverez ici la liste des communautés francophones de DCS World, avec des informations détaillées sur chacune d'entre elles. Vous pouvez également contribuer à l'amélioration de ce site en proposant des modifications sur GitHub. Une communauté manque ? Ajoutez-la !

## Contributions

Vous pouvez contribuer à l'amélioration de ce site en proposant des modifications sur GitHub. La branche principale est `main`. Pour ajouter ou modifier une communauté, vous pouvez éditer les fichiers Markdown dans le dossier `docs/commus/`. Chaque communauté dispose d'un fichier Markdown dédié, avec des informations détaillées et des liens utiles.

Une fois votre modification terminée, vous pouvez soumettre une Pull Request sur GitHub. Votre modification sera examinée et validée par l'administrateur du site.

> Astuce : Vous pouvez utiliser un éditeur de texte Markdown pour éditer les fichiers Markdown. Vous pouvez également utiliser un éditeur de texte classique, comme Visual Studio Code, qui propose des extensions pour l'édition de fichiers Markdown.

## Procédure pour ajouter une page de communauté

Pour ajouter une page de communauté, vous devez créer un fichier Markdown dans le dossier `docs/commus/`. Le nom du fichier doit être le nom de la communauté, en minuscules et sans caractères spéciaux. Par exemple, pour la communauté "Swiss Alpine Fighters (SAF)", le nom du fichier sera `saf.md`.

Le contenu du fichier Markdown doit respecter la structure suivante :

```markdown
---
layout: doc
title: Nom de la Communauté
---

(votre contenu...)
```

Vous avez la possibilité de créer la page de la communauté avec une liberté assez importante (texte, images, liens, etc.). Vous pouvez vous inspirer des pages existantes pour créer votre propre page. Des outils comme HTML, CSS, Vue.js, etc. peuvent être utilisés pour personnaliser la mise en page de la page de la communauté.

Une fois ce fichier créé et rempli, vous pouvez ajouter une entrée au menu de navigation en éditant le fichier `.vitepress/config.mjs` et en ajoutant une entrée dans la section `Communautés` :

```javascript
text: 'Communautés',
        items: [
          { text: 'Swiss Alpine Fighters', link: '/commus/saf' },
          ...
        ]
```

## Contact

Pour toute question ou information supplémentaire, vous pouvez contacter Kerboul sur Discord (kerboul).

---