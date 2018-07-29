/**
 * Sums upp all values in an array and returns
 *
 * @param {array} values The values to be processed.
 * @return The summed up values
 */




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



/**
 * Returns the input as an insert value for use with SQL insert (...)
 *
 * @param {array} input The values to be processed.
 * @return A processed string, ready to use
 * @customfunction
 */




function insertValues ( input ) {
  const niceInput = makeArray_( input );

  return concatValues_( niceInput );
}



/**
 * Returns the input as a single aray
 *
 * @param {any} input The values to be processed.
 * @return A nice, clean one-dimensional array
 */

function makeArray_ ( input ) {
  if ( typeof input === "string" ) {
    return [input];
  } else if ( Array.isArray( input ) ) {
    return input.reduce( function ( acc, curr ) {
      return acc.concat( curr );
    }, [] );
  }

  return undefined;
}



/**
 * Cleans a string of any line breaks, trims it and removes duplicate spaces
 *
 * @param {string} input The values to be processed.
 * @return The cleaned string
 */

function removeLineBreaks_ ( input ) {
  if ( typeof input === "string" ) {
    return input
      .trim()
      .replace( /(\r\n\t|\n|\r\t)/gm, " " )
      .replace( / {2,}/g, " " );
  } else {
    return input;
  }
}


