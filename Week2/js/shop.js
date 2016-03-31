var products = [
    "Brooklyn T-Shirt White",
    "Brooklyn T-Shirt Black",
    "Apple Watch",
    "Android Phone"
];
var prices = [10, 10, 199, 159]

var productsText = "";
var productsElement = document.getElementById("product-list");

productsText += "<li class='list-group-item'><span class='badge'>$" + prices[0] + "</span>" + products[0] + "</li>";
productsText += "<li class='list-group-item'><span class='badge'>$" + prices[1] + "</span>" + products[1] + "</li>";
productsText += "<li class='list-group-item'><span class='badge'>$" + prices[2] + "</span>" + products[2] + "</li>";
productsText += "<li class='list-group-item'><span class='badge'>$" + prices[3] + "</span>" + products[3] + "</li>";
productsElement.innerHTML = productsText;

var customerName = "Angelina"
var price = 10;
var quantity = 2;
var total = prices[0] + prices[1] + prices[2] + prices[3];
var totalPrice = total * 0.75;

var totalPriceElement = document.getElementById("total-price")
totalPriceElement.textContent = totalPrice;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;

var time = new Date().getHours();
var greeting;
if (time < 12) {
    greeting = "Good morning";
} else if (time < 18) {
    greeting = "Good afternoon"
} else {
    greeting = "Good evening";
}
var greetingElement = document.getElementById("hello-word")
greetingElement.textContent = greeting;
