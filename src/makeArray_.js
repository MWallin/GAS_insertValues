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

module.exports = makeArray_;
