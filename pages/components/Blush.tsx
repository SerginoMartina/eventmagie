import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Blush: React.FC = () => {
  const blush1Ref = useRef<SVGSVGElement>(null);
  const blush2Ref = useRef<SVGSVGElement>(null);
  const blush3Ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const blush1 = blush1Ref.current;
    const blush2 = blush2Ref.current;
    const blush3 = blush3Ref.current;

    // Check if the references are available
    if (blush1 && blush2 && blush3) {
      // Animation logic using GSAP
      gsap.fromTo(
        [blush1, blush2, blush3],
        { opacity: 0, scale: 0 },
        { opacity: 0.8, scale: 1, duration: 1, stagger: 0.3 }
      );
    }
  }, []);

  return (
    <div className="blush-container">
      <svg ref={blush1Ref} width="300" height="300" viewBox="0 0 200 200" className="blush blush1">
        <path
          d="M10 10H20V20H10V10Z"
          fill="rgba(255, 192, 203, 0)"
        />
      </svg>
      <svg ref={blush2Ref} width="300" height="300" viewBox="0 0 200 200" className="blush blush2">
        <path
          d="M10 10H20V20H10V10Z"
          fill="rgba(255, 192, 203, 0)"
        />
      </svg>
      <svg ref={blush3Ref} width="300" height="300" viewBox="0 0 200 200" className="blush blush3">
        <path
          d="M10 10H20V20H10V10Z"
          fill="rgba(255, 192, 203, 0)"
        />
      </svg>
    </div>
  );
};

export default Blush;
