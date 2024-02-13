import { Dispatch, SetStateAction } from "react";

interface Props {
    setState: Dispatch<SetStateAction<number>>;
    noStyles?: boolean;
}

export function Face5({ setState, noStyles }: Props) {
    return (
        <div
            className={`${!noStyles && "face face5"}`}
            onClick={() => setState(5)}
        >
            <svg width="100" height="100">
                {/* Círculo */}
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="black"
                    strokeWidth="2"
                    fill="green"
                />

                {/* Ojos (puntos) */}
                <circle cx="35" cy="40" r="5" fill="black" />
                <circle cx="65" cy="40" r="5" fill="black" />

                {/* Boca (línea) */}
                <path
                    d="M 30 60 Q 50 80 70 60"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}
