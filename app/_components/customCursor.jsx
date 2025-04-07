"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    document.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("a, button, img, div").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, img, div").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Large Cursor Circle */}
      <div
        className={`fixed w-16 h-16 border-2 transition-all duration-300 ease-out rounded-full md:block ${
          hovered ? "border-orange-500 scale-125" : "border-orange-500"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 50, // Ensures cursor is always on top
          mixBlendMode: "difference", // Prevents cursor from disappearing on bright images
        }}
      ></div>

      {/* Small Center Dot */}
      <div
        className="fixed w-2 h-2 bg-orange-500 rounded-full md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 50, // Ensures cursor stays visible
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
