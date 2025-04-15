"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">ThuglifeScientist</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/damak-ko-developer"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-steel-blue transition-colors"
            >
              Damak Ko Developer
            </Link>
            <Link
              href="/projects-and-missions"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-steel-blue transition-colors"
            >
              Projects and Missions
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-steel-blue focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <Link
              href="/damak-ko-developer"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steel-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Damak Ko Developer
            </Link>
            <Link
              href="/projects-and-missions"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steel-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects and Missions
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
