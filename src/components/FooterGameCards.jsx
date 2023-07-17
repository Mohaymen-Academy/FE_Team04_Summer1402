

function FooterGameCards(props) {
  return (
   <a

      className="h-8 px-1 bg-black border border-solid border-gray-600 -skew-x-20 inline-flex justify-center items-center  mx-1 text-base text-gray-400 italic"
      href="#"
    >
      <div >{props.children}</div>

    </a>
  )
}

export {FooterGameCards}