/**
 * Returns the input as an insert value for use with SQL insert (...)
 *
 * @param {array} input The values to be processed.
 * @return A processed string, ready to use
 * @customfunction
 */

const concatValues_ = require( "../src/concatValues_" );
const makeArray_ = require( "../src/makeArray_" );

function insertValues ( input ) {
  const niceInput = makeArray_( input );

  return concatValues_( niceInput );
}

module.exports = insertValues;
