# statestes
> Statistics for n00bs. Tastefully done. You're welcome.

A simple Javascript library for statistical analysis

[![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)

[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-resentment.svg)](http://forthebadge.com)

## Installing / Getting started

### Install using `npm`:

```shell
npm install statestes
```

#### Import in code

```javascript
var statestes = require('statestes');
```

### Install using `yarn`:

```shell
yarn add statestes
```

#### Import in code

```javascript
var statestes = require('statestes');
```

### Install using the built library.

Copy `statestes.min.js` from `dist/statestes.min.js` to a `lib` folder.

#### Import in code
```html
<script src="lib/statestes.min.js"></script>
```

This will expose a `statestes` variable which you can access the functions from.

### Include using CDN

Coming soon.

### Using a function in the library:

Just reference a function using the dot notation.
For example, to use the `sum` function, you can do:

```javascript
  statestes.sum([1, 2, 3]); // 6
```

## Developing

### Built With
This project has no dependencies.

### Prerequisites
The dev prerequisites for this project are:

- [Babel](https://babeljs.io/) - for transpiling ES6 to ES5 code.
- [Fusebox](http://fuse-box.org/) - a faster and simpler module bundler.
- [Jest](https://facebook.github.io/jest/) - Facebook's testing framework.

### Setting up Dev

To start developing, run:

```shell
git clone https://github.com/johnpaulada/statestes.git
cd your-project/
yarn
```

This will:
1. Clone the project
2. Get you into the project
3. Install the dev dependencies

### Building

To build the project, run:

```shell
npm start
```

This command will build the code to `dist/statestes.min.js`.
Each change to the code will rebuild the code.

## Versioning

- 0.1.0 - Implemented paired samples t-test
- 0.1.1 - Update README

## Tests

I use Jest to test this library. To run the tests, run:

```shell
npm test
```

These tests test the main statistical functions.

## Licensing
MIT
