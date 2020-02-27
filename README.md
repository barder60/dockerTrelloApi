# API
Nous avons choisie de travailler avec une apiRest nodejs pour raison de simplicité et d'apprentissage.
Nous avons également choisie mongoose qui est basé sur mongodb qui est un SGBD NoSQL, nous l'avons choisie pour des raison d'apprentissage et de facilité de conpatibilité avec nodeJs.

## Installation
### recupérer le repertoire api
```
git clone https://github.com/barder60/dockerTrelloApi.git
cd api ````
## Contribuer
## Déploiement
Puis via docker :
``` docker-compose up --build ```

Aprés l'installation de la BDD et du server :
``` docker container ls ```
Copier coller l'id du container de mongo :
puis écrire :
```docker exec -ti <id du container> bash````
Ensuite préparer la BDD:
``` mongo
use trello 
exit 
exit```
