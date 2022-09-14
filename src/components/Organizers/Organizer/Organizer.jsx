function Organizer(props) {
  return (
    <div className="organizer">
      <img src={props.logo} alt="organizer-logo" />
      <div className="organizer__links">
        {props.itch && <a href={props.itch} target="_blank" rel="noreferrer"><img src="assets/itchio.svg" alt="itch icon"/></a>}
        {props.youtube && <a href={props.youtube} target="_blank" rel="noopener noreferrer"><img src="assets/youtube.svg" alt="youtube icon"/></a>}
        {props.instagram && <a href={props.instagram} target="_blank" rel="noopener noreferrer"><img src="assets/instagram.svg" alt="instagram icon"/></a>}
        {props.discord && <a href={props.discord} target="_blank" rel="noopener noreferrer"><img src="assets/discord.svg" alt="discord icon"/></a>}
        {props.linkedin && <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><img src="assets/linkedin.svg" alt="linkedin icon"/></a>}
        {props.twitter && <a href={props.twitter} target="_blank" rel="noopener noreferrer"><img src="assets/twitter.svg" alt="twitter icon"/></a>}
        {props.facebook && <a href={props.facebook} target="_blank" rel="noopener noreferrer"><img src="assets/facebook.svg" alt="facebook icon"/></a>}
      </div>
    </div>
  );
}

export default Organizer;