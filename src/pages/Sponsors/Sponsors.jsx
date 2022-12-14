import Sponsor from "../../components/Sponsor/Sponsor";

const Sponsors = () => {
  return (
    <main className="sponsors">
      <h1 className="heading-1" >Sponsorlar</h1>
      <section className="container">
        <h2 className="heading-2 sponsors__heading--main">Ana Sponsorlar</h2>
        <Sponsor type="main" url="assets/abb-logo.svg"/>
        <Sponsor type="main" url="assets/semruk-logo.png"/>
      </section>
      <section className="container multiple">
        <h2 className="heading-2 sponsors__heading--platin">Platin Sponsor</h2>
        <Sponsor type="platin" url="assets/peak-logo.svg"/>
        <h2 className="heading-2 sponsors__heading--reward">Ödül Sponsoru</h2>
        <Sponsor type="reward" url="assets/monster-logo.svg"/>
      </section>
      <section className="container">
        <h2 className="heading-2 sponsors__heading--golden">Altın Sponsorlar</h2>
        <Sponsor type="gold" url="assets/taleworlds-logo.png"/>
        <Sponsor type="gold" url="assets/digi-logo.png"/>
      </section>
      <section className="container multiple">
        <h2 className="heading-2 sponsors__heading--silver">Gümüş Sponsor</h2>
        <Sponsor type="silver" url="assets/lost-panda-logo.png"/>
        <h2 className="heading-2 sponsors__heading--neck">Yaka Kartı Sponsoru</h2>
        <Sponsor type="neck" url="assets/magiclab-logo.png"/>
      </section>
    </main>
  );
};

export default Sponsors;
