function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + "está andando";
  };
}
const mayk = new Person("Mayk");
const joao = new Person("João");

console.log(joao);
console.log(mayk);

console.log("hellos");
