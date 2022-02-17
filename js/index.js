//pembuatan if dan else kondisi

// let hour = 4;

// if (hour >= 6 && hour < 12) {
//   console.log("Good Morning");
// } else if (hour >= 12 && hour < 18) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good Evening");
// }

// penggunaan for
// for (let i = 0; i <= 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// pembuatan grade (eror)
// const marks = [80, 90, 10];
// avarage = 58;

// //avarage = 70

// // 1-59 = E
// // 60-69 = D
// // 70-79 = C
// // 80-89 = B
// // 90-100 = A

// function calculateGrade(marks) {
//   const avarage = calculateAvarage(marks);
//   if (avarage < 60) return "E";
//   if (avarage < 70) return "D";
//   if (avarage < 80) return "C";
//   if (avarage < 90) return "B";
//   return "A";
// }
// function calculateAvarage(array) {
//   let sum = 0;
//   for (let value of array) sum += value;
//   return sum / array.lenght;
// }

// penggunaan function
// function greet(name, jurusan) {
//   console.log("hello " + name + " " + jurusan);
// }

// greet("rifqy", "tgp");
// greet("fadel", "tgp");

// let priceRanges = [
//   { label: "$", kategori: "murah", minHarga: 0, maxHarga: 10000 },
//   { label: "$$", kategori: "sedang", minHarga: 10000, maxHarga: 30000 },
//   { label: "$$", kategori: "mmahal", minHarga: 30000, maxHarga: 50000 },
// ];

// let harga = 5000;

// if ((harga < 10000, (kategori = "murah"))) {
//   console.log("$");
// } else if ((harga > 10000 && harga < 30000, (kategori = "sedang"))) {
//   console.log("$$");
// } else {
//   console.log("$$$");
// }

// 3 factories
// const circle = {
//     radius: 1,
//     location: {
//         x:1
//         y:1
//     },
//     draw: function () {
//         console.log('draw');
//     }
// };
// const circle = {}

//factory function

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);

// belajar ulang

// let firstName = "Rifqy";
// let lastNmae = "Yusuf";

// const umur = 12;
// umur = 14;
// console.log(umur);

// let person = {
//   nama: "rifqy",
//   age: 22,
// };
// person.nama = "tifa";
// console.log(person.nama);

//array

// let selectedColor = ["red", "green"];

// selectedColor[2] = "1";
// console.log(selectedColor.length);

//function

// function greet(name, kampus) {
//   console.log("hello " + name + " " + kampus);
// }

// greet("rifqy", "pnj");
// greet("tifa", "pnj");

//menghitung di function

// function nilai(number) {
//   return number * number;
// }

// console.log(nilai(2));

// menghitung menggunakan function

//cara1
// function nilai(number1, number2, number3) {
//   return (number1 / number2) * number3;
// }

// console.log(nilai(5, 10, 100) + "%");

//cara2
// function nilai(number1, number2, number3) {
//   console.log((number1 / number2) * number3 + "%");
// }

// nilai(5, 10, 100);

// let baseSalery = 30_000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSlaery, overtime, rate) {
//   return baseSalary + overtime * rate;
// }

// let employee = {
//   baseSalery: 30_000,
//   overtime: 10,
//   rate: 20,
//   getWage: function () {
//     return this.baseSalery + this.overtime * this.rate;
//   },
// };

// employee.getWage();

// console.log("hellow pasti bisa");

//oop

//factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(1);

// //constructur function

// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0 };

//   this.draw = function () {
//     console.log("draw");
//   };
//   Object.defineProperty(this, "defaultLocation", {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) throw new Error("invalid location.");

//       defaultLocation = value;
//     },
//   });
// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw();

//kalauu mau menghitung semua anggota dan objek , bsia pake
// for (let key in circle) {
//   if (typeof circle[key] !== "function") console.log(key, circle[key]);
// }

