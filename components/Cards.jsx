

const Card = (props) => {
  return (
    <div className="card card1">

      <img
        src={props.src}
        alt={props.alt}
      />

      <div className="overlay">
       <div className="content">
        <div className="name-row">

            <h2>{props.name}</h2>
            <span className="verify">✔</span>

          </div>

          <p>
            Learning React and crafting modern UI ✨
          </p>

          <div className="bottom-row">
            <div className="stats">

              <span>👤 800</span>

              <span>📷 9</span>

            </div>
            <button>Follow</button>
            </div>

        </div>
      </div>

    </div>
  );
};

export default Card;