import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
  <div className="flex justify-center gap-4 p-4 bg-red-400 text-white">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        </div>
  )
}

export default Navbar