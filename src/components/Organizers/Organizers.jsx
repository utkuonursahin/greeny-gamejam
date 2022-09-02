import Organizer from "./Organizer/Organizer";

function Organizers() {
  return (
    <section className="organizers" id="organizers">
      <h1 className="organizers__heading heading-1" >Organizatörler</h1>
      <Organizer logo='assets/metu-logo.svg'
                 instagram='link' discord='link'
                 linkedin='link' twitter='link'/>

      <Organizer logo='assets/gazi-logo.svg' youtube='link'
                 instagram='link' discord='link'
                 linkedin='link' twitter='link'/>

      <Organizer logo='assets/ott-logo.svg' youtube='link'
                 instagram='link' discord='link'
                 linkedin='link' twitter='link'/>

      <Organizer logo='assets/baskent-logo.svg'
                 instagram='link' linkedin='link'/>
    </section>
  );
}

export default Organizers;