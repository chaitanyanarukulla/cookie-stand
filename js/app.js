'use strict'

var hours = ['6am : ','7am : ','8am : ','9am : ','10am : ','11am : ','12pm : ','1pm : ','2pm : ','3pm : ','4pm : ','5pm : ','6pm : ','7pm : ','8pm : ']

var pike_store = {
    cookiesSoldPerHour :[],
    location : "1st and pike",
    minNumberOfCustomersPerHour: 23,
    maxNumberOfCustomersPerHour: 65,
    avgCookiesSoldPerCustomer:6.3,
    customerPerHour:function() {
        return Math.floor(Math.random()*(65-23)+23)
    },
    cookiesSoldPerHourMethod: function(){
        for (var i = 0;i < hours.length;i++){
          this.cookiesSoldPerHour.push(Math.floor(this.avgCookiesSoldPerCustomer*this.customerPerHour()))
        };
        console.log(this.cookiesSoldPerHour)
    },
    totalCookiesSold : function(){
        var total = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
            total += this.cookiesSoldPerHour[i];
        };
          return total;
    },
};
    //invoking pike_store methods
    pike_store.cookiesSoldPerHourMethod();
    pike_store.totalCookiesSold();
    //pike_store to Display on Dom
    for (var i = 0; i<pike_store.cookiesSoldPerHour.length;i++){
    var ulEL = document.getElementById('pike');
    var liEL = document.createElement('li');
    liEL.textContent = hours[i] + ' ' + pike_store.cookiesSoldPerHour[i];
    ulEL.appendChild(liEL);}
    var ulEL = document.getElementById('pikeTotal');
    var liEL = document.createElement('p');
    liEL.textContent = pike_store.totalCookiesSold();
    ulEL.appendChild(liEL);
  
    
var seaTacAirport_store = {
    cookiesSoldPerHour :[],
    location : "SeaTac Airport",
    minNumberOfCustomersPerHour: 3,
    maxNumberOfCustomersPerHour: 24,
    avgCookiesSoldPerCustomer:1.2,
    customerPerHour:function() { 
        return Math.floor(Math.random()*(24-3)+3)
    },
    cookiesSoldPerHourMethod: function(){
        for (var i = 0;i < hours.length;i++){
          this.cookiesSoldPerHour.push(Math.floor(this.avgCookiesSoldPerCustomer*this.customerPerHour()))
        }
        console.log(this.cookiesSoldPerHour)
    },
    totalCookiesSold : function(){
        var total = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
            total += this.cookiesSoldPerHour[i];
        };
          return total;
    },
};

    //invoking seaTacAirport_store methods
    seaTacAirport_store.cookiesSoldPerHourMethod();
    seaTacAirport_store.totalCookiesSold();
    //seaTacAirport_store to Display on Dom
    for (var i = 0; i<seaTacAirport_store.cookiesSoldPerHour.length;i++){
    var ulEL = document.getElementById('seaTac');
    var liEL = document.createElement('li');
    liEL.textContent = hours[i] + ' ' + seaTacAirport_store.cookiesSoldPerHour[i];
    ulEL.appendChild(liEL);}
    var ulEL = document.getElementById('seaTacTotal');
    var liEL = document.createElement('p');
    liEL.textContent = seaTacAirport_store.totalCookiesSold();
    ulEL.appendChild(liEL);

