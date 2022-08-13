import { useState } from "react";
import classes from "./MeetingItems.module.css";
import { favactions } from "../../store/fav-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function MeetingItem({ data, buttonname }) {
  const [favdata, setFavedata] = useState([]);
  const dispatch = useDispatch();
  const buttonMainStatus = useSelector((state) => state.fav.buttonstatusMain);
  const buttondFavStatus = useSelector((state) => state.fav.buttonstatusFav);

  const [buttonclicked, isButtonClicked] = useState(false);

  const selectingFavouritesHandler = (gotData) => {
    if (!favdata.includes(gotData)) {
      setFavedata([gotData, ...favdata]);
    }
    dispatch(favactions.addtolist(gotData));
    isButtonClicked(true);
  };

  const deletingFavouritesHandler = (data) => {
    dispatch(favactions.delitem(data));
    console.log("delete");
  };
  return (
    <li className={classes.item} key={data.id}>
      <div className={classes.image}>
        <img src={data.image} />
      </div>
      <div className={classes.content}>
        <h3>{data.title}</h3>
        <address>{data.address}</address>
        <p>{data.description}</p>
      </div>

      {buttonMainStatus && (
        <div className={classes.actions}>
          <button
            style={{ background: buttonclicked ? "pink" : null }}
            onClick={() => selectingFavouritesHandler(data)}
          >
            {buttonname}
          </button>
        </div>
      )}

      {buttondFavStatus && (
        <div className={classes.actions}>
          <button
            style={{ background: buttonclicked ? "pink" : null }}
            onClick={() => {
              deletingFavouritesHandler(data);
            }}
          >
            {buttonname}
          </button>
        </div>
      )}
    </li>
  );
}

export default MeetingItem;
