"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isNotificationMenuOpen, setNotificationMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container-fluid bg-gray-50">
      {/* Navbar Header */}
      <div className="navbar-header flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden text-xl p-2 rounded-lg hover:bg-gray-100 transition-transform duration-300"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Icon icon="solar:hamburger-menu-broken" className="align-middle" />
          </button>
          <h4 className="text-2xl font-semibold text-gray-800 uppercase transition-colors duration-300 hover:text-blue-600">
            Bienvenue
          </h4>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Notification Menu */}
          <NotificationMenu
            isOpen={isNotificationMenuOpen}
            toggleMenu={() => setNotificationMenuOpen(!isNotificationMenuOpen)}
          />

          {/* Settings Button */}
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Settings"
          >
            <Icon icon="solar:settings-bold-duotone" className="text-xl align-middle transition-transform duration-300 hover:scale-110" />
          </button>

          {/* Clock Button */}
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Clock"
          >
            <Icon icon="solar:clock-circle-bold-duotone" className="text-xl align-middle transition-transform duration-300 hover:scale-110" />
          </button>

          {/* User Dropdown */}
          <UserDropdown
            isOpen={isUserMenuOpen}
            toggleMenu={() => setUserMenuOpen(!isUserMenuOpen)}
          />

          {/* Search Form */}
          <SearchForm />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md rounded-lg mt-2 py-4 px-6 space-y-4 transition-all duration-300">
          {/* Search Form */}
          <SearchForm />

          {/* Notification Menu */}
          <NotificationMenu
            isOpen={isNotificationMenuOpen}
            toggleMenu={() => setNotificationMenuOpen(!isNotificationMenuOpen)}
          />

          {/* User Dropdown */}
          <UserDropdown
            isOpen={isUserMenuOpen}
            toggleMenu={() => setUserMenuOpen(!isUserMenuOpen)}
          />

          {/* Settings and Clock */}
          <div className="flex justify-between">
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              aria-label="Settings"
            >
              <Icon icon="solar:settings-bold-duotone" className="text-xl align-middle transition-transform duration-300 hover:scale-110" />
            </button>
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              aria-label="Clock"
            >
              <Icon icon="solar:clock-circle-bold-duotone" className="text-xl align-middle transition-transform duration-300 hover:scale-110" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Subcomponents */

// Notification Menu
function NotificationMenu({ isOpen, toggleMenu }) {
  return (
    <div className="relative">
      <button
        type="button"
        className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Icon icon="solar:bell-bing-bold-duotone" className="text-xl align-middle" />
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          3
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-3 space-y-2 max-h-72 overflow-y-auto transition-all duration-300 opacity-100">
          <div className="flex justify-between items-center">
            <h6 className="text-lg font-semibold">Notifications</h6>
            <button
              onClick={() => console.log("Clear All")}
              className="text-gray-500 text-sm"
            >
              Clear All
            </button>
          </div>
          {[1, 2].map((_, idx) => (
            <div key={idx} className="flex items-center py-3 border-b hover:bg-gray-50 transition-all duration-300">
              <img
                src="assets/images/users/avatar-3.jpg"
                className="w-8 h-8 rounded-full"
                alt="avatar"
              />
              <div>
                <p className="font-medium">Jacob Gines</p>
                <p className="text-sm text-gray-600">A répondu à votre commentaire.</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// User Dropdown
function UserDropdown({ isOpen, toggleMenu }) {
  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center space-x-2"
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img
          src="assets/images/users/avatar-3.jpg"
          className="w-8 h-8 rounded-full"
          alt="avatar"
        />
        <span className="font-medium text-gray-800">Gaston</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 space-y-2 transition-all duration-300">
          <h6 className="text-gray-600 text-sm">Bienvenue Gaston!</h6>
          <a href="pages-profile.html" className="flex items-center gap-4 text-gray-800 hover:text-blue-600 transition-colors duration-300">
            <Icon icon="bx:user-circle" />
            Profile
          </a>
          <a href="apps-chat.html" className="flex items-center gap-4 text-gray-800 hover:text-blue-600 transition-colors duration-300">
            <Icon icon="bx:message-dots" />
            Messages
          </a>
          <a href="auth-signin.html" className="flex items-center gap-4 text-red-600 hover:text-red-700 transition-colors duration-300">
            <Icon icon="bx:log-out" />
            Déconnexion
          </a>
        </div>
      )}
    </div>
  );
}

// Search Form
function SearchForm() {
  return (
    <form className="relative flex justify-between gap-3">
      <input
        type="search"
        className="py-2 px-4 w-full rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all duration-300"
        placeholder="Rechercher..."
        autoComplete="off"
      />
      <Icon icon="hugeicons:search-02" width="26" height="26" className="absolute top-2 left-48 text-gray-500" />
    </form>
  );
}
