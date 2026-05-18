function Card({ developer, handleConnect }) {
  return (
    <div className="card">
      <div
        className="cover"
        style={{
          backgroundImage: `url(${developer.cover})`,
        }}
      ></div>

      <div className="overlay"></div>

      <div className="content">
        <img
          src={developer.image}
          alt={developer.name}
          className="profile"
        />

        <h2>{developer.name}</h2>

        <p className="role">{developer.role}</p>

        <div className="stats">
          <div>
            <h3>{developer.followers}</h3>
            <span>Followers</span>
          </div>

          <div>
            <h3>{developer.connections}</h3>
            <span>Connections</span>
          </div>
        </div>

        <div className="skills">
          {developer.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>

        <button
          onClick={() => handleConnect(developer.id)}
          className={
            developer.connected
              ? "connected-btn"
              : "connect-btn"
          }
        >
          {developer.connected
            ? "Connected ✓"
            : "Connect"}
        </button>
      </div>
    </div>
  );
}

export default Card;