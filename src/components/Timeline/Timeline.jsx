import TimelineNav from "./TimelineNav/TimelineNav";
import {useState} from "react";

function Timeline() {
  const [day, setDay] = useState(1);
  return (
    <section className="timeline" id="timeline">
      <h2 className="heading-1">
        Etkinlik Planı
      </h2>
      <TimelineNav day={day} setDay={setDay}/>
    </section>
  );
}

export default Timeline;