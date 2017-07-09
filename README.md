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

After installing, do:

```javascript
const statestes = require('statestes');
```

### Install using `yarn`:

```shell
yarn add statestes
```

After installing, do:

```javascript
const statestes = require('statestes');
```

### Install using the built library.

Copy `statestes.min.js` from `dist/statestes.min.js`.

### Include using CDN

Coming soon.

## Developing

### Built With
This project has no dependencies.

### Prerequisites
The dev prerequisites for this project are:

- Babel
- Fusebox
- Jest

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
4.

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
