import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const NavBar: NextPage = () => {
  const macbookIphone = require("../public/src/iconlogo.png");

  return (
    <nav>
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center">
          <div className="mr-6">
            <Link href="/">
              <a>
                <Image src={macbookIphone} width="40" height="40" />
              </a>
            </Link>
          </div>

          <div className="mr-3">
            <Link href="/">
              <button className="px-4 py-1 text-sm  text-[#04D361] font-semibold rounded-full border border-[#04D361][0.05] hover:text-white hover:bg-[#04D361] hover:border-transparent focus:outline-none  ">
                DENUNCIA
              </button>
            </Link>
          </div>
          <div className="mr-3">
            <Link href="/search">
              <button className="px-4 py-1 text-sm  text-[#04D361] font-semibold rounded-full border border-[#04D361][0.05] hover:text-white hover:bg-[#04D361] hover:border-transparent focus:outline-none  ">
                EVENTOS
              </button>
            </Link>
          </div>
          <div className="mr-3">
            <Link href="/">
              <button className="px-4 py-1 text-sm  text-[#04D361] font-semibold rounded-full border border-[#04D361][0.05] hover:text-white hover:bg-[#04D361] hover:border-transparent focus:outline-none  ">
                NOTÍCIAS
              </button>
            </Link>
          </div>
        </div>
        <div></div>
        <div>
          {" "}
          <Link href="/profile">
            <button className="px-4 py-1 text-sm  text-[#04D361] font-semibold rounded-full border border-[#04D361][0.05] hover:text-white hover:bg-[#04D361] hover:border-transparent focus:outline-none  ">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
