// FullscreenMenu.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Blush from './Blush';


interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const blush1Ref = useRef<SVGSVGElement>(null);
  const blush2Ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { duration: 0.5, opacity: 1, pointerEvents: 'auto', ease: 'power2.inOut' });
    } else {
      gsap.to(menuRef.current, { duration: 0.5, opacity: 0, pointerEvents: 'none', ease: 'power2.inOut' });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fullscreen-menu fixed inset-0 bg-white z-50 opacity-0 pointer-events-none"
    >
      <div className="container mt-80 mx-auto py-16 px-8">
        <ul className="text-gray-700 text-4xl font-bold">
          <li className="py-6"><a href="#">Home</a></li>
          <li className="py-6"><a href="#">Onze Diensten</a></li>
          <li className="py-6"><a href="#">Portfolio</a></li>
          <li className="py-6"><a href="#">Over Ons</a></li>
          <li className="py-6"><a href="#">Contact</a></li>
        </ul>
        <button onClick={onClose} className="fixed top-0 right-0 m-4 text-xl z-50">Close</button>
      </div>

      <Blush />
    </div>
  );
}

export default FullscreenMenu;
