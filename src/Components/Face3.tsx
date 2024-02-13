import { Dispatch, SetStateAction } from "react";

interface Props {
    setState: Dispatch<SetStateAction<number>>;
    noStyles?: boolean;
}

export function Face3({ setState, noStyles }: Props) {
    return (
        <div
            className={`${!noStyles && "face face3"}`}
            onClick={() => setState(3)}
        >
            <svg width="100" height="100">
                {/* Círculo */}
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="black"
                    strokeWidth="2"
                    fill="yellow"
                />

                {/* Ojos (puntos) */}
                <circle cx="35" cy="40" r="5" fill="black" />
                <circle cx="65" cy="40" r="5" fill="black" />

                {/* Boca (línea) */}
                <line
                    x1="30"
                    y1="70"
                    x2="70"
                    y2="70"
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}
