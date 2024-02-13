import { Dispatch, SetStateAction } from "react";

interface Props {
    state: number;
    setState: Dispatch<SetStateAction<number>>;
}

type RotationMap = {
    [key: number]: number;
};

export function Measurer({ state, setState }: Props) {
    const rotation: RotationMap = {
        1: -72,
        2: -36,
        3: 0,
        4: 36,
        5: 72,
    };

    return (
        <div className="measurer">
            <div className="stripes">
                <div
                    className="stripe stripe1"
                    onClick={() => setState(1)}
                ></div>
                <div
                    className="stripe stripe2"
                    onClick={() => setState(2)}
                ></div>
                <div
                    className="stripe stripe3"
                    onClick={() => setState(3)}
                ></div>
                <div
                    className="stripe stripe4"
                    onClick={() => setState(4)}
                ></div>
                <div
                    className="stripe stripe5"
                    onClick={() => setState(5)}
                ></div>
            </div>

            <div className="hole">
                <div
                    className="arrow"
                    style={{ transform: `rotate(${rotation[state]}deg)` }}
                ></div>
            </div>
        </div>
    );
}
