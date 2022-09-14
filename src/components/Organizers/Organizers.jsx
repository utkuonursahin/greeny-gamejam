import Organizer from "./Organizer/Organizer";

function Organizers() {
  return (
    <section className="organizers" id="organizers">
      <h1 className="organizers__heading heading-1" >Organizatörler</h1>
      <Organizer logo='assets/metu-logo.svg' itch='https://metugates.itch.io/' instagram='https://www.instagram.com/metugates/'
                 discord='https://discord.gg/eKE8gcsrqp' linkedin='https://www.linkedin.com/company/metugates/'
                 twitter='https://twitter.com/metugates?t=IEZ2w2rLYi_ikgZ6B_dxSg&s=09'/>

      <Organizer logo='assets/gazi-logo.svg' youtube='https://m.youtube.com/channel/UCYl1IKFPt9mQwQgc5xXvITQ' instagram='https://www.instagram.com/gazidott/'
                 discord='' linkedin='https://tr.linkedin.com/company/dottgazi' twitter='https://twitter.com/gazidott'/>

      <Organizer logo='assets/ott-logo.svg' youtube='https://youtube.com/channel/UCcVRxAKUuyPlf_ZfxNyo0QA' instagram='https://www.instagram.com/odtutasarim/'
                 discord='https://discord.gg/bBpfd8GF' linkedin='https://www.linkedin.com/company/odt%C3%BCtasar%C4%B1m/'
                 facebook='https://www.facebook.com/odtutasarim/'/>

      <Organizer logo='assets/baskent-logo.svg' instagram='https://www.instagram.com/baskentbt/' linkedin='https://www.linkedin.com/company/baskentbt/'/>
    </section>
  );
}

export default Organizers;