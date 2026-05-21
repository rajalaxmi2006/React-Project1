import "./App.css";
import Card from "./components/Cards.jsx";
import users from "./data.js";

const App = () => {
  function handleClick() {
    alert("You've gained 1 follower !!!");
  }

  return (
    <>
      <h1>React Components</h1>
      <div className="container">
        {users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            dob={user.dob}
            src={user.src}
            click={() => handleClick(user.name)}
          />
        ))}
        {/* <Card
          name={"Pramod"}
          dob={"21.08.2001"}
          click={handleClick}
          src="https://media.licdn.com/dms/image/v2/D5603AQHAP4gynqQkgQ/profile-displayphoto-scale_200_200/B56Z4vY8fuGoAc-/0/1778911531392?e=1780531200&v=beta&t=_1wGK-c7RvF_OL6ubuGfi4HDMpP54FmEhu20qdc9o4w"
          alt="profile_pic"
        />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </>
  );
};

export default App;