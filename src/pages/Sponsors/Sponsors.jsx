import Sponsor from "./Sponsor/Sponsor";

const Sponsors = () => {
  return (
    <main className="sponsors">
      <h1 className="sponsors__heading heading-1" >Sponsorlar</h1>
      <h2 className="sponsors__heading--main">Ana Sponsorlar</h2>
      <section className="sponsors__main">
        <Sponsor/>
        <Sponsor/>
      </section>
      <h3 className="sponsors__heading--platin">Platin Sponsorlar</h3>
      <section className="sponsors__platin">
        <Sponsor/>
        <Sponsor/>
      </section>
      <h4 className="sponsors__heading--gold">Altın Sponsorlar</h4>
      <section className="sponsors__gold">
        <Sponsor/>
        <Sponsor/>
      </section>
      <h5 className="sponsors__heading--silver">Gümüş Sponsorlar</h5>
      <section className="sponsors__silver">
        <Sponsor/>
        <Sponsor/>
      </section>
    </main>
  );
};

export default Sponsors;
