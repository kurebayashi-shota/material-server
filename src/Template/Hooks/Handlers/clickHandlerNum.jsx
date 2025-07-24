import { useState, useEffect } from 'react'

export default function clickHandlerNum( initial = 0 ) {
    const [isHidden, setIsHidden] = useState(initial);
  
    useEffect(() => {
      const handleClick = () => setIsHidden(prev => prev + 1);

      window.addEventListener("click", handleClick);

      return () => window.removeEventListener("click", handleClick);
    }, []);

    return isHidden;
}