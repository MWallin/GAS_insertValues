/**
 * Sums upp all values in an array and returns
 *
 * @param {array} values The values to be processed.
 * @return The summed up values
 */

const escapeQuotes_ = require( "../src/escapeQuotes_" );
const removeLineBreaks_ = require( "../src/removeLineBreaks_" );

function concatValues_ ( values ) {
  const length = values.length;

  if ( length === 1 ) {
    return "('" + values[0] + "'),";
  }

  const result = values.reduce( function ( acc, curr, index ) {
    const fixedValue = removeLineBreaks_( escapeQuotes_( curr ) );

    // First value
    if ( index === 0 ) {
      return acc + "('" + fixedValue + "', ";
      // Last value
    } else if ( index === length - 1 ) {
      return acc + "'" + fixedValue + "'),";
      // Every other value
    } else {
      return acc + "'" + fixedValue + "', ";
    }
  }, "" );

  return result;
}

module.exports = concatValues_;
