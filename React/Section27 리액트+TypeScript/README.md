### 392. 타입스크립트 왜 사용할까

- 타입스크립트는 자바스크립트의 "슈퍼셋(superset)" 언어이다.

  - 자바스크립트를 기반으로 더 확장된 프로그래밍 언어

  - 장적 타입의 특징을 갖는다.

  - 브라우저에서는 타입스크립트가 실행되지 않으므로 타입스크립트를 자바스크립트 형태로 컴파일 한다.

  ```typescript
  function add(a:number, b: number){
      return a + b;
  }

  const result = add('2','5'); // 타입 error 발생
  ```

---

#### 395. 기본 타입 탐색하기

- 기본형(primitives) 타입 :  number, string, boolean, null, undefined

- 더 복잡한 타입들 : arrays, objects

- 그 외 : Function types(함수 타입), parmeters(매개변수)

```typescript
// Primitives(기본형)
let age: number; // 변수 선언 : 뒤로 타입 선언
let userName: string;
let isInstructor: boolean;
```

---

#### 396. 배열 및 객체 타입 작업하기

- arrays, objects

```typescript
// More complex types
let hobbies: string[];
hobbies = ['Sports','Cooking'];

//let person; // 객체 타입. 따로 타입을 명시하지 않아도 any라는 타입으로 지정 실행됨
// 객체타입 명시하는 법
let person:{
    name: string;
    age: number;
};
person={
    name:'Max',
    age:32
};

// 객체 배열
let people:{
    name: string;
    age: number;
}[];
```

---

#### 397. 타입 추론 이해하기

- 명시적인 타입 표기가 없어도 타입을 유추하여 알아내려함

- 변수 선언시 특별히 타입을 명시하지 않아도 할당된 값의 자료형으로 타입을 본다

```typescript
// Type inference
let course = 'React - The Complete Guide'
course = 12341; // 오류발생! => string타입에 숫자가 들어갈 수 없기 때문
```

---

#### 398. 유니온 타입 사용하기

- 유니온(union) 타입 : 여러 타입 저장하기

- ex) 한 변수에 문자열과 숫자를 저장해야 되는 경우, 서로 다른 형태의 객체를 동일한 변수에 저장해야 할 경우

```typescript
let course: string | number | boolean = 'React - The Complete Guide'
course = 12341; // 오류 발생X, 유니온 타입으로 해 타입을 명시해줬기 때문
```

---

#### 399. Type Aliases의 이해

- 동일한 타입을 반복해서 정의하는 일이 많을 때 사용

- 직접 베이스가 되는 타입을 만들어 거기에 복잡한 타입을 정의해 두고 그 타입 별칭(Type Alias)을 사용한다.

- type 키워드 뒤에 원하는 이름을 명시하여 새로운 타입으로 사용한다.

- TypeScript에만 존재하는 기능이기 때문에  자바스크립트로 컴파일 하면 코드에서 사라진다.

```typescript
type Person = {
    name: string;
    age: number;
};

let person : Person;
person = {
    name:'Max',
    age: 32
};

let peoples: Person[];
```

---

#### 400. 함수 및 함수 유형

- Function types(함수 타입)

- 함수를 사용할 때 타입을 지정하는 위치가 따로 있다.

```typescript
// Functions & types
function add(a:number,b:number):number { // 맨뒤 타입은 반환값 타입(자동으로 지정되므로 생략가능)
    return a+b;
}

function printOutput(value: any){
    console.log(value);
}
```

---

#### 401. 제너릭으로 뛰어들다

- Generics

```typescript
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray =[1,2,3];
const updateArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a','b','c'],'d');
```

---

#### 403. 리액트+TypeScript 프로젝트 만들기

- TypeScript기반 프로젝트 생성하기

```
npx create-react-app my-app --template typescript
```

```
yarn create react-app my-app --template typescript
```

- 프로젝트에 TypeScript 추가하기

```
npm install --save-dev typescript
```

```
yarn add --dev typescript
```

- TypeScript를 설치하면 `tsc` 명령어에 접근할 수 있습니다. 설정을 하기 전에 `package.json`파일`"script"`부분에 `"tsc"`를 추가

```
{
  // ...
  "scripts": {
    "build": "tsc",
    // ...
  },
  // ...
}
```

- TypeScript 컴파일러 설정하기

```
npx tsc --init
```

```
yarn run tsc --init
```

- TypeScript 실행하기

```
npm run build
```

```
yarn build
```

---

