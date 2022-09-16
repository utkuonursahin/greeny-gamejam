const TimelineNav = ({day, setDay}) => {
  const determineSelect = e => {
    if (e.target.classList.contains("timeline__nav-list")) return;
    setDay(+e.target.dataset.date);
  }
  return (
    <nav className="timeline__nav">
      <ul className={`timeline__nav-list ${day === 3 && 'left'}`} onClick={determineSelect}>
        <li className={`timeline__nav-item ${day === 1 ? 'active' : ''} ${day-1 > 0 ? 'passed' : ''}`} data-date={1}>
          <span className="date" >1.GÜN</span>
        </li>
        <li className={`timeline__nav-item ${day === 2 ? 'active' : ''} ${day - 2 > 0 ? 'passed' : ''}`} data-date={2}>
          <span className="date">2.GÜN</span>
        </li>
        <li className={`timeline__nav-item ${day === 3 ? 'active' : ''}`} data-date={3}>
          <span className="date">3.GÜN</span>
        </li>
      </ul>
    </nav>
  );
};

export default TimelineNav;
