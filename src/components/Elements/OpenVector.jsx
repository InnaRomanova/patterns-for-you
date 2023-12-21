import { useEffect, useState } from "react";
import "../Navigation/Navigation.css";

export default function OpenVector({onOpen}) {
    const [transform, setTransform] = useState(0);

    useEffect(() => {
        if (onOpen) {
            setTransform(180);
        } else {
            setTransform(0);
        }
    }, [onOpen]);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        className="openVector"
        width="17" 
        height="8" 
        viewBox="0 0 17 8" 
        fill="none"
        transform={`rotate(${transform})`}>
        <path d="M1.92578 1L8.96282 7L15.9999 1" 
        stroke="#292F36" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
      </svg>
    );
  }