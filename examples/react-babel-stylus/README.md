# react-babel-stylus

An example with stylus, React and @babel/preset-typescript.

## how to run

```
npm i

npm run build
```

and open `index.html` in your browser.

In this example, for type-checking use plugins of your editor (Atom, VSCode etc) or execute tsc command:

```
npm run tsc
```

## build system

- TypeScript
  - build index.js from *.tsx by @babel/preset-typescript (ignore type-checking)
  - if you want to check type manually, use `tsc`.
- css
  - stylus-loader
  - postcss-loader with autoprefixer
  - css-loader
  - typed-classnames-loader/type
  - style-loader
  - typed-classnames-loader/classnames
  - classnames
- view
  - React
