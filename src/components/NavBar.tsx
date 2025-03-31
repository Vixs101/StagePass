import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Calendar, Ticket, LogIn } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState(() => {
    // Retrieve from localStorage on initial render
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className="fixed w-full bg-gray-50 z-10">
      <div className="px-4 sm:px-6 md:px-16 xl:px-28">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" className="" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="ml-10 flex space-x-4 text-xl font-semibold items-center">
              <li>
                <Link
                  to="/"
                  className="hover:border-b-2 hover:border-b-[#4bf44d] px-3 py-2 rounded-md font-medium text-gray-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:border-b-2 hover:border-b-[#4bf44d] px-3 py-2 rounded-md font-medium text-gray-800"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/tickets"
                  className="hover:border-b-2 hover:border-b-[#4bf44d] px-3 py-2 rounded-md font-medium text-gray-800"
                >
                  Tickets
                </Link>
              </li>
              {user ? (
                <>
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-8 h-8 rounded-full"
                  />
                </>
              ) : (
                <Link
                  to="/login">
                  <button
                    onClick={toggleModal}
                    className="bg-gray-800 py-2 px-3 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Login
                  </button>
                </Link>
              )}

            </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-5 rounded-md text-gray-400 hover:text-white "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-8 w-8 text-gray-800" />
              ) : (
                <Menu className="block h-8 w-8 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-gray-800"
            >
              <Home className="inline-block mr-2" size={18} />
              Home
            </Link>
            <Link
              to="/events"
              className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-gray-800"
            >
              <Calendar className="inline-block mr-2" size={18} />
              Events
            </Link>
            <Link
              to="/tickets"
              className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-gray-800"
            >
              <Ticket className="inline-block mr-2" size={18} />
              Tickets
            </Link>
            {user ? (
              <>
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-8 h-8 rounded-full"
                />
              </>
            ) : (
              <Link
                to="/login">
                <button
                  onClick={toggleModal}
                  className="bg-gray-800 py-2 px-3 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}


    </nav>
  );
}