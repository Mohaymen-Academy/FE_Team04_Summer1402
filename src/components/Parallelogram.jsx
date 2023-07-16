function Parallelogram(props) {
  return (
    <a
      className="h-20 p-6 bg-red-400 -skew-x-20 inline-flex justify-center items-center hover:bg-red-500 transition mx-1 text-2xl text-white"
      href={props.href}
    >
      <div className="skew-x-20">{props.children}</div>

    </a>
  );
}

export default Parallelogram;
