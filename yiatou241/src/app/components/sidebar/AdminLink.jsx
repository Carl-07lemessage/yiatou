'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react';


export function AdminLink({ href, icone, counter, children }) {
    const pathname = usePathname();

        // Normalise les chemins pour une comparaison cohérente
        const normalizedPathname = pathname.replace(/\/+$/, '');  // Supprime les barres obliques finales
        const normalizedHref = href.replace(/\/+$/, ''); 

    // Vérifie si le lien est actif pour la page ou une sous-page
    const isActive =
        normalizedPathname === normalizedHref || // Actif si les chemins sont exactement égaux
        (normalizedPathname.startsWith(normalizedHref) && normalizedHref !== '/'); // Actif pour les sous-pages mais pas pour la racine

    return (
        <div className="flex items-center justify-between">
            <Link href={href} legacyBehavior>
                <a
                    className={`has-icon ${isActive ? '!text-[#D5711C]' : 'text-white'
                        } md:border-0 md:hover:text-[#22AAC6]`}
                >
                    <span className="icon"><i className={icone}></i></span>
                    <span className="menu-item-label">{children}</span>
                </a>
            </Link>
            {counter != null && ( // Vérifie si counter est défini
                <p className="flex items-center text-[9px] justify-center w-6 h-5 font-semibold text-blue-800 bg-blue-200 rounded-full mr-4">
                    {counter}
                </p>
            )}
        </div>
    );
}