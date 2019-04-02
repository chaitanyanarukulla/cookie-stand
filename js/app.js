'use strict'
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']

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
            }
        console.log(this.cookiesSoldPerHour)

    },

    //Calculates the total cookies sold
    totalCookiesSold : function(){
        var total = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
            total += this.cookiesSoldPerHour[i];
          };
          return total
        },

    };
    
   pike_store.cookiesSoldPerHourMethod();
    
    
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

};

seaTacAirport_store.cookiesSoldPerHourMethod();
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


};
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
};
var alki_storer = {
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
        console.log(this.cookiesSoldPerHour)
    },
};

var ulEL = document.getElementById('pike');

var liEL = document.createElement('li');
liEL.textContent = pike_store.location;
console.log(pike_store.location);
ulEL.appendChild(liEL);





