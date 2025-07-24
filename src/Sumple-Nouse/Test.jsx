import React, { useState, useEffect, useRef } from "react";

const Test = () => {
  const [isHidden, setIsHidden] = useState(true);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      setIsHidden(false);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${isHidden ? "hidden" : ""} bg-blue-500 text-white p-4`}
    >
      表示された要素です！
    </div>
  );
};

export default Test;
