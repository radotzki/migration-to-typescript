# Quick Migration to TypeScript
This repository created for the 'Convert Your Project to TypeScript Fast' talk at boostjs conference.<br>
The slides are available online [here](http://slides.com/itayradotzki/typescript-migration).

## Step 1 - build process:
- `> npm install -D typescript awesome-typescript-loader`
- add .ts as a resolvable extension.
- add .ts loader
- `> tsc --init`
- add "allowJs": true

## Step 2 - ES6 modules:
- replace require() with import
- replace module.exports with export
- do it only to {.js, .ts, .json} files!

## Step 3 - Typings:
- `> npm install -g typings`
- `> typings install angular jquery node -S -A`
- create interfaces for your models
- add typings to variables and functions

## How to run this project
```console
git clone https://github.com/radotzki/migration-to-typescript.git
npm install
npm start
```