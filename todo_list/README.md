Todo list
=========


## Contexte ##

Le but du projet est réaliser une application de TODO list sous la forme d'une "single page application". Le client vous met à disposition un webservice que vous pouvez exploiter afin de lister, d'ajouter, de mettre à jour ou encore de supprimer vos éléments.

Votre partie du travail consiste à réaliser l'interface suivante.

![](http://img4.hostingpics.net/pics/979595todolist.png)

## Spécifications ##

La première partie de la page (**New todo**) comporte un formulaire permettant d'ajouter une nouvelle Todo.
Une clic sur le bouton Add doit, dans un premier temps, envoyer une requête au webservice afin d'ajouter cette nouvelle entrée. Puis ajouter une nouvelle ligne dans le tableau de la deuxième partie de la page (**To do** ).

Dans cette deuxième partie, il est possible de supprimer une Todo en cliquant sur le bouton Delete. Au clic sur ce bouton, vous devez envoyer la requête au webservice permettant de supprimer cette Todo de la base de données, puis supprimer cette entrée du tableau HTML.

Enfin au clic sur l'icon state, la Todo doit être "checked out" et passée automatiquement dans la troisième et dernière partie de la page (**Done**).

L'ensemble de ces actions s'effectuer **sans rechargement de la page**. Vous aurez donc besoin d'utiliser **Ajax** pour communiquer avec le webservice.

## Le webservice ##

Vous devez installer le webservice en clonant le repository suivante : 
`http://git.aubm.net/kendo5731/todos-webservice`

L'application met à disposition une ressource associée à des actions CRUD (Create, Read, Update, Delete).

**Créer une Todo**

>POST /todos

Form-Data :

`content` : String

**Afficher une Todo**

>GET /todos/:id

**Lister des Todos**

>GET /todos

**"Checker" une Todo**

>POST /todos/:id

Form-Data :

`checkout` : Boolean

**Supprimer une Todo**

>POST /todos/:id/delete

Une collection postman au format JSON est disponible dans ce repository pour tester directement le webservice indépendamment de l'application client.

