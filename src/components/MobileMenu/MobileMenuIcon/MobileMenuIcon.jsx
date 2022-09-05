function MobileMenuIcon({setIsClicked}) {
  return (
    <label htmlFor="menu" className="mobile-menu-icon">
      <input id="menu" type="checkbox" className="mobile-menu-icon__checkbox" onChange={()=>setIsClicked(prev => !prev)}/>
      <span className="mobile-menu-icon__line"></span>
    </label>
  );
}

export default MobileMenuIcon;