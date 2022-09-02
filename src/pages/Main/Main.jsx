import Hero from "../../components/Hero/Hero";
import Separator from "../../components/Separator/Separator";
import Organizers from "../../components/Organizers/Organizers";
import Timeline from "../../components/Timeline/Timeline";

const Main = () => {
  return (
    <main className="main">
      <Hero/>
      <Separator to="organizers"/>
      <Organizers/>
      <Separator to="timeline"/>
      <Timeline/>
    </main>
  );
};

export default Main;
