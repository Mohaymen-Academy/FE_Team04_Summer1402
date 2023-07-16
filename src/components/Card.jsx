function Card(props) {
  return (

    <div>
      <img src={props.img} alt={props.alt} />
      <h4>{props.header}</h4>
      <p>{props.details}</p>
    </div>

  );
}

export { Card };
