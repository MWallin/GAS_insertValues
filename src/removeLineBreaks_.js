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

module.exports = removeLineBreaks_;
