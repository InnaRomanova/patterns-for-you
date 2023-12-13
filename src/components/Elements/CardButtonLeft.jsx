import { useEffect, useState } from "react";

export default function CardButtonLeft({ onOpen }) {
  const [transform, setTransform] = useState(180);

  useEffect(() => {
    if (onOpen) {
      setTransform(0);
    } else {
      setTransform(180);
    }
  }, [onOpen]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  
    className="card__button"
    width="71" 
    height="70" 
    viewBox="0 0 71 70" 
    fill="none"
    transform={`rotate(${transform})`}>
    <circle cx="35.4999" cy="35" r="35" fill="#F4F0EC"/>
    <path d="M32.4999 44L40.4999 35L32.4999 26" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
}