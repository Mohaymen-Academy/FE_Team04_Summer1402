function Parallelogram(props) {
  return (
    <a
      className="h-20 p-6 bg-red-300 -skew-x-20 inline-flex justify-center items-center hover:bg-red-400 transition"
      href={props.href}
    >
      <p className="skew-x-20 text-xl">{props.text}</p>
    </a>
  );
}

export default Parallelogram;
