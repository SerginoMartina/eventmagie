import React from 'react';
import logo from './event-magie-lettering.svg';

const SplashScreen: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen items-center justify-center bg-white dark:bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
            <div className="jumbo absolute -inset-10 opacity-50"></div>
        </div>
        <img width="400" src={logo.src} style={{ zIndex: 99 }} alt="event lettering" />
    </div>
  );
}

export default SplashScreen;
