// // 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
// // 이행(fulfilled): 연산이 성공적으로 완료됨.
// // 거부(rejected): 연산이 실패함.

// function fetchMovies(title) {
//   // 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
//   const OMDB_API_KEY = "7035c60c11";

//   return new Promise(async (resolve, reject) => {
//     try {
//       //async는  프로미스 생성자 안에 콜백함수로 들어있기때문에 콜백함수 앞에 async 키워드를 붙여준다
//       const res = await axios.get(
//         `https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`
//       );
//       // console.log(res);
//       resolve(res); // 이행(fulfilled): 연산이 성공적으로 완료됨.
//       //resovle라는 매개변수를 호출하여 인수로 응답받은 데이터를 반환해준다.
//     } catch (error) {
//       // 거부(rejected): 연산이 실패함.
//       console.log(error.message);
//       reject("에러가 발생했습니다", error.message);
//       //message 에러 객체안에 메시지를 속성을 사용할 수 있음.
//       //api키가 잘못된 경우 401 error
//     }
//   });
// }

// async function test() {
//   try {
//     const res = await fetchMovies("frozen");
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// //왜 굳이 함수로 따로 뺴서 사용하는가?
// //01. axios get으로만 사용하여 직관적인 코드가 어렵다. fetchMovies 라고 하면 영화의 정보를 가져오는구나 알수있다.
// //02. OMDB_API_KEY 키를 따로 관리가 가능하고,  따로 노출하지 않아도 되서
// //03. fetchMovies 함수를 통해 재활용이 가능하다.

// test();
// function hello() {
//   fetchMovies("jobs")
//     .then(res => console.log(res))
//     .catch(error => {
//       console.log(error);
//     });
// }
// hello();

// mul = function (x, y) {
//   return x * y;
// };

// callback = function (x, y) {
//   console.log(x * y);
// };

// mul(1, 2, callback(1, 2));

// var foo2; // [Hoisting] 함수표현식의 변수값 "선언"
// function foo() {
//   // [Hoisting] 함수선언문
//   console.log("hello");
// }

// foo();
// foo2(); // ERROR!!

// foo2 = function () {
//   console.log("hello2");
// };

//클로져 예제

function makeCounter() {
  let num = 0;

  return function () {
    return num;
  };
}

let counter = makeCounter();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2

//스코프 예제

let apple = "apple";

function fruit(eat) {
  let apple = "banana";
  eat();
}

function eat() {
  console.log(apple);
}

fruit(eat);
eat();

//클로져 예제

function User() {
  let _id = "연우";

  const closures = {
    getId: function () {
      return _id;
    },
    setId: function (id) {
      _id = id;
    },
  };
  return closures;
}

const user = new User();

console.log(user.getId());
console.log(user._id);

user.setId("후추");
console.log(user.getId());
console.log(user._id);

// const timer = setTimeout(() => {
//   console.log("setTimeout! : test stop!");
// }, 3000);

// function timeOut(callback) {
//   setTimeout(() => {
//     console.log("연우에용");
//     callback();
//   }, 3000);
// }

// timeOut(() => {
//   console.log("내가 연우다");
// });

// console.log("0~100 랜덤숫자: ", Math.floor(Math.random() * 100) + 1);
// //Example:
// var arr2 = [1, 2, 4, 3, 5, 6, 8, 3, 5, 9, 10, 20, 50, 26];

// // [].forEach(function(각요소하나씩, 순서){})
// arr2.forEach(function (arg, idx) {
//   console.log(idx, ":", arg, arr2[idx]);
// });

// // const numbers = [1, 2, 3, 4];

// // //map
// // const a = numbers.map(number => {
// //   return number < 3;
// // });

// // console.log(a);
// // // (4) [true, true, false, false]

// // //filter

// // const b = numbers.filter(number => {
// //   return number < 3;
// // });

// // console.log(b);
// // // (2) [1, 2]

// const numbers = [1, 2, 3, 4];
// const pushEl = numbers.push(3);
// console.log(numbers); // (5) [1, 2, 3, 4, 3]
// console.log(pushEl); // 5

// const a = { a: 1 };
// const b = { a: 1 };

// const c = b;
// console.log(c === b);

// const fruits = ["Apple", "Banana", "Cherry"];
// function toObject(aa, bb, cc) {
//   return {
//     a: aa,
//     b: bb,
//     c: cc,
//   };
// }

// console.log(toObject(...fruits));
// //깊은복사
// const users = {
//   name: "woo",
//   age: 25,
//   emails: ["chiyy6162@gmail.com"],
// };

// let textArr = JSON.stringify(users);
// let copyArr = JSON.parse(textArr);

// console.log("--------------------");
// users.emails.push("pagemixpage@nate.com");
// users.age = 31;

// console.log(copyArr);
// console.log(users);

// const arr1 = [1, 2, 3, 4, 5];

// const sum = arr1.reduce((stack, el) => {
//   return stack + el;
// }, 1);

// console.log(sum);

// let sum2 = 0;
// arr1.forEach(function (el) {
//   sum2 += el;
// });

// console.log(sum2);
function a(callback) {
  setTimeout(() => {
    console.log("A");
    callback();
  }, 1000);
}

function b(callback) {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 1000);
}

function c(callback) {
  setTimeout(() => {
    console.log("C");
    callback();
  }, 1000);
}
function d(callback) {
  setTimeout(() => {
    console.log("D");
    callback();
  }, 1000);
}

a(function () {
  b(() => {
    c(() => {
      d(() => {
        console.log("D끝남");
      });
    });
  });
});
