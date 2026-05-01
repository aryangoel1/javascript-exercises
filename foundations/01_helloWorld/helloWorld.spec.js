const helloWorld = require('./helloWorld');

describe('Hello World', function() { // body of test to test if the output is correct
  test('says "Hello, World!"', function() { // test function describes what should happen in plain english
    expect(helloWorld()).toEqual('Hello, World!'); // expected output
  });
});
