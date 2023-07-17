function Parallelogram(props) {
  return (
    <a
      className="h-20 p-6 bg-red-500 -skew-x-20 inline-flex justify-center items-center hover:bg-red-600 transition mx-1 text-2xl text-white active:bg-red-500"
      href={props.href}
      onClick={props.onClick}
    >
      <div className="skew-x-20">{props.children}</div>
    </a>
  );
}

export default Parallelogram;
