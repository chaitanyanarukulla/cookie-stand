'use strict'
var hours = ['6am : ','7am : ','8am : ','9am : ','10am : ','11am : ','12pm : ','1pm : ','2pm : ','3pm : ','4pm : ','5pm : ','6pm : ','7pm : ','8pm : ']
var allStores = []
function Store (minCustomersPerHour,maxCustomersPerHour,avgCookiesPerCustomer,locationName) {
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.locationName = locationName;
    this.customersEachHour = this.calcCustomersEachHour();
    this.totalCookiesForDay = 0; 
    this.cookiesEachHour = this.calcCookiesEachHour();
    allStores.push(this);
};

function randNumberGen(min, max) {
    // following line line MDN Math.NumberGeanom docs >> from Sams lab demo
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
  
Store.prototype.calcCustomersEachHour = function() {
    var custPerHour = [];
    for (var i = 0; i < hours.length; i++) {
       custPerHour.push(randNumberGen(this.minCustomersPerHour,this.maxCustomersPerHour));
    }
    // console.log(custPerHour);
    return custPerHour;
};

Store.prototype.calcCookiesEachHour =  function() {
      var cookPerHour = [];
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      cookPerHour.push(oneHour);
      this.totalCookiesForDay += oneHour;
    }
    return cookPerHour;
  };

var seattle = new Store(10,40,2.2,'Seattle');









