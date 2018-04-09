const {getOptions} = require('loader-utils');
const generateType = require('./lib/generateType');
const output = require('./lib/output');

// loader for d.ts auto generation
module.exports = function(source, map) {
  if (this.cacheable) {
    this.cacheable();
  }
  const {resourcePath} = this;
  this.addDependency(resourcePath);

  const callback = this.async();

  const {indent, template, banner} = getOptions(this) || {};

  let indentSize = 2;
  let indentType = 'space';

  if (indent) {
    if (['space', 'tab'].indexOf(indent.type) > -1) {
      indentType = indent.type;
    }

    if (indent.size != null) {
      indentSize = indent.size;
    } else if (indentType === 'tab') {
      indentSize = 1;
    }
  }

  const type = generateType({
    source,
    options: {
      indentSize,
      indentType,
      template,
      banner,
    },
  });

  if (!type) {
    callback(null, source, map);
  }

  const filePath = `${resourcePath}.d.ts`;
  output(filePath, type, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, source, map);
    }
  });
};
