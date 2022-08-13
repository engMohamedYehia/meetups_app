import MeetingList from "../components/meetings/MeetingList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/";
import { useDispatch } from "react-redux/";
import { favactions } from "../store/fav-slice";

function AllMeetings() {
  const dispatch = useDispatch();
  const [isloading, setIsloading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [favdata, setFavedata] = useState([]);

  useEffect(() => {
    setIsloading(false);
    dispatch(favactions.setButtonMain());

    fetch(
      "https://react-meetups-897f3-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const allData = [];
        for (const key in data) {
          allData.push(data[key]);
        }
        setIsloading(true);
        setFetchedData(allData);
      });
  }, []);

  function Loading() {
    return (
      <section>
        <h1>Loading ....</h1>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
      {isloading ? (
        <MeetingList
          datas={fetchedData}
          favdata={favdata}
          buttonname="Add to Favourites"
        />
      ) : (
        Loading()
      )}
    </div>
  );
}
export default AllMeetings;
