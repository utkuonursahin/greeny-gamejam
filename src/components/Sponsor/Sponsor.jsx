function Sponsor({type, url}) {
  return (
    <div className={`sponsor sponsor--${type}`}>
      <img src={url} alt="sponsor icon"/>
    </div>
  );
}

export default Sponsor;