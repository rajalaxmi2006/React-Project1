import "./App.css";
import Card from "./components/Cards";

const App = () => {

  function handelClick(){
    alert ("You have got 1 connection!!");
  }
  return (
    <div className="container">

      <div className="card1">
        <Card name="Rajalaxmi" age={25} onclick={handelClick}/>
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