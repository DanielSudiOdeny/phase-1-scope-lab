var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(customerName) {
  bestCustomer = customerName;
}

const leastFavoriteCustomer = "Daniel";

function changeLeastFavoriteCustomer() {
  return (leastFavoriteCustomer = "Bob");
}
