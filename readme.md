# noop-server 

> Launch a noop server on a free port. Useful for testing.

[![Build Status](https://travis-ci.org/radiovisual/noop-server.svg?branch=master)](https://travis-ci.org/radiovisual/noop-server)

**Note**: This is very much a work in progress. Use at your own risk.

## Install

```
$ npm install --save noop-server
```


## Usage

```js
const noopServer = require('noop-server');

noopServer().then(info => {
    console.log(info);
});
//=> {port: 8009, pid:15142}
```


## API

### noopServer()

Starts the noop server on a free port. Returns and object with the port and pid.

## CLI

```
$ npm install --global noop-server
```

## CLI Useage
```
$ noop-server 
noop-server port: 8009
noop-server pid: 15182
```

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
