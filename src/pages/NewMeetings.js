import NewMeetingForm from "../components/meetings/NewMettingForm";
import  {useNavigate} from 'react-router-dom'

function NewMeetings() {
  const navigate = useNavigate()
  function postFormHandler(datameetups) {
    fetch(
      "https://react-meetups-897f3-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(datameetups),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(navigate('/'));
  }

  return (
    <div>
      <h1>New MeetingUps</h1>
      <section>
        <NewMeetingForm datameetups={postFormHandler} />
      </section>
    </div>
  );
}
export default NewMeetings;
