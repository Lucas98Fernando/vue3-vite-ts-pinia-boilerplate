# Boilterplate Vue 3 + Typescript + Vite + Pinia

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## :hammer: Configured development tools:

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/) - [Prettier](https://prettier.io/)

## Unit tests tools

- [Jest](https://jestjs.io/)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## :rocket: How to get started ?

### :one: Clone the repository

**HTTPS**
```
git clone https://github.com/Lucas98Fernando/vue3-vite-ts-pinia-boilerplate.git
```

**SSH**
```
git clone git@github.com:Lucas98Fernando/vue3-vite-ts-pinia-boilerplate.git
```

### :two: Install dependencies

**NPM**
```
npm install
```
or only:
```
npm i
```

**YARN**
```
yarn install
```
or only:
```
yarn
```

### :three: Compilation and HMR for development with Vite

**NPM**
```
npm run dev
```

**YARN**
```
yarn dev
```

- **Perfect!** :white_check_mark: If you followed the previous steps correctly, the application will be running by default on: [http://localhost:3000](http://localhost:3000)

### :four: Compile and minify for production

**NPM**
```
npm run build
```

**YARN**
```
yarn build
```

### :five: Lints and fix files

**NPM**
```
npm run lint
```

**YARN**
```
yarn lint
```
