const { add, multiply } = require('../calculator');
const assert = require('assert');

// Test 1
assert.strictEqual(add(2, 3), 5, "add(2,3) should be 5");
console.log("✅ Test 1 passed: add(2,3) = 5");

// Test 2
assert.strictEqual(add(10, 5), 15, "add(10,5) should be 15");
console.log("✅ Test 2 passed: add(10,5) = 15");

// Test 3
assert.strictEqual(multiply(4, 3), 12, "multiply(4,3) should be 12");
console.log("✅ Test 3 passed: multiply(4,3) = 12");

console.log("🎉 All tests passed!");
