import { useState } from "react";
import { toast } from "react-hot-toast";

import { Face1, Face2, Face3, Face4, Face5, Measurer } from "./Components";

import "./App.css";

export function App() {
    const [state, setState] = useState(0);

    const face: { [key: number]: () => JSX.Element } = {
        1: () => <Face1 setState={setState} noStyles />,
        2: () => <Face2 setState={setState} noStyles />,
        3: () => <Face3 setState={setState} noStyles />,
        4: () => <Face4 setState={setState} noStyles />,
        5: () => <Face5 setState={setState} noStyles />,
    };

    const onClick = () => {
        if (state === 0) return toast.error("Selecciona un estado emocional");

        toast.success("Estado emocional enviado");
        toast.loading("Cerrando ventana");

        setTimeout(() => {
            window.close();
        }, 3000);
    };

    return (
        <main>
            <h1>¿Cómo te sientes el día de hoy?</h1>

            <div className="faces">
                <Face1 setState={setState} />
                <Face2 setState={setState} />
                <Face3 setState={setState} />
                <Face4 setState={setState} />
                <Face5 setState={setState} />
            </div>

            <Measurer state={state} setState={setState} />

            <div className="state">
                <h1>Tu estado emocional es: </h1>
                {state === 0 ? (
                    <p>Selecciona un estado emocional</p>
                ) : (
                    face[state]()
                )}
            </div>

            <div className="send">
                <button onClick={onClick}>Enviar</button>
            </div>
        </main>
    );
}
