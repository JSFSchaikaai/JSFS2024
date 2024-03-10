const array = [10, 20, 30, 40, 50];

const arrayProxy = new Proxy(array, {
  get: function(target, index) {
        return target[Math.round(index)];
  }
});

console.log(arrayProxy[2.5]);
console.log(arrayProxy[3.5]);