import { Link } from "react-router-dom"


export const NavBar = () => {
  return (
    <header className="max-w-7xl w-11/12 lg:w-4/5 flex justify-between mx-auto pt-4">

        <div>
            <span className="text-xl font-semibold">
                <Link to="/">Best IA tools</Link>
            </span>
        </div>

        <div>

            <button className="flex sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z">
                    </path>
                </svg>
            </button>
            <ul className="hidden sm:flex gap-4 ">

                <li>
                    <Link to ='/categories'>Categories</Link>
                </li>

                <li>
                    <Link>Popular</Link>
                </li>

                <li>
                    By category
                </li>

            </ul>
        </div>

        
    </header>
  )
}
