# basic

A basic example with minimal requirements.

## how to run

```
npm i

npm run build
```

and open `index.html` in your browser.

## build system

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
