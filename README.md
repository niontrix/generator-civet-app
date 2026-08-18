# generator-civet-app [![NPM version][npm-image]][npm-url] [![Build Status][github-badge]][github-url]
> A Yeoman generator to scaffold projects for Civet (https://civet.dev).

## Installation

First, install [Yeoman](http://yeoman.io) and generator-civet-app using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-civet-app
```

Then generate your new project:

```bash
yo civet-app
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

 
## Project Types

* bun

* esbuild

* farm

* rolldown

* rollup

* vite  
  (Note: The debug configuration is a bit more involved in this case, so that everything can be properly started and stopped and doesn't remain as a zombie process. Have a look at the files in .vscode and scripts to see what's going on.)

* vite-lib  
  (Note: The debug configuration is a bit more involved in this case, so that everything can be properly started and stopped and doesn't remain as a zombie process. Have a look at the files in .vscode and scripts to see what's going on.)

* webpack


 ## TODO

 - TypeScript <7.0.0 as DevDependency can be removed once Civet and it's plugins are adjusted to the breaking changes in TypeScript >=7.0.0
 - Set all project versions to 0.0.1
 - Create more robust test for dependencies
 - Check if vite debug configurations really need to be that complicated


[npm-image]: https://badge.fury.io/js/generator-civet-app.svg
[npm-url]: https://npmjs.org/package/generator-civet-app
[github-badge]: https://github.com/niontrix/generator-civet-app/actions/workflows/nodejs.yml/badge.svg?branch=master
[github-url]: https://github.com/niontrix/generator-civet-app/actions/workflows/nodejs.yml
