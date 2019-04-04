'use strict';
//Globel variables------------------------------------------------------------------->
var initialStores = [['1st and Pike', 23, 65, 6.3],['SeaTac Airport', 3, 24, 1.2],['Seattle Center', 11, 38, 3.7],['Capital Hill', 20, 38, 2.3],['Alki', 2, 16, 4.6],];
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var allStores = [];
var storeForm = document.getElementById('store-form');

// Counstuctor function  to make stores ------------------------------------------------------------------->
var Store = function(storeName, minCustomerEachHour, maxCustomerEachHour, avgCookiePerCustomer) {
  this.totalCookiesPerDay = 0;
  this.cookiesSoldEachHour = [];
  this.storeName = storeName;
  this.minCustomerEachHour = minCustomerEachHour;
  this.maxCustomerEachHour = maxCustomerEachHour;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
};

// Method to calculate number of cookies Sold per day--------------------------------------------------------->
Store.prototype.calcCookiesSold = function() {
  for (var i = 0; i < hours.length; i++) {
   var cookiesEachHour = Math.ceil(this.avgCookiePerCustomer * randNumCustomers(this.minCustomerEachHour, this.maxCustomerEachHour));
    this.cookiesSoldEachHour.push(cookiesEachHour);
    this.totalCookiesPerDay += cookiesEachHour;
  }
};

// Method to render table row -------------------------------------------------------------------->
Store.prototype.renderRow = function(table) {
 var row = document.createElement('tr');
  appendNewElement(this.storeName, 'th', row);
  this.cookiesSoldEachHour.forEach(function(count) {
    appendNewElement(count, 'td', row);
  });
  appendNewElement(this.totalCookiesPerDay, 'td', row);
  table.appendChild(row);
};

// Helper function to get random number of customers------------------------------------------------------->
function randNumCustomers(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
}

// Function to render table header---------------------------------------------------------------->
function renderTableHeader(table) {
 var tHead = document.createElement('thead');
 var row = document.createElement('tr');
  row.setAttribute('id', 'tableHeader');
  appendNewElement('Location', 'th', row);
  hours.forEach(function(item) {
    appendNewElement(item, 'th', row);
  });
  appendNewElement('Daily Total', 'th', row);
  tHead.appendChild(row);
  table.appendChild(tHead);
}

// Function to render the table body------------------------------------------------------------------->
function renderTableBody(table) {
  var tBody = document.createElement('tbody');
  allStores.forEach(function(store) {
    store.renderRow(tBody);
  });
  table.appendChild(tBody);
}

// Function to render sales table------------------------------------------------------------>
function renderSalesTable() {
  var sectionEl = document.getElementById('dailySales');
  sectionEl.textContent = '';
  appendNewElement('Daily Sales', 'h2', sectionEl);
  var table = document.createElement('table');
  renderTableHeader(table);
  renderTableBody(table);
  renderTableFooter(table);
  sectionEl.appendChild(table);
}
// Function to calculate and render table footer-------------------------------------------------------->
function renderTableFooter(table) {
   var tf = document.createElement('tfoot');
   var row = document.createElement('tr');
   appendNewElement('Total Sale Pre Hour', 'th', row);
   var sumTotal = 0;
   for (var i = 0; i < hours.length; i++) {
     var subTotal = 0;
     allStores.forEach(function(store) {
      subTotal += store.cookiesSoldEachHour[i];
    });
    appendNewElement(subTotal, 'td', row);
    sumTotal += subTotal;
  }
  appendNewElement(sumTotal, 'td', row);
  tf.appendChild(row);
  table.appendChild(tf);
}

// Helper function to create and append new element into parent------------------------------------------>
function appendNewElement(content, tag, parentElement) {
 var newElement = document.createElement(tag);
  newElement.textContent = content;
  parentElement.appendChild(newElement);
}

   // Event handler for updating  Stores ----------------------------------------------------------->
function handelSubbmit(e) {
  e.preventDefault();

  // Get values from form and make New Stores-------------------------------------------------------->
 var storeName = e.target.storeName.value;
 var minCustomerEachHour = parseInt(e.target.minCustomerEachHour.value);
 var maxCustomerEachHour = parseInt(e.target.maxCustomerEachHour.value);
 var avgCookiePerCustomer = parseFloat(e.target.avgCookiePerCustomer.value);
 var newStore = new Store(storeName, minCustomerEachHour, maxCustomerEachHour, avgCookiePerCustomer);
 newStore.calcCookiesSold();
 allStores.push(newStore);
  
 // Reset values on from  field
  e.target.storeName.value = null;
  e.target.minCustomerEachHour.value = null;
  e.target.maxCustomerEachHour.value = null;
  e.target.avgCookiePerCustomer.value = null;
  // Re-render table
  renderSalesTable();
}

// Function to instantiate store ---------------------------------------------------------------------->
function makeStores() {
  var stores = [];
  initialStores.forEach(function(store) {
  var newStore = new Store(store[0], store[1], store[2], store[3]);
  newStore.calcCookiesSold();
  stores.push(newStore);
  });
  return stores;
}

//DriverCode--------------------------------------------------------------------------------------------->
if (storeForm) {
  // Event listener 
  storeForm.addEventListener('submit', handelSubbmit);
  allStores = makeStores();
  renderSalesTable();
}


  

