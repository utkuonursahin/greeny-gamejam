const Separator = ({to}) => {
  return (
    <div className="separator">
      <span className="separator--left"/>
      <a href={`#${to}`}>
        <svg>
          <use href="assets/sprite.svg#arrow"/>
        </svg>
      </a>
      <span className="separator--right"/>
    </div>
  );
};

export default Separator;
