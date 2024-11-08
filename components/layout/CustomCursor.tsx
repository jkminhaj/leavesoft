"use client";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorHovering, setIsCursorHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleCursorHover = () => {
    setIsCursorHovering(true);
  };

  const handleCursorLeave = () => {
    setIsCursorHovering(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const clickableElements = document.querySelectorAll("a, .cursor-pointer");

    clickableElements.forEach((clickableElement) => {
      clickableElement.addEventListener("mouseenter", handleCursorHover);
      clickableElement.addEventListener("mouseleave", handleCursorLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      clickableElements.forEach((clickableElement) => {
        clickableElement.removeEventListener("mouseenter", handleCursorHover);
        clickableElement.removeEventListener("mouseleave", handleCursorLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`mouse-cursor cursor-outer ${
          isCursorHovering ? "cursor-hover" : ""
        }`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
      <div
        className={`mouse-cursor cursor-inner ${
          isCursorHovering ? "cursor-hover" : ""
        }`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
