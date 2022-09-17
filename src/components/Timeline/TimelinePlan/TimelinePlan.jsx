function TimelinePlan({day}) {
  return (
    <div className="timeline-plan">
      <ul className={`timeline-plan__list ${day-1 > 0 ? 'passed' : ''}`}>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">13.00</span>
          <span className="text">Kapı açılışı</span>
        </li>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">13.30-14.30</span>
          <span className="text">Ice breaking oyunları</span>
        </li>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">15.00</span>
          <span className="text">Konuşmacıların çıkması</span>
        </li>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">17.00</span>
          <span className="text">Temanın açıklanması</span>
        </li>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">21.00</span>
          <span className="text">Yemeğin gelmesi</span>
        </li>
      </ul>
      <ul className={`timeline-plan__list ${day-2 > 0 ? 'passed' : ''} ${day < 2 ? 'disabled' : ''}`}>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">9.00</span>
          <span className="text">Kahvaltı</span>
        </li>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">15.00</span>
          <span className="text">Nerd quiz</span>
        </li>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">20.00</span>
          <span className="text">Yemeğin gelmesi</span>
        </li>
      </ul>
      <ul className={`timeline-plan__list ${day < 3 ? 'disabled' : ''}`}>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">17.00</span>
          <span className="text">Oyunların sona ermesi</span>
        </li>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">17.00-18.30</span>
          <span className="text">Oyunların itch.io ve drive'a yüklenmesi</span>
        </li>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">19.30</span>
          <span className="text">Oyunların sunumlarının başlaması(sunum esnasında oylama)</span>
        </li>
        <li className="timeline-plan__item">
          <span className="circle"/>
          <span className="hour">21.00</span>
          <span className="text">Sunumların bitmesi</span>
        </li>
      </ul>
    </div>
  );
}

export default TimelinePlan;