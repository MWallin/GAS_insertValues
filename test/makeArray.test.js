"use strict";

const expect = require( "chai" ).expect;

const makeArray_ = require( "../src/makeArray_" );

describe( "Custom function: makeArray_", () => {
  it( "should be a function", () => {
    expect( makeArray_ ).to.be.a( "function" );
  });

  it( "should return string as an array", () => {
    const result = makeArray_( "FU_STATUS = 4" );

    expect( result ).to.eql( ["FU_STATUS = 4"] );
  });

  it( "should return array of arrays as an array #1", () => {
    const result = makeArray_( [
      [61, "AO från entrepenör", "SELECT COUNT(*) FROM FU WHERE FU_ORGIN = 4 AND FU_STATUS = 'REG'"]
    ] );

    expect( result ).to.eql( [
      61,
      "AO från entrepenör",
      "SELECT COUNT(*) FROM FU WHERE FU_ORGIN = 4 AND FU_STATUS = 'REG'"
    ] );
  });

  it( "should return array of arrays as an array #2", () => {
    const result = makeArray_( [
      ["AO från entrepenör"],
      ["AO från entrepenör"],
      [""],
      ["SELECT COUNT(*) FROM FU WHERE FU_ORGIN = 4 AND FU_STATUS = 'REG'"]
    ] );

    expect( result ).to.eql( [
      "AO från entrepenör",
      "AO från entrepenör",
      "",
      "SELECT COUNT(*) FROM FU WHERE FU_ORGIN = 4 AND FU_STATUS = 'REG'"
    ] );
  });
});


// Raw example data
// arguments[0] = [[61,"AO från entrepenör","SELECT COUNT(*) FROM FU WHERE FU_ORGIN = 4 AND FU_STATUS = 'REG'"]]
// arguments[0] = [["AO från entrepenör"],["AO från entrepenör"],[""],["SELECT COUNT(*) FROM FU WHERE FU_ORGIN = 4 AND FU_STATUS = 'REG'"]]
// arguments[0] = "AO från entrepenör"
