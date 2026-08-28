// Email validator - has a bug!
function isValidEmail(email) {
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || !domain) return false;
  if (!domain.includes('.')) return false;
  return true;
}

module.exports = { isValidEmail };
