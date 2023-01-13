const TheHeader = () => {
  return (
    <header className="flex justify-between items-center text-xl text-earth-100 p-1 bg-earth-400">
      <div className="mx-2">SSK</div>
      <ul className="flex items-center m-2">
        <li className="mx-2 cursor-pointer">About</li>
        <li className="mx-2 cursor-pointer">Project</li>
        <li className="mx-2 cursor-pointer">Contract</li>
      </ul>
    </header>
  )
}

export default TheHeader
