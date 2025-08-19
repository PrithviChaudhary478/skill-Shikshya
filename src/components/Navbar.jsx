import React from 'react'

const Navbar = () => {
  return (
    <navbar>
  <div className="w-full py-3 border-b">
  <div className="flex justify-between px-20 items-center font-semibold">
    <div>
      <img src="logo.png" height={50} width={50} alt="Logo" />
    </div>
    <div className="flex xl:gap-10 md:gap-8  gap-2">
      <a href>Home</a>
      <a href>Course</a>
      <a href>About</a>
      <a href>Login</a>
      <a href>Register</a>
    </div>
    <div>
      <button className="py-2 px-6 bg-black text-white rounded-3xl font-semibold">Contact</button>
    </div>
  </div>
</div>

    </navbar>
  )
}

export default Navbar