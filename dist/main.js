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


