'use strict'
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
var allStores = []
var storeTable = document.getElementById('store');
function Store (storeName,minCustomersPerHour,maxCustomersPerHour,avgCookiesPerCustomer,location) {
    this.storeName = storeName;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.location = location;
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

var Pike = new Store('Pike',23,65,6.3,'1st and Pike');
var SeaTac  = new Store('SeaTac',3,24,1.2,'Seatac Airport');
var Seattle_Center = new Store('Seattle Center',11,38,3.7,'Seattle center');
var Capitolhill = new Store('Capitol Hill',20,38,2.3,'Capitol Hill');
var Alki = new Store('Alki',2,16,4.6,'West Seattle');

console.table(allStores)

Store.prototype.render = function() {
    // make a tr
    var trEl = document.createElement('tr');
    // create, content, append for storeName
    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);

    for(var i = 0; i <this.cookiesEachHour.length;i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesForDay;
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
};

function makeaHeaderRow() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Store Name';
    trEl.appendChild(thEl);
    for (var i = 0; i < hours.length; i++) {
      thEl = document.createElement('th');
      thEl.textContent = hours[i];
      trEl.appendChild(thEl);
    }
    thEl = document.createElement('th');
    thEl.textContent = 'Total';
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
   }

  
  function renderallStores() {
    for (var i = 0; i < allStores.length; i++) {
      allStores[i].render();
    }
  }
  
  makeaHeaderRow();
  renderallStores();







