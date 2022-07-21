### 402. 타입스크립트 왜 사용할까

- 타입스크립트는 자바스크립트의 "슈퍼셋(superset)" 언어이다.
  
  - 자바스크립트를 기반으로 더 확장된 프로그래밍 언어
  
  - 장적 타입의 특징을 갖는다
  
  ```typescript
  function add(a:number, b: number){
      return a + b;
  }
  
  const result = add('2','5'); // 타입 error 발생
  ```

    https://www.typescriptlang.org/download