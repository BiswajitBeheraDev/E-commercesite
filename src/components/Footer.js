'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/about" className="text-sm hover:underline">About</a>
          <a href="/contact" className="text-sm hover:underline">Contact</a>
          <a href="/privacy" className="text-sm hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
