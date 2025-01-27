# Cyberun challenge

MARTIN CONNOR SEXTON

## Description

### Summary 
- I completed the various steps of the challenge as outlined in the original instructions (pasted at the bottom of this README.md]).

- I created a repository on Github for the project: https://github.com/ConCapbreton/Cyberun-Challenge

- I pushed to this repository after completing each step of the instructions using detailed Commit messages for easy reference.

- The project is hosted online at https://cyberunchallenge.netlify.app/

### Install and Run the Project
- Clone the Git repository into your IDE or download the zip folder of the project and open the extracted folder in your IDE. 

- Open the terminal and ensure that you are in the parent folder of the project where the highest level package.json is located.

- In the terminal send the following commands:

- Install dependencies
  ```bash
  npm install 
  ```

- Start the app
  ```bash
  npm run dev
  ```

- If the app does not open directly in your browser you can copy the link provided by VITE in the terminal and paste it into the url of your browser. 

### Challenges
- This was my first time working with the the jsonforms.io library

- I did not use a Pro Layout component (https://procomponents.ant.design/components/layout) instead opting for the Ants Design Layout Component. 

- I need more information regarding the instruction "Précision concernant jsonforms : même si d'aitres solutions sont possible, vous DEVEZ ici pour cela besoin de définir des customs components inspirés de https://github.com/eclipsesource/jsonforms/tree/master/packages/vanilla-renderers/src/complex/categorization"

## How to Use the Project

#### In your browser navigate to https://cyberunchallenge.netlify.app/
- Under the title on the left of the page are two buttons; "BASIC INFORMATION" and "SECOND FORM"
- Clicking on either button will open the drawer, which appears from the right side of the screen that includes all of the respective form information. 

#### "BASIC INFORMATION" form
- Upon clicking the "BASIC INFORMATION" button the form opens to the right of the screen showing the title and a list of the available categories in the blue header at the top. 
- The "BASIC" category is always available.
- The "ADDRESS" and "VEGETARIAN" categories are only available if you select the "Provde Address" or "Vegetarian" checkboxes in the BASIC category. 
- You can click on the category name shown in the blue header to navigate between the available categories of the form.   

#### "SECOND FORM" form
- Upon clicking the "SECOND FORM" button the form opens to the right of the screen showing the title and the two subcategories listed underneath ("Subcategory 1" and "Subcategory 2"). 

#### Github link
- There is a link in the footer of the page that opens the Github repository for the project in a new tab.

## Original Instructions

En se basant sur une application React et en utilisant la librairie jsonforms.io (en typescript) et les composants Ant Design:
En supposant que vous disposez d'un schema, d'un schéma UI et de data json (vous pouvez mettre ceux-ci statiquement dans votre code), vous avez créé 3 catégories (des onglets) et quelques champs de formulaire : Il vous suffit pour cela de vous baser sur le 1er exemple de la page https://jsonforms.io/examples/categorization/

A oartir de cette étape initiale, l'idée est de remplacer les onglets situés en haut par un drawer situé à gauche
On utilisera pour cela les composants de Ant Design (https://ant.design/) et en particulier le composant https://ant.design/components/drawer
Si cela vous arrange, vous pouvez utiliser un Pro Layout (https://procomponents.ant.design/components/layout - la page démo en chinois permet de voir immédiatement à quoi ressemble le drawer)
quand on clic sur l'un des éléments du drawer, on affiche le formulaire correspondant dans la zone de droite.
comme l'objectif est que cela soit générique et non hard-codé, vous créerez un second set de schema/ui/data légèrement différent du 1er qui contient cette fois 2 catégories.
au final, le drawer contiendra : un titre + 3 sous catégories affichant les formulaires du premier set, puis un second titre + 2 sous catégories pour afficher les formulaires du second set
Précision concernant jsonforms : même si d'aitres solutions sont possible, vous DEVEZ ici pour cela besoin de définir des customs components inspirés de https://github.com/eclipsesource/jsonforms/tree/master/packages/vanilla-renderers/src/complex/categorization
Moyen d'évaluation :
envoyez  le lien permettant de consulter votre site (en nous donnant également accès au source)
vous pouvez par exemple le publier via codesandbox.io ou n'importe quelle autre solution de votre choix vu qu'il s'agit d'un site statique (pas de techno côté serveur).