const ast = require('ast-query');

/**
 * generate type code for xxxx.d.ts
 * @param {object} params
 * @param {string} params.source - result code of css-loader
 * @return {string | null}
 */
module.exports = function(params) {
  const {source, options} = params;

  let classNames;
  try {
    classNames = parseClassNames(source);
  } catch (e) {
    throw new Error(
      'Parsing class name failed: Is `modules` option of css-loader enabled?'
    );
  }
  if (!classNames.length) {
    return null;
  }

  return template(classNames, options);
};

/**
 * parse list of classNames from result code of css-loader
 * @param {string} source - result code of css-loader
 * @return {string[]}
 */
function parseClassNames(source) {
  const tree = ast(source);
  const assignment = tree.assignment && tree.assignment('exports.locals');
  const value = assignment && assignment.value && assignment.value();
  const node = value && value.node;
  const properties = node && node.properties || [];
  const classNames = [];
  properties.forEach((property) => {
    let className = property.key && property.key.value;
    if (className && classNames.indexOf(className) < 0) {
      if (!/^[$_a-zA-Z][0-9a-zA-Z$_]*$/.test(className)) {
        className = `'${className}'`;
      }
      classNames.push(className);
    }
  });
  return classNames;
}

/**
 * generate type code from list of classNames
 * @param {string[]} classNames list of classNames
 * @param {object} options
 * @return {string}
 */
function template(classNames, options) {
  const {
    indentSize,
    indentType,
    template: templateFunc,
    banner,
  } = options || {};

  const indent = new Array(indentSize + 1).join({
    space: ' ',
    tab: '\t',
  }[indentType]);

  let result = `
interface Style {
${classNames.map((className) => `  ${className}: string;`).join('\n')}
}

declare namespace ClassNames {
  type DictionaryValue = boolean | undefined | null;
  interface Dictionary {
    [id: string]: DictionaryValue;
  }
  type Value = string | Dictionary | Values | null | undefined;
  interface Values extends Array<Value> {}
  type Fn = (...classes: Value[]) => string;
}

declare namespace ClassNamesBind {
  type Names = keyof Style;
  type DictionaryValue = boolean | undefined | null;
  type Dictionary = {
    [key in Names]?: DictionaryValue;
  };
  type Value = Names | Dictionary | Values | null | undefined;
  interface Values extends Array<Value> {}
  type Fn = (...classes: Value[]) => string;
}

export declare const style: Style;
export declare const classNames: ClassNames.Fn;
export declare const classNamesBind: ClassNamesBind.Fn;
export declare const cn: typeof classNames;
export declare const cx: typeof classNamesBind;

export default cx;
  `.trim().replace(/  /g, indent) + '\n';

  if (templateFunc) {
    result = templateFunc(classNames, result);
  }

  if (banner) {
    result = `${banner}\n${result}`;
  }

  return result;
}
