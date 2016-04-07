// var products = [
//     "Brooklyn T-Shirt White",
//     "Brooklyn T-Shirt Black",
//     "Apple Watch",
//     "Android Phone"
// ];
// var prices = [10, 10, 199, 159]

// var productsText = "";
// var productsElement = document.getElementById("product-list");

// productsText += "<li class='list-group-item'><span class='badge'>$" + prices[0] + "</span>" + products[0] + "</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$" + prices[1] + "</span>" + products[1] + "</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$" + prices[2] + "</span>" + products[2] + "</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$" + prices[3] + "</span>" + products[3] + "</li>";
// productsElement.innerHTML = productsText;

// var customerName = "Angelina"
// var price = 10;
// var quantity = 2;
// var total = prices[0] + prices[1] + prices[2] + prices[3];
// var totalPrice = total * 0.75;

// var totalPriceElement = document.getElementById("total-price")
// totalPriceElement.textContent = totalPrice;

// var customerElement = document.getElementById("customer-name");
// customerElement.textContent = customerName;

// var time = new Date().getHours();
// var greeting;
// if (time < 12) {
//     greeting = "Good morning";
// } else if (time < 18) {
//     greeting = "Good afternoon"
// } else {
//     greeting = "Good evening";
// }
// var greetingElement = document.getElementById("hello-word")
// greetingElement.textContent = greeting;

var shop = {
    customerName: "Angelina",
    totalPrice: 0,
    products: [
        "Brooklyn T-Shirt White",
        "Brooklyn T-Shirt Black",
        "Apple Watch",
        "Android Phone"
    ],
    prices: [10, 10, 199, 159],

    displayCustomerName: function() {
        var customerElement = document.getElementById("customer-name");
        customerElement.textContent = this.customerName;
    },

    displayProductList: function() {
        var productsText = "";
        var productsElement = document.getElementById("product-list");

        productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[0] + "</span>" + this.products[0] + "</li>";
        productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[1] + "</span>" + this.products[1] + "</li>";
        productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[2] + "</span>" + this.products[2] + "</li>";
        productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[3] + "</span>" + this.products[3] + "</li>";

        productsElement.innerHTML = productsText;
    },

    culculateTotalPrice: function() {
        return (this.prices[0] + this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;
    },

    displayTotalPrice: function() {
        this.totalPrice = this.culculateTotalPrice();
        var totalPriceElement = document.getElementById("total-price");
        totalPriceElement.textContent = this.totalPrice;
    }

}

shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();

var calendar = {
    header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>",
    displayCalendar: function() {
        var ele = document.getElementById("calendar");
        var calendarText = "<table class='table table-condensed'>";
        calendarText += this.header;
        for (var i = 1; i <= 31; i++) {
            calendarText += "<td>" + i + "</td>";
            if (i % 7 == 0) {
                calendarText += "</tr>";
            }
        }

        calendarText += "</table>"
        ele.innerHTML = calendarText;
    }
}
calendar.displayCalendar();


var hello = {
    time: new Date().getHours(),
    greeting: "",

    displayGreeting: function() {
        if (this.time < 12) {
            this.greeting = "Good morning";
        } else if (this.time < 18) {
            this.greeting = "Good afternoon"
        } else {
            this.greeting = "Good evening";
        }
        greetingElement = document.getElementById("hello-word")
        greetingElement.textContent = this.greeting;
    }
}
hello.displayGreeting();