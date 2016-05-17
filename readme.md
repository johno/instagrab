# instagrab [![Build Status](https://secure.travis-ci.org/johnotander/instagrab.png?branch=master)](https://travis-ci.org/johnotander/instagrab) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

__Work in progress__

Grab images from instagram

## Installation

```bash
npm install --save instagrab
```

## Usage

```javascript
const instagrab = require('instagrab')

instagrab('awesome', imgIds => {
  console.log(imgIds)
})
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
