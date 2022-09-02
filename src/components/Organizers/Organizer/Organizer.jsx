function Organizer({logo, youtube, instagram, discord, linkedin, twitter}) {
  return (
    <div className="organizer">
      <img src={logo} alt="organizer-logo" />
      <div className="organizer__links">
        {youtube && <a href={youtube} target="_blank" rel="noopener noreferrer">
          <img src="assets/youtube.svg" alt="instagram icon"/>
        </a>}
        {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer">
          <img src="assets/instagram.svg" alt="instagram icon"/>
        </a>}
        {discord && <a href={discord} target="_blank" rel="noopener noreferrer">
          <img src="assets/discord.svg" alt="instagram icon"/>
        </a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src="assets/linkedin.svg" alt="instagram icon"/>
        </a>}
        {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer">
          <img src="assets/twitter.svg" alt="instagram icon"/>
        </a>}
      </div>
    </div>
  );
}

export default Organizer;