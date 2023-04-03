//перше завдання
let mixins = {
  vat() {
    return this.price = this.price + this.price * 0.2;
  },
  exciseDuty() {
    return (this.price = (this.price + this.price * 0.3) + 10);
  },
  singleTax() {
    return (this.price = this.price + 1);
  },
};

class Cola {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}
Object.assign(Cola.prototype, mixins);
Cola.prototype.vat = function () {
    return this.price = this.price + this.price * 0.2;
}
let cocaCola = new Cola("Coca-Cola", 10);
console.log(cocaCola.vat());//12

class Whiskey {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}
Object.assign(Whiskey.prototype, mixins);
Whiskey.prototype.exciseDuty = function () {
    return this.price = (this.price + this.price * 0.3) + 10;
}
let johnWalker = new Whiskey("John Walker", 100);
console.log(johnWalker.exciseDuty());//140

class Ice {
  constructor(price) {
    this.price = price;
  }
}
Object.assign(Ice.prototype, mixins);
Ice.prototype.singleTax = function () {
    return this.price = this.price + 1;
}
let ice = new Ice(2);
console.log(ice.singleTax());//3

//друге завдання
function uniceString(string) {
    let words = string.split("; ");
  let uniceWords = new Set(words);
  return uniceWords;
}
console.log(uniceString("cherry; orange; cherry; banana; banana"));//{"cherry", "orange", "banana"}

//третє завдання
function uniquePhone () {
    let phoneList = document.querySelectorAll(".shop-list li");
    let phones = new Set();
    for (let i = 0; i < phoneList.length; i++) {
        let phone = phoneList[i].textContent.trim();
        phones.add(phone);
    }
    return phones;
}
console.log(uniquePhone());//Set(6) {'Iphone 13', 'Ipone 14', 'Samsung S21', 'Iphone 14', 'Samsung S22', …}

//четверте завдання
let visits = new Map();

function userVisits (user) {
    if (visits.has(user)) {
        visits.set(user, visits.get(user) + 1);
    } else {
        visits.set(user, 1);
    }
}
let mike = {name:"Mike", age: 18};
let bob = {name:"Bob", age: 25};
let nikola = {name:"Nikola", age: 32};

userVisits(mike);
userVisits(mike);
userVisits(mike);
userVisits(bob);
userVisits(nikola);
userVisits(nikola);
console.log(visits.get(mike));//3
console.log(visits.get(bob));//1
console.log(visits.get(nikola));//2