import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useNavigate(); // 브라우저의 검색 기록을 조작함 - 예를 들어 메뉴이동하는 메소드같은걸 보여줌

  function addMeetupHandler(meetupData) {
    fetch("https://react-getting-started-44b07-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history('/'); // replace()는 이전 페이지로 돌아가는 '뒤로가기'버튼을 비활성화
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
