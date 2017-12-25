var iPhone6S = new Phone("iPhone 6s", "Apple", 1900, "Space Gray");
var sgs6 = new Phone("Samsung Galaxy S6", "Samsung", 1500, "Gold");
var onePlusOne = new Phone("OnePlus One", "OnePlus", 1200, "White");

function Phone(model, brand, price, color) {
    this.model = model;
    this.brand = brand;
    this.price = price;
    this.color = color;
}
Phone.prototype.printInfo = function() {
    console.log(this.model + " - The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

iPhone6S.printInfo();
sgs6.printInfo();
onePlusOne.printInfo();