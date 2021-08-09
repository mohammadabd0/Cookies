// 'use strict'

// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'
// ]


// let container = document.getElementById('container');

// let seattle = {

//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     avgcustPerHour: [],
//     avgcookiesEachHour: [],
//     total: 0,

   
//     cookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgcookiesEachHour.push(this.avgcustPerHour[i] * this.avg);
//             this.total += this.avgcookiesEachHour[i];
//         }
//     },


//     getRandomInt: function (min, max) {
//         min = Math.ceil(this.min);
//         max = Math.floor(this.max);
//         for(let i = 0 ; i < hours.length; i++){
//         this.avgcookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
//         },

//     render: function (){
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let j = 0; j < hours.length; j++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = `${hours[j]} : ${this.avgcookiesEachHour[j]} `;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`
//     }
// }

// seattle.getRandomInt(23,65);
// seattle.cookies();
// seattle.render();


// let Tokyo = {

//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     avgcustPerHour: [],
//     avgcookiesEachHour: [],
//     total: 0,

   
//     cookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgcookiesEachHour.push(this.avgcustPerHour[i] * this.avg);
//             this.total += this.avgcookiesEachHour[i];
//         }
//     },


//     getRandomInt: function (min, max) {
//         min = Math.ceil(this.min);
//         max = Math.floor(this.max);
//         for(let i = 0 ; i < hours.length; i++){
//         this.avgcookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
//         },

//     render: function (){
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let j = 0; j < hours.length; j++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = `${hours[j]} : ${this.avgcookiesEachHour[j]} `;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`


//     }
// }

// Tokyo.getRandomInt(3,24);
// Tokyo.cookies();
// Tokyo.render();


// let Dubai = {

//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     avgcustPerHour: [],
//     avgcookiesEachHour: [],
//     total: 0,

   
//     cookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgcookiesEachHour.push(this.avgcustPerHour[i] * this.avg);
//             this.total += this.avgcookiesEachHour[i];
//         }
//     },


//     getRandomInt: function (min, max) {
//         min = Math.ceil(this.min);
//         max = Math.floor(this.max);
//         for(let i = 0 ; i < hours.length; i++){
//         this.avgcookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
//         },

//     render: function (){
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let j = 0; j < hours.length; j++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = `${hours[j]} : ${this.avgcookiesEachHour[j]} `;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`


//     }
// }

// Dubai.getRandomInt(3,24);
// Dubai.cookies();
// Dubai.render();


// let Paris = {

//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     avgcustPerHour: [],
//     avgcookiesEachHour: [],
//     total: 0,

   
//     cookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgcookiesEachHour.push(this.avgcustPerHour[i] * this.avg);
//             this.total += this.avgcookiesEachHour[i];
//         }
//     },


//     getRandomInt: function (min, max) {
//         min = Math.ceil(this.min);
//         max = Math.floor(this.max);
//         for(let i = 0 ; i < hours.length; i++){
//         this.avgcookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
//         },

//     render: function (){
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let j = 0; j < hours.length; j++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = `${hours[j]} : ${this.avgcookiesEachHour[j]} `;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`


//     }
// }

// Paris.getRandomInt(3,24);
// Paris.cookies();
// Paris.render();



// let Lima = {

//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     avgcustPerHour: [],
//     avgcookiesEachHour: [],
//     total: 0,

   
//     cookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgcookiesEachHour.push(this.avgcustPerHour[i] * this.avg);
//             this.total += this.avgcookiesEachHour[i];
//         }
//     },


//     getRandomInt: function (min, max) {
//         min = Math.ceil(this.min);
//         max = Math.floor(this.max);
//         for(let i = 0 ; i < hours.length; i++){
//         this.avgcookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
//         },

//     render: function (){
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let j = 0; j < hours.length; j++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = `${hours[j]} : ${this.avgcookiesEachHour[j]} `;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`


//     }
// }

// Lima.getRandomInt(2,24);
// Lima.cookies();
// Lima.render();

// this is lab07 ----------------------------------------------------------------------------------------------------------------------

'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'
]

let shopes = [];
let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
function shope(name,min,max,avg){
this.name = name;
this.min = min;
this.max = max;
this.avg = avg;
this.avgcustPerHour = [];
this.avgcookiesEachHour = [];
this.total= 0;
shopes.push(this)
}
shope.prototype.cookies = function(){
    for (let i = 0; i < hours.length; i++) {
        this.avgcookiesEachHour.push(Math.ceil(this.avgcustPerHour[i] * this.avg));
        this.total += this.avgcookiesEachHour[i];
    }
}
shope.prototype.getRandomInt = function(min,max){
    min = Math.ceil(this.min);
    max = Math.floor(this.max);
    for(let i = 0 ; i < hours.length; i++){
    this.avgcustPerHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }

}


function createTableHeader(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
        let the1 =document.createElement('th');
        trEl.appendChild(the1)
        the1.textContent = "   "
        for (let i =0; i< hours.length; i++){
    
            let thel = document.createElement('th');
            trEl.appendChild(thel);
            thel.textContent = hours[i];
        }
        let th2 = document.createElement('th')
        trEl.appendChild(th2)
        th2.textContent = `DailyLocationTotal`

       
}
createTableHeader();


shope.prototype.render = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = this.name;
    
    for(let i=0; i<hours.length ;i++){
        let tde = document.createElement('td')
        trEl.appendChild(tde);
        tde.textContent = this.avgcookiesEachHour[i];
    }
    let td = document.createElement('td')
    trEl.appendChild(td);
    td.textContent=this.total

 };
 function createTableFooter() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
  
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = 'Totals';
  
    let totalhour = 0;
    for (let i = 0; i < hours.length; i++) {
      let total = 0;
      for (let j = 0; j < shopes.length; j++) {
        total += shopes[j].avgcookiesEachHour[i];
  
      }
      totalhour += total;
      let tdEl2 = document.createElement('td');
      trEl.appendChild(tdEl2);
      tdEl2.textContent = total;
  
    }
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent =  totalhour;
  
  }
  

let Seattle = new shope('Seattle ',23,65,6.3);
Seattle.getRandomInt(23,65)
Seattle.cookies();
Seattle.render();
console.log(shopes);

let Tokyo = new shope('Tokyo',3,24,1.2);
Tokyo.getRandomInt(20,38)
Tokyo.cookies();
Tokyo.render();

let Dubai = new shope('Dubai',20,38,3.7);
Dubai.getRandomInt(11,38)
Dubai.cookies();
Dubai.render();

let Paris = new shope('Paris',20,38,2.3);
Paris.getRandomInt(20,38)
Paris.cookies();
Paris.render();

let Lima = new shope('Lima',2,16,4.6);
Lima.getRandomInt(2,16)
Lima.cookies();
Lima.render();
createTableFooter();
// for (let i = 0; i < shopes.length; i++) {
//     shopes[i].render();
//     console.log(shopes);
// }