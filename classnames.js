const {stringifyRequest} = require('loader-utils');

module.exports = function() {};

// loader for classnames auto bind
module.exports.pitch = function(remainingRequest) {
  if (this.cacheable) {
    this.cacheable();
  }

  const stylePath = stringifyRequest(this, '!' + remainingRequest);
  const classNamesPath = stringifyRequest(
    this,
    '!' + require.resolve('classnames')
  );
  const classNamesBindPath = stringifyRequest(
    this,
    '!' + require.resolve('classnames/bind')
  );

  return `
    var style = require(${stylePath});
    var classNames = require(${classNamesPath});
    var classNamesBind = require(${classNamesBindPath});
    var cx = classNamesBind.bind(style);

    Object.defineProperty(exports, "__esModule", { value: true });
    exports.style = style
    exports.classNames = exports.cn = classNames;
    exports.default = exports.classNamesBind = exports.cx = cx;
  `;
};
