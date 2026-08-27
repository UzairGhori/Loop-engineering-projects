// TODO: input validation add karo
function processOrder(order) {
  return order.total * 1.1;
}

// TODO: error handling missing hai
function fetchUser(id) {
  return database.get(id);
}

function calculateTax(amount) {
  return amount * 0.15;
}

// TODO: logging add karo is function mein
function sendNotification(msg) {
  console.log(msg);
}
