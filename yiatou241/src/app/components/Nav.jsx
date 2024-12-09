"use client"
import { useState } from 'react';
import { BsPersonCircle, BsFillBellFill } from "react-icons/bs";

export default function Navbar() {
  // État pour gérer la visibilité des menus déroulants
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const [notifications] = useState([
    { id: 1, title: 'Nouvelle notification', description: 'Bienvenue sur votre tableau de bord!' },
    { id: 2, title: 'Message reçu', description: 'Vous avez un nouveau message' },
    { id: 3, title: 'Système', description: 'Mise à jour effectuée' },
  ]);

  return (
    <div className="animate__animated animate__fadeIn min-h-full">
      <div className="navbar-header animate__animated animate__slideInDown bg-white bg-opacity-95 backdrop-blur-lg p-6 rounded-3xl shadow-lg mx-8 mt-8">
        <div className="flex items-center justify-between">
          <div className="topbar-item">
            <h4 className=" text-grey-200 font-extrabold text-xl uppercase tracking-wide mb-0">Bienvenue!</h4>
          </div>
          <div className="flex justify-center items-center gap-7">
            {/* Notifications */}
            <div className="dropdown topbar-item relative">
              <button
                className="topbar-button bg-white px-4 py-4 rounded-full relative"
                onClick={() => setShowNotifications(!showNotifications)} // Toggle notifications
              >
                <span className="avatar-sm bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center translate-x-2 duration-150 hover:rotate-12 hover:scale-125" data-icon="solar:bell-bing-bold-duotone"><BsFillBellFill /></span>
                <span className="absolute top right-2 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
              </button>
              {/* Menu des notifications (visible seulement si showNotifications est vrai) */}
              {showNotifications && (
                <div className="dropdown-menu absolute right-0 bg-white shadow-lg rounded-xl p-6 mt-4 w-72 backdrop-blur-md">
                  <div className="notification-header flex justify-between items-center pb-4 border-b-2 border-orange-200">
                    <h6 className="text-lg font-semibold">Notifications</h6>
                    <button className="text-orange-500 text-sm underline">Tout effacer</button>
                  </div>
                  <div className="notification-container max-h-80 overflow-y-auto mt-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="notification-item flex items-center gap-4 py-3 hover:bg-orange-100 rounded-lg transition-all duration-300">
                        <div className="avatar-sm bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                          {notification.title[0]}
                        </div>
                        <div className="flex-grow">
                          <p className="mb-0">
                            <span className="font-semibold">{notification.title}</span>
                            <span className="text-gray-500"> - {notification.description}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Menu utilisateur */}
            <div className="dropdown topbar-item relative">
              <button
                className="topbar-button bg-white  px-4 py-4 rounded-full"
                onClick={() => setShowUserMenu(!showUserMenu)} // Toggle menu utilisateur
              >
                <div className="avatar-sm bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center  translate-x-2 duration-150 hover:rotate-12 hover:scale-125">
                <BsPersonCircle/>
                </div>
              </button>
              {/* Menu utilisateur (visible seulement si showUserMenu est vrai) */}
              {showUserMenu && (
                <div className="dropdown-menu absolute right-0 bg-white shadow-lg rounded-xl p-6 mt-4 w-72">
                  <h6 className="dropdown-header text-lg font-semibold">Bienvenue!</h6>
                  <a href="#" className="dropdown-item py-2 text-sm flex items-center gap-2 hover:bg-orange-200 rounded-lg">
                     Profile
                  </a>
                  <a href="#" className="dropdown-item py-2 text-sm flex items-center gap-2 hover:bg-orange-200 rounded-lg">
                     Messages
                  </a>
                  <a href="#" className="dropdown-item py-2 text-sm flex items-center gap-2 hover:bg-orange-200 rounded-lg">
                    Paramètres
                  </a>
                  <div className="dropdown-divider my-4"></div>
                  <a href="#" className="dropdown-item text-red-500 py-2 text-sm flex items-center gap-2 hover:bg-orange-200 rounded-lg">
                   Déconnexion
                  </a>
                </div>
              )}
            </div>
          </div>
          <form className="app-search d-none d-md-block ms-2 flex">
          <div className="relative">
            <input
              type="search"
              className="form-control p-4 pl-10 pr-4 rounded-full bg-white bg-opacity-95 border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
              placeholder="Rechercher..."
            />
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
