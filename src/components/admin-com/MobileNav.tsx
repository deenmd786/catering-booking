"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface MobileNavProps {
  handleLogout: () => void;
  loading: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({
  
  handleLogout,
  loading,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="text-2xl md:hidden text-[var(--button)] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-[var(--background-secondary)] z-50 shadow-lg text-md font-medium transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-semibold text-[var(--text-secondary)] border-b p-4">
          Dashboard Menu
        </h2>
        <Link
          href="/dashboard/profile"
          className="block text-[var(--text-primary)] p-4 border-b hover:bg-[var(--background)]"
          onClick={() => setMenuOpen(false)}
        >
          Your Profile
        </Link>
        <Link
          href="/dashboard/cart"
          className="block text-[var(--text-primary)] p-4 border-b hover:bg-[var(--background)]"
          onClick={() => setMenuOpen(false)}
        >
          Your Plate
        </Link>
        <Link
          href="/dashboard/profile-settings"
          className="block text-[var(--text-primary)] p-4 border-b hover:bg-[var(--background)]"
          onClick={() => setMenuOpen(false)}
        >
          Profile Settings
        </Link>
        <Link
          href="/dashboard/orders"
          className="block text-[var(--text-primary)] p-4 border-b hover:bg-[var(--background)]"
          onClick={() => setMenuOpen(false)}
        >
          Your Orders
        </Link>
        <Link
          href="/contact-us"
          className="block text-[var(--text-primary)] p-4 border-b hover:bg-[var(--background)]"
          onClick={() => setMenuOpen(false)}
        >
          Support
        </Link>

        {/* Logout Button */}
        <button
          onClick={() => {
            setMenuOpen(false);
            handleLogout();
          }}
          className={`block w-full text-center p-4 bg-[var(--button)] text-white hover:bg-red-600 ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </>
  );
};

export default MobileNav;