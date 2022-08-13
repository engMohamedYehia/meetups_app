import MeetingItem from "./MeetingItem";
import classes from "./MeetingLists.module.css";
import Card from "../ui/Card";
import { useState } from "react";

function MeetingList({ datas, buttonname}) {
  return (
    <Card>
      <ul className={classes.list}>
        {datas.map((data, index) => {
          return <MeetingItem key={index} data={data} id={index} buttonname = {buttonname} />;
        })}
      </ul>
    </Card>
  );
}

export default MeetingList;
