//! 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "world"];

let boolArr: Array<boolean> = [true, false];

// Array<boolean> 이 방법 보다는 number[]와 같은 방법이 더 간단해서 많이 사용

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string | boolean)[] = [1, "hello", true];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//! 튜플
let tuple1: [number, number] = [1, 2];

let tuple2: [number, string, boolean] = [1, "string", true];

// 튜플을 사용하는 경우
// 튜플은 배열과 같지만 순서와 인덱스가 보장되어야 하는 경우에 사용한다.
const users: [string, number][] = [
  ["John", 20],
  ["Jane", 21],
  // 아래는 오류 남!
  // [1, "Jane"],
];
