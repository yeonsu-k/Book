### 17. 구조분해할당(Destructuring,구조분할)

- Destructuring : 배열의 원소나 객체의 프로퍼티를 추출해서 변수에 저장할 수 있도록 한다.
- [Spread](https://github.com/yeonsu-k/Book/blob/main/React/Section2%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/Section2(14~16).md#16-%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C-%EB%B0%8F-%EB%82%98%EB%A8%B8%EC%A7%80-%EC%97%B0%EC%82%B0%EC%9E%90)는 모든 원소와 프로퍼티를 가져와서 새 배열이나 객체 또는 어떤 것에 전달하는 반면 Destructuring은 원소나 프로퍼티를 하나만 가져와서 변수에 저장한다.

```javascript
/* Array Destructuring */
[a,b] = ['Hello','Max']
console.log(a) // Hello
console.log(b) // Max
/* Object Destructuring */
{name} = {name:'Max',age:28}
console.log(name) // Max
console.log(age) // undefinded
```



------

### 18. 참조형 및 원시형 데이터 타입

<span style='bckground-color. #fff5b1'>안녕</span>

- ES6

```javascript
class Human {
  construnctor(){
    this.gender = 'male';
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor{
    super();					// 반드시 써줘야 됨.
    this.name = 'Max';
    this.gende = 'female';
  }
  printMyName(){
  	console.log(this.name);
  }
}
-----
const person = new Person();
person.printMyName();			// "Max" 출력
person.printGender();			// "female" 출력
```

- ES7

```javascript
class Human {
  this.gender = 'male';
  printGender = () => {
    console.log(this.gender);
  }
}
class Person extends Human {
    name = 'Max';
    gende = 'female';

  printMyName = () => {
  	console.log(this.name);
  }
}
-----
const person = new Person();
person.printMyName();			// "Max" 출력
person.printGender();			// "female" 출력
```



------

### 19. Refereshing Array Functions

-  ...  : 점 3개로 이루어진 연산자로 어디에 사용하는지에 따라 **스프레드** 또는 **레스트**라고 부른다.
-  Spread(스프레드) : 배열의 원소나 객체의 프로퍼티를 나누는데 사용. 배열이나 객체를 펼처둠.

```javascript
const newArray = [...oldArray,1,2] // oldArray배열에 있는 모든 원소들과 원소 1,2를 더 추가한 새 배열
const new Obeject = {...oldObject, newProp: 5} // oldObject의 모든 프로퍼티와 값을 꺼내서 새 객체의 키 값으로 추가
// 참고로 oldObject가 새로운 프로퍼티를 가지게 된다면 'newProp: 5' 로 덮어짐.
/*
let testObj = {
    name : 'kook',
    age : 28,
};

console.log(testObj); // {name: "kook", age: 28}

testObj.newProp = 'new prop';
console.log(testObj); // {name: "kook", age: 28, newProp: "new prop"}
*/
```

```javascript
const person = {
  name : 'Max'
};

consnt newPerson = {
  ...person,
  age : 28
}
console.log(newPerson); 
/* 출력결과
[object Object] {
age: 282,
name: "Max"
}
*/
```



- Rest(레스트) : 함수의 인수 목록을  배열을 합치는데 사용

```javascript
function sortArgs(...args) { // 매개변수의 개수 제한없이 받을 수 있음.
  return args.sort()
}
```