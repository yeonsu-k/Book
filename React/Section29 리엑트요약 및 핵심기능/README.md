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
  -  useState를 호출하면 state 리액트가 생성 => 이 state에 초기값을 줄 수 있음

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

---

### 474. 라우팅 추가하기(파일명 : new-starting-project)

- 라우팅 : 라우터에서 URL의 변화를 감지하고 URL에 기초하여 화면에보이는 내용을 변경해 줍니다.
- SPA(싱글 페이지 어플리케이션) : 한 페이지에 여러페이지를 이동하는 것처럼 보여지게 만듬
  - 클라이언트 측 자바스립트가 모든 걸 제어하기 때문에 새로운 페이지가 로딩될 때까지 기다리지 않아도됨

```react
// index.js
import { BrowserRouter } from 'react-router-dom';
...

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

- react-router-dom이 버전 6으로 업그레이드 되면서, Switch를 지원 안하게 됨.
  - 6버전 이전

  ```react
  // App.js
  import { Route, Switch } from "react-router-dom";

  import AllMeetupsPage from "./pages/AllMeetup";
  import NewMeetupPage from "./pages/NewMeetup";
  import FavoritesPage from "./pages/Favorites";

  function App() {
    return (
      <div>
        <Switch>
          <Route path="/" exact> {/*시작페이지*/}
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </div>
    );
  }

  export default App;
  ```


  - 6버전 이후
    - Switch => Routes	
    - component => element

  ```react
  import { Route, Routes } from "react-router-dom";

  import AllMeetupsPage from "./pages/AllMeetup";
  import NewMeetupPage from "./pages/NewMeetup";
  import FavoritesPage from "./pages/Favorites";

  function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={ <AllMeetupsPage />} exact />{/*시작페이지*/}
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    );
  }

  export default App;
  ```

---

### 475. 링크 및 탐색 추가하기(네비게이션 만들기)

- <Link>태그 : 불필요한 서버 요청을 하는 <a>태그 대신 사용 

  > <Link>태그는 <a>태그를 렌더링 하지만 내부적으로는 'react-router-dom'이 <a>태그에 클릭 리스너를 추가한다. 클릭하면 브라우저가 서버로 request하는 것을 방지하고 옮겨 가려는 경로의 URL을 해석해서 브라우저의 URL 창을 변경합니다.

  ```react
  <Link>Some Link</Link>
  ```


---

### 477. 데이터 목록 출력하기 

- 한 배열을 다른 데이터의 배열로 변환하는 방법
- .map((meetup)=>{})  :  배열 내장 함수로 배열안에 있는 값을 끄집어 냄

```react
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
	...
  },
  ...
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>{DUMMY_DATA.map((meetup) => {
        return <li key={meetup.id}>{meetup.title}</li>
      })}</ul>
    </section>
  );
}
export default AllMeetupsPage;

```

---

### 479. props.children을 사용하여 wrapper컴포넌트 만들기

- props.children : 모든 컴포넌트가 기본적으로 받아들이는 prop

```react
import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.card}>
    {props.children}
  </div>
}

export default Card;
```

---

### 481. 사용자 입력 받기 및 양식 제출 처리하기 

\# **submit**  # **form 내용 읽어오기**  # **폼 제출하기**  # **submission 처리하기**

- event.preventDefault() : 브라우저의 기본 동작을 차단하기 위해 호출
  - 아래 코드에서는 form 전송시 페이지를 리로딩 하지 않고 내부적으로 보내기 위해 코드 사용.

```react
function NewMeetupForm() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        ...
      </form>
    </Card>
  );
}

export default NewMeetupForm;
```

- form 내용 읽어오기 - 2가지

  - useState 사용 :  모든 input태그에 onChange 이벤트 리스너를 추가해서 키를 누를 때마다 함수를 트리거 한다. 그렇게 해서 사용자가 event 객체를 통해 해당 이벤트에 대해 입력한 값을 받아온다. 그리고 그 값을 state를 업데이트 한다. 이렇게 하면 사용자가 키를 누를 때마다 값을 읽을 수 있다.(submit을 누를때뿐만 아닌 input태그에 입력할 때마다 값을 읽어들일 수 있음)
  - ref (reference의 준말) : 리액트는 DOM element로 reference를 설정할 수 있게 해준다.  이를 통해 DOM element에 직접적으로 엑세스가 가능하다. refrence나 connection을 설정하려면 useRef 훅을 리액트로 부터 import 해야 한다. 하나 이상의 컴포넌트에 하나 이상의 ref를 가질 수 있다.

  ```react
  import { useRef } from "react";

  import Card from "../ui/Card";
  import classes from "./NewMeetupForm.module.css";

  function NewMeetupForm() {
    const titleInputRef = useRef();

    function submitHandler(event) {
      event.preventDefault();

      const enteredTitle = titleInputRef.current.value; //titleInputRef 연결된 값을 가져옴
      ...
    }

    return (
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
  		...
          ...
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    );
  }

  export default NewMeetupForm;
  ```

---

### 482. Http용 앱 준비하기

\# **firebase 사용**  # **DB**

---

### 483. POST 요청보내기

\# **Reaquest 보내기**  # **POST**

- fetch(인자1,인자2) : HTTP request를 보낸다.
  - 첫 번째 전달 인자 : request 보낼 URL
  - 두 번째 전달 인자 : 객체로서 fetch함수 호출과 HTTP request를 설정

```react
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch("https://react-getting-started-44b07-default-rtdb.firebaseio.com/meetups.json", {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
```

---

### 484. 프로그래밍 방식으로 탐색하기

- 브라우저 특정 주소로 데이터와함께 이동하기 : 브라우저의 검색 기록을 조작함 - 예를 들어 메뉴이동하는 메소드같은걸 보여줌
  - 버전 6 이전 : useHistory

  ```react
  import { useHistory } from "react-router-dom";

  const history = useHistory(); 
  history.replace('/'); // replace()는 이전 페이지로 돌아가는 '뒤로가기'버튼을 비활성화
  ```

  - 버전 6 이상 : useNavigate

  ```react
  import { useNavigate } from "react-router-dom";

  const history = useNavigate(); 
  history.replace('/'); // replace()는 이전 페이지로 돌아가는 '뒤로가기'버튼을 비활성화
  ```

---

### 486. useEffect() 훅 사용하기

- useEffect(함수, 배열) :  useState를 사용하면서 코드가 반복적으로 실행될 수 있는데 useEffect()를 사용하면 반복하던 코드를 실행되는 것을 제한하고 실행 조건을 설정할 수 있다. 

  - 첫번째 인자(함수) : 반복적으로 실행되던 코드를 넣음
  - 두번째 인자(배열) : 함수를 마지막으로 실행했을 때의 값과 비교

  > useEfeect는 의존성이 있어 처음으로 렌더링 되고 실행될 때만 이 함수를 실행한다. 배열이 비어있을경우([]) 이후 실행부터는 의존성이 없기 때문에 effect 함수가 실행되지 않는다. 외부 의존성을 가지게 된다면 배열안에 쓰면된다. ex) [props]

```react
import { useState, useEffect } from 'react';
```

---

### 489. 컴포넌트에서 컨텍스트 사용하기

- useContext 훅 : 컴포넌트와 context를 연결해주는 역할

```react
import { useContext } from "react";
```

