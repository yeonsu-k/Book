### 17. 구조분해할당(Destructuring,구조분할)

- Destructuring : 배열의 원소나 객체의 프로퍼티를 추출해서 변수에 저장할 수 있도록 한다.
- Property : 클래스에 정의한 변수
- Method : 클래스에정의한 함수

```javascript
class Person {
  name = 'Max' 		// Property
  call =()=>{...}	// Method
}
```

- new 키워드로 클래스의 인스턴스를 생성

```javascript
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)
```

- 클래스 생성자

```javascript
class Person{
  constructor{
    this.name = 'Max';
  }
  printMyName(){
  	console.log(this.name);
  }
}
-----
const person = new Person();
person.printMyName();			// console에 "Max" 출력됨
```

- 클래스에서는 상속을 사용 가능
  - 다른 클래스에 있는 프로퍼티와 메소드를 상속하면 잠재적으로 새로운 프로퍼티와 메소드를 추가한다.

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



------

### 18. 참조형 및 원시형 데이터 타입

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