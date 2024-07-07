
export default function Navbar() {
  return (
    <header>
        <nav className="flex justify-between p-4 items-center mx-6">
            <img src="/brand_logo.png" alt="brand Logo" />
            <ul className="flex gap-2 font-semibold">
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <button className="px-4 py-1 text-white rounded-md bg-red-500">Login</button>
        </nav>
    </header>
  )
}
