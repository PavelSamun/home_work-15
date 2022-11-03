console.log('Sample JavaScript #3 HW #15');

/*
 * #1
 *
 * Создайте функцию counter(), которая должна реализовать счетчик с помощью замыкания:
 * функция может принимать число в качестве аргумента counter(n)
 * если число передано в функцию – счет начинается с указанного числа
 * если нет – то счет продолжается
 */
let counter = (function() {
  let count = 0;
  return function(n){
    count = n !== undefined ? n : count;
    return count++;
  }
}());
// console.log(counter()); // 0
console.log(counter());
// console.log(counter()); // 1
console.log(counter());
// console.log(counter(100)); // 100
console.log(counter(100));
// console.log(counter()); // 101
console.log(counter());
// console.log(counter(500)); // 500
console.log(counter(500));
// console.log(counter()); // 501
console.log(counter());
// console.log(counter(0)); // 0
console.log(counter(0));
// console.log(counter()); // 1
console.log(counter());
/*
 * #2
 *
 * Создайте функцию counting, которая должна реализовать три метода с помощью замыкания:
 * первоначальное значение счетчика – 0
 * counting.value() – возвращает значение счетчика
 * counting.value(n) – устанавливает значение счетчика, возвращает новое значение
 * counting.increment() – увеличивает значение счетчика на 1
 * counting.decrement() – уменьшает значение счетчика на 1
 */
 let counting = (function() {
  let count = 0;
  return {
    value(n) {
      if (n !== undefined) count = n;
      return count;
    },
    increment() {
      return count++;
    },
    decrement() {
      return count--;
    }
  };
}());
// console.log(counting.value()); // 0
console.log(counting.value());
// counting.increment();
counting.increment();
// counting.increment();
counting.increment();
// counting.increment();
counting.increment();
// console.log(counting.value()); // 3
console.log(counting.value());
// counting.decrement();
counting.decrement();
// counting.decrement();
counting.decrement();
// console.log(counting.value()); // 1
console.log(counting.value());
// console.log(counting.value(100)); // 100
console.log(counting.value(100));
// counting.decrement();
counting.decrement();
// console.log(counting.value()); // 99
console.log(counting.value());
// console.log(counting.value(200)); // 200
console.log(counting.value(200));
// counting.increment();
counting.increment();
// console.log(counting.value()); // 201
console.log(counting.value());
/*
 * #3
 *
 * Создайте функцию myPow(a, b, myPrint). Внутри реализуйте рекурсию для подсчета результата возведения числа a в степень b.
 * функция myPrint(a, b, res) – глобальная функция, которая должна генерировать из параметров a, b, res строку вида 'a^b=res' и возвращать ее
 * myPrint() должна быть передана в myPow() как параметр и вызвана внутри как callback-функция
 * функция myPow() в качестве возвращаемого значения принимает результат myPrint()
 * Например:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 */
let myPrint = function(a, b, res) {
  return `${a}^${b}=${res}`;
};

let myPow = function(a, b, myPrint) {
  let pow = function(n, x) {
    if(x !==1) {
      return n**x;
    } return n;
  };
  return myPrint(a, b, pow(a, b));
};
//  console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(3, 4, myPrint));
// console.log(myPow(2, 3, myPrint)); // 2^3=8
console.log(myPow(2, 3, myPrint));
/*
 * #4
 *
 * Создайте несколько однотипных объектов для описания автомобиля. Соблюдайте следующие правила, используйте следующие поля:
 * имя объекта car – обязательно и необходимое для тестирования, дальнейшее именование объектов – на ваше усмотрение
 * car.engine – объем двигателя, числовое поле
 * car.model – модель авто, строка
 * car.name – бренд авто, строка
 * car.year – год выпуска, число
 * car.used – строка для описания состояния авто, допускаются значения 'used' и 'new'
 *
 * #5
 *
 * Для созданных ранее объектов определите метод info(), используя ключевое слово this.
 * данный метод должен формировать и возвращать строку с полной информацией об автомобиле, например:
 * Chevrolet Lacetti, 2000cc, year 2010, used
 * Infinite FX50 AWD, 5000cc, year 2019, new
 * пробелы, запятые, символы cc и текст – имеют значение и проверяются при тестировании кода
 *
 * #6
 *
 * Для созданных ранее объектов измените свойство used, используя аксессоры (геттер и сеттер).
 * - используйте текущий год либо непосредственно в своем коде, либо с помощью глобальной переменной, например, yearNow
 * - если год выпуска автомобиля отличается от текущего года, геттер used должен выводить текст 'used'
 * - если год выпуска автомобиля совпадает с текущим годом, геттер used должен выводить текст 'new'
 * - если сеттеру used присвоено значение 'new', при этом года выпуска автомобиля отличается от текущего года,
 * - необходимо изменить год выпуска автомобиля, установив в качестве значения текущий год
 * - если сеттеру used присвоено значение 'used', ничего делать не нужно
 */

function allInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};

let car = {
  engine: 1500,
  model: 'Aveo',
  name: 'Chevrolet',
  year: 2008,
  info: allInfo,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};

// let car1 = {
//   engine: 2400,
//   model: 'Optima',
//   name: 'Kia',
//   year: 2013,
//   info: allInfo,
//   get used() {
//     return this.year !== yearNow ? 'used' : 'new';
//   },
//   set used(value) {
//     if (value === 'new' && this.year < yearNow) this.year = yearNow;
//   }
// };

let car2 = {
  engine: 1600,
  model: 'Megane',
  name: 'Renault',
  year: 2022,
  info: allInfo,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};

// let yearNow = new Date().getFullYear(); // получить текущий год как число
let yearNow = new Date().getFullYear();
// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used
console.log(car.info());
// car.used = 'new';
car.used = 'new';
// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- год изменен
console.log(car.info());
// car.used = 'used';
car.used = 'used';
// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- изменения не выполняются
console.log(car.info());
// console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new
console.log(car2.info());
// car.used = 'used';
car.used = 'used';
// console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new -- изменения не выполняются
console.log(car2.info());

/*
 * #7
 * Создайте функцию myMax(arr), которая в качестве параметра принимает
 * произвольный числовой массив и возвращает максимальное число из переданного ей массива.
 * В реализации функции должен быть применен метод Math.max() и apply().
 */
let myMax = function(arr) {
  return Math.max.apply(this, arr);
};
// let list = [12, 23, 100, 34, 56, 9, 233];
let list = [12, 23, 100, 34, 56, 9, 233];
// console.log(myMax(list)); // 233
console.log(myMax(list));
/*
 * #8
 *
 * Создайте функцию myMul(a, b), которая будет умножать числа а и b, возвращая результат.
 */
let myMul = function(a, b) {
  return a * b;
};
/*
 * создайте функции myDouble(n), которая принимает один параметр и  удваивает его.
 * Использовать умножение или другие математические операции внутри функции – запрещено, только bind() и myMul().
 * Функция возвращает результат вычисления.
 */
let myDouble = myMul.bind(null, 2);
// console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myDouble(3));
// console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(4));
// console.log(myDouble(5)); // = myMul(2, 5) = 10
console.log(myDouble(5));
// аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.
let myTriple = myMul.bind(null, 3);
// console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(3));
// console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(4));
// console.log(myTriple(5)); // = myMul(3, 5) = 15
console.log(myTriple(5));
/*
 * #9
 *
 * Постройте функцию myUniq(arr), которая будет принимать произвольный массив
 * повторяющихся примитивных значений (например, имена пользователей или числа ).
 * Функция должна вернуть коллекцию уникальных значений.
 * В реализации разрешено использование set.
 * Любые условные операторы – запрещены и объекты.
 */
let myUniq = function(arr) {
  let mySet = new Set();
  arr.forEach(any => {
    mySet.add(any);
  });
    
  return mySet;
};
// let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
// let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];
let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];
// console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqNums));
// console.log(myUniq(notUniqStrings));
console.log(myUniq(notUniqStrings));