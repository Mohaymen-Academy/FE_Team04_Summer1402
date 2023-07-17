function Sidebar_Parallelogram(props) {
  return (
     <a href="#"
        className="h-10 p-3 bg-gray-800 justify-center items-center -skew-x-20 inline-flex mx-1 text-2xl text-white"
      >
        <div >{props.children}</div>

    </a>
  )
}

export {Sidebar_Parallelogram};