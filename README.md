# crypt-equals

Compares two strings/buffers using the same time whether they're equal or not.

This function is useful to mitigate timing attacks; for instance, when testing `crypto` password hashes.

*Note*: Both arguments must be of the same length to be compared successfully. 
When arguments of differing length are supplied, `false` is returned immediately and the length of the known string may be leaked in case of a timing attack.
But in most cases size and algorithm choice are not secret.


### Install

```sh
npm i -S crypt-equals
```


### Usage

```js
const cryptEq = require('crypt-equals');

const hash1 = 'LVYtSUvPsB7BRR3m6T5DXKLD-fTsb7K5tu1-bt1QjT8';
const hash2 = 'LVYtSUvPsB7BRR3m6T5DXKLD-fTsb7K5tu1-bt1QjT8';

if (cryptEq(hash1, hash2)) {
    console.log('equal hashes');
} else {
    console.log('not equal hashes');
}

// Supports Buffer as well
const buf1 = Buffer.from(hash1);
const buf2 = Buffer.from(hash2);

if (cryptEq(buf1, buf2)) {
    console.log('equal buffers');
} else {
    console.log('not equal buffers');
}

```