//untuk mendapatkan semua objek bisa pake ini
// const keys = Object.keys(circle);
// console.log(keys);

// //untuk memeriksa keberadaan properti ato metode dalam objek pake ini
// if ("radius" in circle) console.log("circle punya radius");

//agar property this ga kebaca gunakan let

//prototypes
//inherit

// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);

//4. membaca / deskripsi property dalam object

// let person = { nama: "rifqy" };

// Object.defineProperty(person, "nama", {
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// delete person.nama;

// console.log(person);

//5. constructor prototypes

//cara melihan di console
//Circle.prototypeof

// function Circle(radius) {
//   //instance members
//   this.radius = radius;

//   this.move = function () {
//     this.draw();
//     console.log("move");
//   };
// }

// //prototype members
// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// Circle.prototype.toString = function () {
//   return "circle with radius" + this.radius;
// };

//7. iterating instance and prototype members

// function Circle(radius) {
//   this.radius = radius;

//   this.move = function () {
//     console.log(move);
//   };
// }

// const c1 = new Circle(1);

// //prototype members
// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// //return instance members
// console.log(Object.keys(c1));

// //return  all members (instance + prototype)
// for (let key in c1) console.log(key);

//8. avoid ectending the built in object


// function Shape(color) {
// this.color = color;
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate')
// }
// function extend(Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
    
// }

// function Circle(radius, color) {
//     Shape.call(this, color);
//     this.radius = radius;
// }

// extend(Circle, Shape);

// Circle.prototype.draw = function() {
//     console.log('draw');
// }

// function Square(size) {
//     this.size= size;
// }

// // Square.prototype = Object.create(Shape.prototype);
// // Square.prototype.constructor = Square
// // bisa disingkat 
// extend(Square, Shape);

// const s = new Shape();
// const c = new Circle(1, 'red');

// //5. method overriding
// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Shape() {
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// function Circle() {
// }


// extend(Circle, Shape); //dapat mereset object

// Circle.prototype.duplicate = function() {
//     Shape.prototype.duplicate.call(this);
// }
// const c = new Circle();

// 6. pholymophisem (eror)


// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }


// function Shape() {
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// function Circle() {
// }

// extend(Circle, Shape);

// Circle.prototype.duplicate = function() {
//     console.log('duplicate circle');
// }

// function Square() {
// }

// extend(Square, Shape);
  
// Square.prototype.duplicate = function() {
//     console.log('duplicate square');
// }

// const Shapes = [
//     new Circle(),
//     new Square()
// ];

// for (let Shape of shape) {
//     shape.duplicate();
// }

//7.when to use inheritance
 //kita menggunakan inheritance apabila dalam satu objek memiliki berbagai properti
 //dan properti tersebut masing masing memiliki perlakuan/metode
//

// //8. mixins

// function mixin(target, ...sources) {
//     Object.assign(target, ...sources)
// }

// const canEat = {
//     eat: function() {
//         this.hunger--;
//         console.log('eating')
//     }
// };

// const canWalk = {
//     walk: function() {
//         console.log('walking');
//     }
// }

// const canSwim  = {
//     swim: function() {
//         console.log('swimming')
//     }
// };

// function Person(){
// }

// mixin(Person.prototype, canEat, canWalk);

// const person  = new Person();
// console.log(person)

// function Goldfish(){
// }

// mixin(Goldfish.prototype, canEat, canSwim)
// const fish = new Goldfish
// console.log(fish)

//11. solution prototypical inheritance

// function HtmlElement() {
//     this.click = function()  {
//         console.log('clicked')
//     }
// }

// HtmlElement.prototype.focus = function(){
//     console.log('focused')
// }

// function HtmlSelectElement(items = []) {
//     this.items = items;

//     this. addItem = function(item){
//         this.items.push(item);
//     }

//     this.removeItem = function(item) {
//         this.items.splice(this.items.indexOf(item), 1);
//     }
// }
// // //menjadi base htmlselect element
// // HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); //menjadi base htmlelement