var seattleCenter_store = {
    cookiesSoldPerHour :[],
    location : "Seattle Center",
    minNumberOfCustomersPerHour: 11,
    maxNumberOfCustomersPerHour: 38,
    avgCookiesSoldPerCustomer:3.7,
    customerPerHour:function() {
        return Math.floor(Math.random()*(38-11)+11)
    },
    cookiesSoldPerHourMethod: function(){
        for (var i = 0;i < hours.length;i++){
          this.cookiesSoldPerHour.push(Math.floor(this.avgCookiesSoldPerCustomer*this.customerPerHour()))
            }
        console.log(this.cookiesSoldPerHour)
    },
    //Calculates the total cookies sold
     totalCookiesSold : function(){
        var total = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
            total += this.cookiesSoldPerHour[i];
        };
          return total;
    },
};
    //invoking seattleCenter_store methods
    seattleCenter_store.cookiesSoldPerHourMethod();
    seattleCenter_store.totalCookiesSold();
    //seattleCenter_store to Display on Dom
    for (var i = 0; i<seattleCenter_store.cookiesSoldPerHour.length;i++){
    var ulEL = document.getElementById('seaCenter');
    var liEL = document.createElement('li');
    liEL.textContent = hours[i] + ' ' + seattleCenter_store.cookiesSoldPerHour[i];
    ulEL.appendChild(liEL);}
    var ulEL = document.getElementById('seaCenterTotal');
    var liEL = document.createElement('p');
    liEL.textContent = seattleCenter_store.totalCookiesSold();
    ulEL.appendChild(liEL);

var capitolHill_store= {
    cookiesSoldPerHour :[],
    location : "Capitol Hill",
    minNumberOfCustomersPerHour: 20,
    maxNumberOfCustomersPerHour: 38,
    avgCookiesSoldPerCustomer:2.3,
    customerPerHour:function() {
        return Math.floor(Math.random()*(38-20)+20)
    },
    cookiesSoldPerHourMethod: function(){
        for (var i = 0;i < hours.length;i++){
          this.cookiesSoldPerHour.push(Math.floor(this.avgCookiesSoldPerCustomer*this.customerPerHour()))
            }
        console.log(this.cookiesSoldPerHour)
    },
 //Calculates the total cookies sold
     totalCookiesSold : function(){
        var total = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
            total += this.cookiesSoldPerHour[i];
          };
          return total;
    },
};

    //invoking capitolHill_store methods
    capitolHill_store.cookiesSoldPerHourMethod();
    capitolHill_store.totalCookiesSold();
    //capitolHill_store to Display on Dom
    for (var i = 0; i<capitolHill_store.cookiesSoldPerHour.length;i++){
    var ulEL = document.getElementById('capHill');
    var liEL = document.createElement('li');
    liEL.textContent = hours[i] + ' ' + capitolHill_store.cookiesSoldPerHour[i];
    ulEL.appendChild(liEL);}
    var ulEL = document.getElementById('capHillTotal');
    var liEL = document.createElement('p');
    liEL.textContent = capitolHill_store.totalCookiesSold();
    ulEL.appendChild(liEL);


var alki_store = {
    cookiesSoldPerHour :[],
    location : "Alki",
    minNumberOfCustomersPerHour: 2,
    maxNumberOfCustomersPerHour: 16,
    avgCookiesSoldPerCustomer:4.6,
    customerPerHour:function() {
        return Math.floor(Math.random()*(16-2)+2)
    },
    cookiesSoldPerHourMethod: function(){
        for (var i = 0;i < hours.length;i++){
          this.cookiesSoldPerHour.push(Math.floor(this.avgCookiesSoldPerCustomer*this.customerPerHour()))
            }
        // console.log(this.cookiesSoldPerHour)
    },
    //Calculates the total cookies sold
    totalCookiesSold : function(){
        var total = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
            total += this.cookiesSoldPerHour[i];
          };
          return total;
    },
};
    alki_store.cookiesSoldPerHourMethod();
    alki_store.totalCookiesSold();
    //alki_store to Display on Dom
    for (var i = 0; i<alki_store.cookiesSoldPerHour.length;i++){
    var ulEL = document.getElementById('alki');
    var liEL = document.createElement('li');
    liEL.textContent = hours[i] + ' ' + alki_store.cookiesSoldPerHour[i];
    ulEL.appendChild(liEL);}
    var ulEL = document.getElementById('alkiTotal');
    var liEL = document.createElement('p');
    liEL.textContent = alki_store.totalCookiesSold();
    ulEL.appendChild(liEL);







