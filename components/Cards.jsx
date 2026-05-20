

const Card = () => {
  return (
    <div className="card card1">

      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQGotsNPHBAp4g/profile-displayphoto-crop_800_800/B56Z4w.I_tIQAM-/0/1778938057638?e=1781136000&v=beta&t=oxbdv3T6BpR0xMrbsNPpQ8oe7eGRKqFGAXaE1BKHTL0"
        alt="profile_pic"
      />

      <div className="overlay">
       <div className="content">
        <div className="name-row">

            <h2>Sagarika Das</h2>
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