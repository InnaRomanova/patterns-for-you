import { useEffect, useState } from "react";

export default function DetailsVectorSidbar({ onOpen }) {
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
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none">
            <circle cx="15"
                cy="15"
                r="14.5"
                transform="rotate(90 15 15)"
                stroke="#CDA274" />
            <path d="M11.5381 13.3024L15.3952 16.731L19.2524 13.3024"
                stroke="#292F36"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );
}