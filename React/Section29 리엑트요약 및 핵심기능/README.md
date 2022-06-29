### 466. 리액트 작동 방식 및 컴포넌트 이해

- jsx 코드 : 자바스크립트 안의 HTML
  - 자바스크립트 구문 안의 HTML 코드는 빌드 단계를 통해서만 사용 가능.
  - 브라우저가 바로 인식을 못하고 내부적으로 변환되야 함(개발자 입장 편의성 좋음)
- 리액트 컴포넌트 :  jsx를 리턴하는 함수, 이를 이용해 리액트에게 지시할 수 있다.

```react
// App.js => 리엑트 컴포넌트
function App() {
  return <div>Hello!</div>; // JSX 코드
}
export default App; // 반드시 리턴해줘야 함
```

---

### 467. CSS클래스로 더 많은 컴포넌트 작업 및 스타일 지정

- 리엑트에서는 속성을 class가 아닌 className으로 준다.

```react
function App() {
  return <div>
    <h1>My Todos</h1>
    <div className="card">
      <h2>TITLE</h2>
      <div>
        <button>Delete</button>
      </div>
    </div>
  </div>;
}
export default App;
```

---

### 469. "props" 및 동적 콘텐츠 작업하기

- props : 함수 컴포넌트가 받는 매개변수
  - element에 추가했던 속성들이 객체안에서 key-value 쌍으로 전달
- { } 쓰면 html이 아닌 자바스크립트로 인식
  - break나 if문은 입력X

```react
// App.js
import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" /> {/* Todo.js로 props 전달 */}
      <Todo text="Master React" />
      <Todo text="Explore the full React course" />
    </div>
  );
}
export default App;

// Todo.js
function Todo(props) { // props 변수명은 맘대로
  return (
    <div className="card">
      <h2>{props.text}</h2>	{/* 중괄호{ }안에 썼으므로 계산후(여기선 text 내용 가져옴) 출력 */}
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}
export default Todo;
```

---

### 470. 이벤트 처리하기

```react
function Todo(props) {
  function deleteHandler(){
    console.log("Clicked!");
  }
  return (
    <div className="card">
      ...
        <button className="btn" onClick={deleteHandler}>Delete</button> {/*함수사용 괄호X, 괄호를 입력하면 코드를 렌더링하는 도중에 실행 되기 때문 */}
      </div>
    </div>
  );
}

export default Todo;
```

---

### 472. State 소개

- useState 함수 :  react라이브러리에서 나온 함수
  - useState를 사용하면 해당 어플리케이션에서 사용하고자 하는 상태들을 등록할 수 있다.
    - 리액트는 상태전환에 반응해서 현재 활성화된 상태에 다른 결과물을 렌더링 할 수 있게 한다.

```react
import { useState } from 'react'
```

-  리엑트 훅을 사용하기 위해서 함수 시작에 선언한다.
  - useState를 호출하면 state 리액트가 생성 -> 이 state에 초기값을 줄 수 있음

```react
import {useState} from 'react';

function Todo(props) {
  useState(false); // 리엑트 훅을 사용하기 위해서 함수 시작에 선언, 초기값으로 false를 줌
  
  function deleteHandler(){ ... }
  ...
}
  
export default Todo;
```

- useState는 항상 배열을 리턴한다.  이게 useState가 작동하는 방식이다. 항상 두개의 element를 가진 배열을 반환한다.

  - 첫번째는 현재 stat의 snapshot, 두번째는 state값을 변경할  수 있게 하는 함수이다.

  > 리액트는 state변경함수를  호출 할 때마다 이 state가 속해있는 컴포넌트 함수를 재실행해서 코드를 재검증 한다. 그렇게 되면 화면에 렌더닝된 내용을 업데이트하고 이를 통해 최신 state 값을 가져와서 state에 따라 다른 결과물을 렌더링한다.

```react
const [modalIsOpen, setModalIsOpen ] = useState(false);
```



