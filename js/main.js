//
// class User {
//   constructor(name, isAdmin){
//     this.name = name;
//     this.isAdmin = isAdmin;
//     this.that = this;
//
//   }
//   getName(){
//     return this.name
//   }
//   getIsAdmin(){
//     return this.isAdmin
//   }
// }
// class Admin extends User {
//   constructor(name) {
//     super(name);
//   }
//   getName() {
//     const getNamePerson = this.that.getName;
//     this.getName = function getName() {
//       return `Name: ${getNamePerson(this.name )}`;
//     };
//    };
//   getIsAdmin(isAdmin) {
//     return true;
//   }
// }
// class DefaultUser extends User {
//   constructor(name) {
//     super(name, false);
//   }
//   getName() {
//     return `userName ${super.getName()}`;
//   }
//
//   getIsAdmin() {
//     return false;
//   }
//   updateName(newName){
//     this.name = newName;
//   }
// }
// const admin = new Admin('Alexandr')
// console.log(admin.getNamePerson())
// console.log(admin.getIsAdmin());
// const defaultUser = new DefaultUser('Max');
// console.log(defaultUser.getName());
// console.log(defaultUser.getIsAdmin());
// defaultUser.updateName('Max Anderson');
// console.log(defaultUser.getName());


// function User(name = '', isAdmin = false) {
//   this.name = name;
//   this.isAdmin = isAdmin;
// };
// User.prototype.getName = function() {
//   return this.name;
// };
// User.prototype.getIsAdmin = function() {
//   return this.isAdmin;
// };
// Admin.prototype = Object.create(User.prototype);
// function Admin(name) {
//   User.call(this, name, true);
// };
// Admin.prototype.getName = function() {
//   return  `Admin name is ${this.name}`;
// };
// Admin.prototype.showIsAdmin = function() {
//   console.log('this is admin');
// };
// DefaultUser.prototype = Object.create(User.prototype);
// function DefaultUser(name, age = 0) {
//   User.call(this, name, false);
//   this.age = age;
// };
// DefaultUser.prototype.getName = function() {
//   return `User name is ${this.name}`;
// };
// DefaultUser.prototype.getUserAge = function() {
//   return this.age;
// };
// const admin = new Admin('Max');
// console.log(admin.getName());
// console.log(admin.getIsAdmin());
// admin.showIsAdmin();
// console.log('---HINT---');
// const defaultUser = new DefaultUser('Pavlenko', 10);
// console.log(defaultUser.getName());
// console.log(defaultUser.getIsAdmin());
// console.log(defaultUser.getUserAge());

//
// function User(name = '', isAdmin = false) {
//   this.name = name;
//   this.isAdmin = isAdmin;
//   this.getName = function() {
//     return this.name;
//   }
//   this.getIsAdmin = function() {
//   return this.isAdmin;
//   }
// };
// function Admin(name) {
//   User.call(this, name);
//   this.getName = () => {
//     return `Admin name is ${this.name}`;
//   }
//   this.getIsAdmin = () => {
//     return `This isAdmin: ${this.isAdmin}`;
//   }
//   this.updateUserName = (newUserName) => {
//     this.name = newUserName;
//   }
// };
// function DefaultUser(name, age = 0) {
//   User.call(this, name, false);
//   this.age = age;
//   this.getName = () => {
//     return `Name of Default user is ${this.name}`;
//   }
//   this.getIsAdmin = () => {
//     return `This is Default user`;
//   }
//   this.getAge = () => {
//     return `User age are ${this.age} years old`;
//   }
//   this.updateUserAge = (newAge) => {
//     this.age = newAge;
//   }
// };
// const admin = new Admin('Max');
// console.log(admin.getName());
// admin.updateUserName('Super Max');
// console.log(admin.getName());
// const defaultUser = new DefaultUser('Pavlenko');
// console.log(defaultUser.getName());
// console.log(defaultUser.getAge());
