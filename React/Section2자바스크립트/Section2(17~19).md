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

- 기본형 : number, string, boolean
- 참조형 : 객체, 배열

```javascript
// 객체 참조가 아닌 값 복사하는 법 : 스프레드 사용하기
const person = {
  name: 'Max'
};

const secondPerson = {
  ...person
};
person.name = 'Manu';
console.log(secondPerson); // Max 출력
```



------

### 19. Refereshing Array Functions

-  map() 함수 : 예전의 값을 새 값으로 반환.

```javascript
const numbers = [1,2,3];
const doubleNumArray = numbers.map((num)=>{
  return num*2;
});
console.log(numbers);			// [1,2,3]
console.log(doubleNumArray);	// [2,4,6]
```

- 그 외 Array 함수들 : find() , findIndex() , filter() , reduce() , concat() , slice() , splice() 등