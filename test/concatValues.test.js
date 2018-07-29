"use strict";

const expect = require( "chai" ).expect;

const concatValues_ = require( "../src/concatValues_" );

describe( "Custom function: concatValues_", () => {
  it( "should be a function", () => {
    expect( concatValues_ ).to.be.a( "function" );
  });

  it( "should concat an array of strings with separator", () => {
    const result = concatValues_( ["This", "is:", "3"] );

    expect( result ).to.equal( "('This', 'is:', '3')," );
  });

  it( "should concat mixed values #1", () => {
    const result = concatValues_( [61, "AO från entreprenör"] );

    expect( result ).to.equal( "('61', 'AO från entreprenör')," );
  });

  it( "should concat mixed values #2", () => {
    const result = concatValues_( [
      "AO från entreprenör",
      "SELECT COUNT(*) FROM FU WHERE FU_ORGIN = 4 AND FU_STATUS = 'REG'"
    ] );

    expect( result ).to.equal(
      "('AO från entreprenör', 'SELECT COUNT(*) FROM FU WHERE FU_ORGIN = 4 AND FU_STATUS = ''REG'''),"
    );
  });

  it( "should concat array with only one value correct", () => {
    const result = concatValues_( ["AO från entreprenör"] );

    expect( result ).to.equal( "('AO från entreprenör')" );
  });
});
