function Card(props) {
  return (
    <div className="space-y-3 text-left bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={props.img} alt={props.alt} className="w-full" />
      <h2 className="px-6 py-2 text-2xl">{props.header}</h2>
      <p className="px-6 pb-6">{props.details}</p>
    </div>
  );
}

export { Card };
