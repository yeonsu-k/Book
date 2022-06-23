# Section 2: 자바스크립트

### 11. 변수 "let"과 "const" 이해하기 : 변수를 생성하는 방법

- var : 자바스크립트에서 변수를 생성( let / const )
- let : 값을 수정할 수 있는 변수 선언
- const : 절대 변하지 않는 값(상수) 선언

---
### 12. 화살표 함수

- 기본
```javascript
function myFnc(){
  ...
}
```
- 화살표 함수
```javascript
const myFnc =()=>{
  ...
}
// 인수가 하나인 경우 () 생략 가능, 그 외 인수가 없어도 ()는 꼭 써야됨.
const multiply = number =>{
	console.log(number*2);    
}
// 단순한 리턴만 하는 함수일 경우 한줄로 표현 가능
const multiply = number => number*2);
/*
위와 같은 결과임
const multiply = (number) => {
	return number*2;
}
*/
```

- 장점
  - this로 생기는 문제를 해결해줌

---

### 13. Exports와 imports

> 자바스크립트에서는 모듈 방식의 코드를 작성할 수 있는 기능이 있다. 그래서 코드를 여러 파일로 나누고 Html 파일에 올바른 순서로 코드를 가져오기만 하면된다. 
>
> 문장을 내보내고 가져오는 이 모듈이라는 것은 자바스크립트 파일 안에 있는 것으로 다른 파일에서 컨텐츠를 불러올 수 있고, 자바스크립트 파일은 그 컨텐츠가 어디에서 온 것인지 알고 있다.

- person.js

```javascript
const person = {
  name: 'Max'
}
export default person
```

- utility.js

```javascript
export const clean =()=>{...}
export const baseData = 10;
```

- app.js

```javascript
// 둘다 이름만 다를 뿐 같은 것을 가르킴.
import person from './person.js'
import prs from './person.js'
// 다른걸 가르킬 수 있기 때문에 이름을 {}안에 꼭 써줘야 함.
import {baseData} from './uitlity.js'
import {clean} from './uitlity.js'
```

