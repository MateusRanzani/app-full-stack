import type { NextPage } from "next";
import Link from "next/link";

const NavBar: NextPage = () => {
  
  return (
    <nav>
      <ul className="flex justify-between items-center p-3">
        <li>
          <Link href="/">
            <button className="px-4 py-1  text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              TEACH OTHER
            </button>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <Link href="/profile">
              <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                PROFILE
              </button>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                SEARCH
              </button>
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default NavBar;
