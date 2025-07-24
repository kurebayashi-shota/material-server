import { useState, useEffect } from 'react'

export default function clickHandler( initial = true ) {
    const [isHidden, setIsHidden] = useState(initial);
  
    useEffect(() => {
      const handleClick = () => setIsHidden(false);

      window.addEventListener("click", handleClick);

      return () => window.removeEventListener("click", handleClick);
    }, []);

    return isHidden;
}
