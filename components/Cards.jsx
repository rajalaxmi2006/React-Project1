const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.src} alt={props.alt} />
      <h2>Name:{props.name} </h2>
      <p>DOB: {props.dob} </p>
      <button onClick={props.click}>Follow</button>
    </div>
  );
};

export default Card;