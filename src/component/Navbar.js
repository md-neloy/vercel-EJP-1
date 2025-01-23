"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <h2 className="text-[40px] font-bold text-red-600">Logo</h2>
          <ul className="flex justify-center items-center gap-3">
            <li>
              <Link href="#" className="!text-3xl font-bold text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-3xl font-bold text-black">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
