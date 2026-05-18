import "./App.css";
import { useState } from "react";
import Card from "./components/Cards";

function App() {
  const [search, setSearch] = useState("");

  const [developers, setDevelopers] = useState([
    {
      id: 1,
      name: "Rajalaxmi Biswal",
      role: "Aspiring MERN-Stack Developer",
      connections: 2500,
      followers: 12800,
      connected: false,
      skills: ["DSA", "Frontend", "MYSQL" ,"PHP", "MONGODB"],
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGotsNPHBAp4g/profile-displayphoto-scale_400_400/B56Z4w.I_tIQAk-/0/1778938057638?e=1780531200&v=beta&t=gxQw1QDU72SBN9ro2DmtWk1cE-n9JJ7yUDxtxSSpbD8",
      cover:
        "",
    },

    {
      id: 2,
      name: "Pramod Kumar Jena",
      role: "MERN Instructor",
      connections: 3500,
      followers: 18000,
      connected: false,
      skills: ["MERN-Stack", "Tech-Coach", "Instructor" , "Bussiness analytics"],
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHAP4gynqQkgQ/profile-displayphoto-scale_400_400/B56Z4vY8fuGoAg-/0/1778911531392?e=1780531200&v=beta&t=FBFnBcGipy1wCfaIPFoqGNMK1x6AGA3ZjLpSmggdxLQ",
      cover:
        "",
    },

    {
      id: 3,
      name: "Omm Prakash Das",
      role: "Aspiring MERN-stack Developer",
      connections: 2000,
      followers: 11100,
      connected: false,
      skills: ["Frontend", "DSA", "Github" ,"PHP", "Node.Js"],
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFONn4ta_yeNg/profile-displayphoto-crop_800_800/B56Z42Ws.HIEAI-/0/1779028384011?e=1780531200&v=beta&t=VBuJLEzd_YvdWBaGSVNoybGYmUe2-PHh2GVXTfjIzK8",
      cover:
        "",
    },

    {
      id: 4,
      name: "Swayam Kumar Panda",
      role: "Aspiring MERN-stack Developer",
      connections: 1500,
      followers: 12000,
      connected: false,
      skills: ["DSA", "MYSQL", "Frontned", "PHP"],
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQHxkUEflurL2w/profile-displayphoto-crop_800_800/B4EZneJ7wGHgAM-/0/1760368774757?e=1780531200&v=beta&t=YHDGsbZY2xmvlvoP_6YC7vshADJHNUeArhG2Qmr2rMQ",
      cover:
        "",
    },
  ]);

  const handleConnect = (id) => {
    setDevelopers((prev) =>
      prev.map((dev) =>
        dev.id === id
          ? {
              ...dev,
              connected: !dev.connected,
              connections: dev.connected
                ? dev.connections - 1
                : dev.connections + 1,
            }
          : dev
      )
    );
  };

  const filteredDevelopers = developers.filter((developer) =>
    developer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="bg-glow one"></div>
      <div className="bg-glow two"></div>

      <nav className="navbar">
        <div className="logo">DEVCONNECT</div>

        <input
          type="text"
          placeholder="Search developers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="menu">
          <span>Home</span>
          <span>Network</span>
          <span>Projects</span>
          <span>Messages</span>
        </div>
      </nav>

      <section className="hero">
        <h1>Explore Elite Developers</h1>

        <p>
          Build premium tech connections with modern developers and MERN stack
          creators.
        </p>
      </section>

      <section className="card-grid">
        {filteredDevelopers.length > 0 ? (
          filteredDevelopers.map((developer) => (
            <Card
              key={developer.id}
              developer={developer}
              handleConnect={handleConnect}
            />
          ))
        ) : (
          <h2 className="not-found">
            No Developer Found
          </h2>
        )}
      </section>
    </div>
  );
}

export default App;