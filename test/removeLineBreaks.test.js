"use strict";

const expect = require( "chai" ).expect;

const removeLineBreaks_ = require( "../src/removeLineBreaks_" );

describe( "Custom function: removeLineBreaks_", () => {
  it( "should be a function", () => {
    expect( removeLineBreaks_ ).to.be.a( "function" );
  });

  it( "Should return input without line breaks #1", () => {
    const result = removeLineBreaks_(
      `Detta
är
ett test`
    );

    expect( result ).to.equal( "Detta är ett test" );
  });

  it( "Should trim start and end", () => {
    const result = removeLineBreaks_( "           Detta  " );

    expect( result ).to.equal( "Detta" );
  });

  it( "Should replace multi space [      ] with space [ ]", () => {
    const result = removeLineBreaks_( "           Detta      är  " );

    expect( result ).to.equal( "Detta är" );
  });

  it( "Should return input trimmed and without line breaks", () => {
    const result = removeLineBreaks_(
      `        SELECT COUNT(*)
FROM FU
WHERE
FU_ORGIN = 4 AND FU_STATUS = ''REG''`
    );

    expect( result ).to.equal( "SELECT COUNT(*) FROM FU WHERE FU_ORGIN = 4 AND FU_STATUS = ''REG''" );
  });
});
