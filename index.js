const {getOptions} = require('loader-utils');
const type = require('./type');
const classnames = require('./classnames');

module.exports = function(source, map) {
  const {mode} = getOptions(this) || {};
  if (mode !== 'classnames') {
    return;
  }
  return type.call(this, source, map);
};

module.exports.pitch = function(remainingRequest) {
  const {mode} = getOptions(this) || {};
  if (mode !== 'type') {
    return;
  }
  return classnames.pitch.call(this, remainingRequest);
};
