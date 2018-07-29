"use strict";

const expect = require( "chai" ).expect;

const insertValues = require( "../src/insertValues" );

describe( "Custom function: insertValues", () => {
  it( "should be a function", () => {
    expect( insertValues ).to.be.a( "function" );
  });
});
