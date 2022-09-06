function Organizer({logo, itch, youtube, instagram, discord, linkedin, twitter, facebook}) {
  return (
    <div className="organizer">
      <img src={logo} alt="organizer-logo" />
      <div className="organizer__links">
        {itch && <a href={itch} target="_blank" rel="noreferrer">
          <img src="assets/itchio.svg" alt="itch icon" />
        </a>}
        {youtube && <a href={youtube} target="_blank" rel="noopener noreferrer">
          <img src="assets/youtube.svg" alt="youtube icon"/>
        </a>}
        {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer">
          <img src="assets/instagram.svg" alt="instagram icon"/>
        </a>}
        {discord && <a href={discord} target="_blank" rel="noopener noreferrer">
          <img src="assets/discord.svg" alt="discord icon"/>
        </a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src="assets/linkedin.svg" alt="linkedin icon"/>
        </a>}
        {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer">
          <img src="assets/twitter.svg" alt="twitter icon"/>
        </a>}
        {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img src="assets/facebook.svg" alt="facebook icon"/>
        </a>}
      </div>
    </div>
  );
}

export default Organizer;