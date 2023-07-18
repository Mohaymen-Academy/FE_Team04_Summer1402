import { cva } from "class-variance-authority";

const parallelogramVariant = cva(
  "-skew-x-20 inline-flex justify-center items-center transition mx-1 cursor-pointer",
  {
    variants: {
      bgColor: {
        red: "bg-red-500 hover:bg-red-600 active:bg-red-500 text-white",
        solid:
          "bg-balck border border-gray-600 border-solid hover:bg-gray-950 active:bg-gray text-gray-400 px-2",
      },
    },
    defaultVariants: {
      bgColor: "red",
    },
  }
);

function Parallelogram({ bgColor, className, href, onClick, children }) {
  return (
    <a
      className={parallelogramVariant({ bgColor, className })}
      href={href}
      onClick={onClick}
    >
      <div className="skew-x-20">{children}</div>
    </a>
  );
}

export default Parallelogram;
