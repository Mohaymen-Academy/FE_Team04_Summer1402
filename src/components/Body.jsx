import body from '../back.jpg'

function Body() {
  return (
    <main className='relative '>
      <div className='absolute z-10'>
      
      </div>
      <img className='absolute w-screen' src={body}/>
    </main>
  )
}

export {Body}