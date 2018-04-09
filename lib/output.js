const fs = require('fs');

/**
 * write a file if changed
 * @param {string} filePath
 * @param {string} content
 * @param {function} callback
 */
module.exports = function(filePath, content, callback) {
  checkIsChanged(filePath, content, (err, isChanged) => {
    if (err) {
      return callback(err);
    } else if (!isChanged) {
      return callback(null, false);
    }
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        return callback(err);
      }

      callback(null, true);
    });
  });
};

/**
 * call callback with true if should overwrite
 * @param {string} filePath
 * @param {string} content
 * @param {function} callback
 */
function checkIsChanged(filePath, content, callback) {
  const exists = fs.existsSync(filePath);
  if (!exists) {
    callback(null, true);
    return;
  }

  fs.readFile(filePath, 'utf8', (err, original) => {
    original = original.toString();
    if (err) {
      callback(err);
    } else if (original !== content) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  });
}
