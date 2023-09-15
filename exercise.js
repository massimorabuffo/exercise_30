class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static fromJson(json) {
    const newObj = JSON.parse(json);
    return new Person(newObj.id, newObj.firstName, newObj.lastName, newObj.age);
  }
  
  static toJson(obj) {
    return JSON.stringify(obj);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);