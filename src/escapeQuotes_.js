/**
 * Escapes all single quotes in string by adding an extra one
 *
 * @param {string} value The string to be processed.
 * @return The final string with all single quotes escaped
 */

function escapeQuotes_ ( value ) {
  if ( typeof value === "string" ) {
    const stringArray = value.split( "" );

    const escapedString = [];

    stringArray.forEach( function ( char ) {
      if ( char === "'" ) {
        escapedString.push( "''" );
      } else {
        escapedString.push( char );
      }
    });

    return escapedString.join( "" );
  } else if ( typeof value === "number" ) {
    return value;
  } else {
    return undefined;
  }
}

module.exports = escapeQuotes_;
