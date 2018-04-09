# basic

A basic example with legacy environments

- Node.js: v6.11.5
- typescript: v2.1.6
- webpack: v1.14.0
- classnames: v2.2.0
- css-loader: v0.26.0
- style-loader: v0.18.0

## how to run

```
npm i

npm run build
```

and open `index.html` in your browser.

## build system

(same with basic example)

- TypeScript
  - build index.ts to index.js with `tsc` command
  - NOTE: it may be necessary to prepare type of css-modules for the initial build of *.css.d.ts
- JavaScript
  - set `index.js` built by tsc as an entry point of webpack
- css
  - css-loader
  - typed-classnames-loader/type
  - style-loader
  - typed-classnames-loader/classnames
  - classnames
