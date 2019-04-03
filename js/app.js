'use strict'
var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm']
var allStores = []
var hourlyTotal = [];
var storeTable = document.getElementById('store');
// Counstuctor function  to make stores -----------------------------------
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
// method to calculate Customers each hour------------------------------------------
Store.prototype.calcCustomersEachHour = function() {
  var custPerHour = [];
  for (var i = 0; i < hours.length; i++) {
    custPerHour.push(randNumberGen(this.minCustomersPerHour,this.maxCustomersPerHour));
  }
  return custPerHour;
};
// mothod to calculate cookies Each hour ----------------------------------------------
Store.prototype.calcCookiesEachHour =  function() {
  var cookPerHour = [];
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
    cookPerHour.push(oneHour);
    this.totalCookiesForDay += oneHour;
  }
  return cookPerHour;
};
// mothod to render and create tabel--------------------------------------------------
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
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
// function that generates random number--------------------------------------------------------
function randNumberGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // top  line MDN Math.NumberGeanom docs >> from Sams lab demo
};
// function that renders all Stores----------------------------------------------------------
function renderallStores() {
  for (var i = 0; i < allStores.length; i++) {
      allStores[i].render();
  }
}
// function to  make hedder of table-------------------------------------------------------------
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
  thEl.textContent = ' Location Total';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}
/// function to make footer of table-----------------------------------------------------------------------------
function makeFotterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Total';
  trEl.appendChild(thEl);
  
  for (var i = 0; i < hours.length; i++) {
    var totalEh = 0;
    for (var j = 0; j < allStores.length; j++) {
      totalEh += allStores[j].cookiesEachHour[i];
    }
    hourlyTotal.push(totalEh);
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
  }
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal[i];
    trEl.appendChild(thEl);
  }
  // CalcuLATING GTAND TOTAL 
  var grandTotal = 0;
  for (var k = 0; k < hourlyTotal.length; k++) {
  grandTotal += hourlyTotal[k];
  }
  thEl = document.createElement('th');
  thEl.textContent = grandTotal;
  trEl.appendChild(thEl);

};
//instance of an store----------------------------------------------------------------------------------
var Pike = new Store('Pike',23,65,6.3,'1st and Pike');
var SeaTac  = new Store('SeaTac',3,24,1.2,'Seatac Airport');
var Seattle_Center = new Store('Seattle Center',11,38,3.7,'Seattle center');
var Capitolhill = new Store('Capitol Hill',20,38,2.3,'Capitol Hill');
var Alki = new Store('Alki',2,16,4.6,'West Seattle');
// Driver code------------------------------------------------------------------------------------------
makeaHeaderRow();
renderallStores();
makeFotterRow();