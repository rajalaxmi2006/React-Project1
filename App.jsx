import "./App.css";
import Card from "./components/Cards";

const App = () => {

  function handelClick(){
    alert ("You have got 1 connection!!");
  }
  return (
    <div className="container">

      <div className="card1">
        <Card name="Rajalaxmi" age={25} onclick={handelClick} src ="https://media.licdn.com/dms/image/v2/D5603AQGotsNPHBAp4g/profile-displayphoto-crop_800_800/B56Z4w.I_tIQAM-/0/1778938057638?e=1781136000&v=beta&t=oxbdv3T6BpR0xMrbsNPpQ8oe7eGRKqFGAXaE1BKHTL0"/>
      </div>

      <div className="card2">
        <Card />
      </div>

      <div className="card3">
        <Card />
      </div>

    </div>
  );
};

export default App;