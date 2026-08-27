const { isValidEmail } = require('../src/validator');
const assert = require('assert');

assert.strictEqual(isValidEmail("user@example.com"), true, "valid email should pass");
console.log("✅ Test 1 passed: valid email accepted");

assert.strictEqual(isValidEmail("notanemail"), false, "missing @ should fail");
console.log("✅ Test 2 passed: missing @ rejected");

assert.strictEqual(isValidEmail("@example.com"), false, "missing username should fail");
console.log("✅ Test 3 passed: missing username rejected");

assert.strictEqual(isValidEmail("user@"), false, "missing domain should fail");
console.log("✅ Test 4 passed: missing domain rejected");

console.log("🎉 All tests passed!");
