# Installation
```shell
npm install
```
# Lancer le serveur local
```shell
npm start -o
```
# Concepts 
L'idée de ce mini framework est de mettre en place un système qui permettra d'afficher des éléments du DOM, par exemple, une liste de tâche (Todolist) en mettant en place les concepts suivants :
- L'application est constituée de "composants"
- Chaque composant hérite de la classe "Component" qui a pour unique méthode createMarkup qui permet de créer des éléments du DOM (HTMLElement)
- Au départ un tableaux de tâches (tasks) est fourni pour pouvoir créer une première Todolist qui affichera simplement les tâches (title et id) via la méthode render des composants
- Ensuite, un "service" devra être mis en place (pattern singleton) afin d'emettre des valeurs chaque fois que le tableau "tasks" sera modifié (ajout, suppression, modification).
  On utilisera pour ce service BehaviorSubject qui :
  - Stocke la dernière valeur émise
  - Nécessite une valeur initiale à sa création
  - renvoie immédiatement aux nouveaux abonnés la dernière valeur émise
  - donne accès à la valeur courante via getValue()
- Le composant Todolist 
  - s'abonnera à ce service pour recevoir les notifications (next, error, complete) qui renverront le tableau tasks modifier et reconstruira toute l'interface (éléments du DOM) à partir de ce nouveau tableau
  - initialisera le service avec le tableau initialTasks (this.taskService.setTasks(initialTasks);)
# Intallation initiale
Cette application a été créée en suivant les étapes suivantes :
## 1 créer un répertoire "myApp" par exemple et placez vous sur ce répertoire
## 2 installer les dépendances
```shell
npm install --save-dev typescript webpack webpack-cli rxjs html-webpack-plugin ts-loader webpack-dev-server sass sass-loader css-loader style-loader
```
## 3 Crére le fichier  tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ]
}
```

## 4 Créer le fichier webpack.config.js
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devServer: { open: true },
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({ template: __dirname + '/src/index.html' })],
};
```
## 5 Créer le répertoire src et placez à l'intérieur les fichiers index.html et index.ts
## 6 modifier le fichier package.json
```json
{
  "name": "templaterxjstswebpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server",
    "build": "NODE_ENV=production webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^7.1.2",
    "html-webpack-plugin": "^5.5.3",
    "rxjs": "^7.8.1",
    "sass": "^1.82.0",
    "sass-loader": "^16.0.4",
    "style-loader": "^4.0.0",
    "ts-loader": "^9.5.1",
    "typescript": "^5.3.2",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  }
}

```

