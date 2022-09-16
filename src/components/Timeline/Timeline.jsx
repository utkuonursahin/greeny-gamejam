import {useState} from "react";
import TimelineNav from "./TimelineNav/TimelineNav";
import TimelinePlan from "./TimelinePlan/TimelinePlan";

function Timeline() {
  const [day, setDay] = useState(1);
  return (
    <section className="timeline" id="timeline">
      <h2 className="heading-1">
        Etkinlik Planı
      </h2>
      <TimelineNav day={day} setDay={setDay}/>
      <TimelinePlan day={day}/>
    </section>
  );
}

export default Timeline;