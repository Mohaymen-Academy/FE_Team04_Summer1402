function FooterGameCards(props) {
  return (
    <a
      className="h-8 px-1 bg-black border border-solid border-gray-600 -skew-x-20 flex w-24 justify-center items-center  mx-1 text-base text-gray-400 italic"
      href="#"
    >
      <div className="skew-x-20">{props.children}</div>
    </a>
  );
}

export { FooterGameCards };
