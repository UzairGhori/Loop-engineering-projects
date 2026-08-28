function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+$/.test(email);
}

module.exports = { isValidEmail };
