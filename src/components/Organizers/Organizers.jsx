import Organizer from "./Organizer/Organizer";

function Organizers() {
  return (
    <section className="organizers" id="organizers">
      <h1 className="organizers__heading heading-1" >Organizatörler</h1>
      <Organizer logo='assets/metu-logo.svg' itch='#' instagram='#'
                 discord='#' linkedin='#' twitter='#'/>

      <Organizer logo='assets/gazi-logo.svg' youtube='#' instagram='#'
                 discord='#' linkedin='#' twitter='#'/>

      <Organizer logo='assets/ott-logo.svg' youtube='#' instagram='#'
                 discord='#' linkedin='#' facebook='#'/>

      <Organizer logo='assets/baskent-logo.svg' instagram='#' linkedin='#'/>
    </section>
  );
}

export default Organizers;