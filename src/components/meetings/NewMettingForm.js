import classes from "./NewMettingForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function NewMeetingForm(propes) {
  const inputTitleRef = useRef();
  const inputImageRef = useRef();
  const inputAdressRef = useRef();
  const inputDescriptionRef = useRef();

  function submissionHandler(event) {
    event.preventDefault();
    const getinputTitleRef = inputTitleRef.current.value;
    const getinputImageRef = inputImageRef.current.value;
    const getinputAdressRef = inputAdressRef.current.value;
    const getinputDescriptionRef = inputDescriptionRef.current.value;

    const MeetUp_DATA = {
      title: getinputTitleRef,
      image: getinputImageRef,
      adress: getinputAdressRef,
      description: getinputDescriptionRef,
    };

    propes.datameetups(MeetUp_DATA);
    
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submissionHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={inputTitleRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={inputImageRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="adress">Adress</label>
          <input type="text" required id="adress" ref={inputAdressRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
            id="adress"
            rows="5"
            ref={inputDescriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add MeetUp</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetingForm;
