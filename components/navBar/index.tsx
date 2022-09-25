import type { NextPage } from "next";
import Link from "next/link";

const NavBar: NextPage = () => {
  return (
    <nav>
      <div className="navBar flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-10">
            <Link href="/">
              <div className="icon--logo">Logo</div>
            </Link>
          </div>

          <div className="mr-10">
            <Link href="/search">
              <a className="--button">EVENTOS</a>
            </Link>
          </div>
          <div className="mr-10">
            <Link href="/news">
              <a className="--button">NOTÍCIAS</a>
            </Link>
          </div>
        </div>
        <div></div>
        <div>
          <Link href="/profile">
            <a className="login--button">LOGIN</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