// HtmlSelectElement.prototype = new HtmlElement()
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

//12. solution polymorphism
// function HtmlSelectElement (items = []) {
//     this.items = items;

//     this.addItem = function(item) {
//         this.items.push(item);
//     }

//     this.removeItem = function(item) {
//         this.items.splice(this.items.indexOf(item), 1);
//     }
    
//     this.render = function() {
//         return `
//     <select>${this.items.map(item => `
//         <option>${item}</option`).join('')}
//     </select>`;
//     }
// }

// // const renderItem = function (item) {
// //     return `<option>${item}</option>`
// // } bisa juga

// // const renderItem = item => `<option>${item}</option>`

// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement 


// function htmlImageElement (src) {
//     this.src = src;
//     this.render = function () {
//         return `<img src="${this.src}"/>`
//     }
// }
// htmlImageElement.prototype = new HtmlElement();
// htmlImageElement.prototype.constructor = htmlImageElement


//es6 
//1-es6 classes

// function Circle(radius) {
//     this.radius = radius;
//     this.move = function () {}

//     this.draw = function() {
//         console.log('draw');
//     }
// }
//klo es6

// class Circle {
//     constructor(radius) {
//         this.radius = radius
//         this.move =  function() {}
//     }

//     draw() {
//         console.log('draw')
//     }
// }

// const c = new Circle(1); //kalau mau dipanggil

//2. hoisting
// sayHello();

// //function declaration
// function sayHello () {}

// //function expression
// const sayGoodbye = function () {};
// const number = 1;

// //es6
// //class declaration
// class = circle{
// };

// //class expresiion
// const square = class {
// };

//3. static methods

// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }
// //instance method
//     draw() {
//     }
// //static method
//     static parse(str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }

// const circle = Circle.parse('{"radius": 1}')
// console.log(circle)

//4. the this keyword

// 'use strict'

// const Circle = function() {
//     this.draw = function() {console.log(this);}
// };

// const c = new Circle();
// c.draw();

// const draw = c.draw

// draw()

//es6
// 'use strict'
// class Circle {
//     draw() {
//         console.log(this);
//     }
// }

// const c = new Circle(1)
// const draw = c.draw;
// draw();

// // 5. private members using symbols

// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//     constructor(radius) {
//         this[_radius] = radius;
//     }
//     [_draw]() {
//     }
// }

// const c = new Circle(1);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]); //nilai symbol

//6. private members using weakMaps
// const _radius = new WeakMap();
// const _move = new WeakMap();


// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
        
//         _move.set(this, () => {
//             console.log('move', this);
//         })
//     }

//     draw() {
//         _move.get(this) ();
//         console.log('draw')
//     }
// }

// const c = new Circle(1)

//7.getters and setters

// const _radius = new WeakMap();

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//     }
//     //get dan set di es6
//     get radius() {
//         return _radius.get(this);
//     }

//     set radius(value) {
//         if (value <= 0) throw new Error ('invalid radius')
//         _radius.set(this, value)
//     }
// }

// const c = new Circle(1)

// 8. inheritance

// class Shape {
//     constructor(color) {
//         this.color = color;
//     }

//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color); //super digunakan karena parent pake constructor, biar ga eror
//         this.radius = radius;
//     }
    

//     draw() {
//         console.log('draw')
//     }
// }

// const c = new Circle('red', 1);

//9. method overriding

// class Shape {
//     move(){
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     move() {
//         super.move(); //pake super biar kepangil yg diparent dan child
//         console.log('circle move')
//     }
// }

// const c = new Circle()

//1 modules es6 & 2.commonJS modules


// const Circle = require('./circle')

// const c = new Circle(10)
// c.draw();

//menyambungkan antara file index.js induk dengan circle js anak

//3.es6 modules

// import {Circle} from './circle2.js'
// const c = new Circle(10);
// c.draw();