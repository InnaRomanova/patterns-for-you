import { useEffect, useState } from "react";

export default function ButtonVectorLeft({ onOpen }) {
  const [transform, setTransform] = useState(180);

  useEffect(() => {
    if (onOpen) {
      setTransform(0);
    } else {
      setTransform(180);
    }
  }, [onOpen]);
  return (
    <svg
      className="news__button-vector news__button-left"
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      transform={`rotate(${transform})`}
    >
      <circle cx="26" cy="26" r="26" fill="#BBA48B" />

      <path d="M24 30.8633L29.9429 24.4316L24 18" fill="white" />
    </svg>
  );
}
