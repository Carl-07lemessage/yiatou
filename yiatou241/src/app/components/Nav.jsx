"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isNotificationMenuOpen, setNotificationMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="container-fluid bg-gray-50 min-h-screen ">
      {/* Navbar Header */}
      <div className="navbar-header flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg mb-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Menu Toggle */}
          <button
            type="button"
            className="text-xl p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
          </button>
          <h4 className="text-2xl font-semibold text-gray-800 uppercase">
            Bienvenue
          </h4>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          {/* Notification Menu */}
          <div className="relative">
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setNotificationMenuOpen(!isNotificationMenuOpen)}
              aria-haspopup="true"
              aria-expanded={isNotificationMenuOpen}
            >
              <Icon icon="solar:bell-bing-bold-duotone" className="text-xl align-middle" />
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            {isNotificationMenuOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-3 space-y-2 max-h-72 overflow-y-auto">
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
                  <div key={idx} className="flex items-center py-3 border-b">
                    <img
                      src="assets/images/users/avatar-3.jpg"
                      className="w-8 h-8 rounded-full me-2"
                      alt="avatar"
                    />
                    <div>
                      <p className="font-medium">Jacob Gines</p>
                      <p className="text-sm text-gray-600">A répondu à votre commentaire.</p>
                    </div>
                  </div>
                ))}
                <div className="text-center pt-3">
                  <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    Voir toutes les notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings Button */}
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Settings"
          >
            <Icon icon="solar:settings-bold-duotone" className="text-xl align-middle" />
          </button>

          {/* Clock Button */}
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Clock"
          >
            <Icon icon="solar:clock-circle-bold-duotone" className="text-xl align-middle" />
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center space-x-2"
              onClick={() => setUserMenuOpen(!isUserMenuOpen)}
              aria-haspopup="true"
              aria-expanded={isUserMenuOpen}
            >
              <img
                src="assets/images/users/avatar-3.jpg"
                className="w-8 h-8 rounded-full"
                alt="avatar"
              />
              <span className="font-medium text-gray-800">Gaston</span>
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 space-y-2">
                <h6 className="text-gray-600 text-sm">Bienvenue Gaston!</h6>
                <a href="pages-profile.html" className="flex items-center gap-2 text-gray-800">
                  <Icon icon="bx:user-circle" />
                  Profile
                </a>
                <a href="apps-chat.html" className="flex items-center gap-2 text-gray-800">
                  <Icon icon="bx:message-dots" />
                  Messages
                </a>
                <a href="auth-signin.html" className="flex items-center gap-2 text-red-600">
                  <Icon icon="bx:log-out" />
                  Deconnexion
                </a>
              </div>
            )}
          </div>

          {/* Search Form */}
          <form className="relative flex justify-evenly items-center">
            <input
              type="search"
              className="py-2 px-4 rounded-lg border border-gray-300"
              placeholder="Search..."
              autoComplete="off"
            />
            <Icon
              icon="solar:magnifer-linear"
              className="absolute top-3 left-3 mr-4 text-gray-500"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
