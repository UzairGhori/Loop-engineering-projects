// Email validator - has a bug!
function isValidEmail(email) {
  // BUG: yeh sirf "@" check karta hai, poori validation nahi
  return email.includes("@");
}

module.exports = { isValidEmail };
