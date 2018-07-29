"use strict";

const expect = require( "chai" ).expect;

const escapeQuotes_ = require( "../src/escapeQuotes_" );

describe( "Custom function: escapeQuotes_", () => {
  it( "should be a function", () => {
    expect( escapeQuotes_ ).to.be.a( "function" );
  });

  it( "should make [FU_STATUS = 'REG'] into  [FU_STATUS = ''REG''] ", () => {
    const result = escapeQuotes_( "FU_STATUS = 'REG'" );

    expect( result ).to.equal( "FU_STATUS = ''REG''" );
  });

  it( "should return original string if no single quotes", () => {
    const result = escapeQuotes_( "FU_ORGIN = 4" );

    expect( result ).to.equal( "FU_ORGIN = 4" );
  });

  it( "should return numbers as is", () => {
    const result = escapeQuotes_( 4 );

    expect( result ).to.equal( 4 );
  });

  it( "should return undefined if not a string", () => {
    const result = escapeQuotes_( [] );

    expect( result ).to.be.undefined;
  });
});
