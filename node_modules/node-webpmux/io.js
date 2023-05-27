let fs = {};
if (typeof window === 'undefined') {
  const _fs = require('fs');
  const { promisify } = require('util');
  const { basename } = require('path');
  fs = {
    read: promisify(_fs.read),
    write: promisify(_fs.write),
    open: promisify(_fs.open),
    close: promisify(_fs.close),
    basename,
    avail: true
  };
} else {
  let f = async () => { throw new Error('Running inside a browser; filesystem support is not available'); };
  fs = {
    read: f,
    write: f,
    open: f,
    close: f,
    basename: f,
    err: f,
    avail: false
  };
}
module.exports = fs;
