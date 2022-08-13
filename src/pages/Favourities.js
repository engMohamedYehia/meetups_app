import MeetingList from "../components/meetings/MeetingList";
import { useSelector, useDispatch } from "react-redux/";
import { favactions } from "../store/fav-slice";
import { useEffect } from "react";

function Favourities() {
  const favlist = useSelector((state) => state.fav.favList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favactions.setButtonFav());
  }, []);

  return <MeetingList datas={favlist} buttonname="Remove" />;
}
export default Favourities;
