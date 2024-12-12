import React, { useState, useEffect } from "react";
import classes from "./InfoBlock.module.scss";
export const InfoBlock = ({ text }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);

    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);

    setIsHovering(false);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 479);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={classes.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={classes.content}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM37.9537 17.0707L20.6214 34.4029C20.2553 34.769 19.7754 34.9521 19.2955 34.9521C18.8156 34.9521 18.3358 34.769 17.9696 34.4029L10.6307 27.0638C9.89841 26.3316 9.89831 25.1444 10.6306 24.4122C11.3629 23.68 12.5502 23.6799 13.2822 24.4122L19.2955 30.4254L35.3018 14.419C36.0341 13.6867 37.2214 13.6867 37.9536 14.419C38.6858 15.1513 38.6857 16.3385 37.9537 17.0707Z"
            fill="#E3331F"
          />
        </svg>

        <p>{text}</p>
      </div>

      {isMobile ? (
        <div className={`${classes.follower}`} />
      ) : (
        isHovering && (
          <div
            className={`${classes.follower} ${
              isVisible ? classes.visible : ""
            }`}
            style={{
              top: `${cursorPosition.y}px`,
              left: `${cursorPosition.x}px`,
            }}
          />
        )
      )}
    </div>
  );
};
