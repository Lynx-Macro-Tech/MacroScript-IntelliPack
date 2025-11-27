export type Lang = 'en' | 'pt';

export interface FunctionDoc {
    signature: string;
    en: string;
    pt: string;
    example?: string;
}

// FUNCTIONS
export const functionDocs: Record<string, FunctionDoc> = {
    gui: {
        signature: "gui(id)",
        en: "Interacts with GUI elements.",
        pt: "Interage com elementos da interface (GUI)."
    },
    log: {
        signature: "log(message)",
        en: "Prints a message to the game chat.",
        pt: "Imprime uma mensagem no chat do jogo.",
        example: 'log("Hello world");'
    },
    stop: {
        signature: "stop()",
        en: "Stops macro execution immediately.",
        pt: "Para a execução da macro imediatamente."
    },
    wait: {
        signature: "wait(ms | t)",
        en: "Pauses macro execution for a duration. Accepts either milliseconds (ms) or ticks (t).",
        pt: "Pausa a execução da macro por um período. Aceita milissegundos (ms) ou ticks (t).",
        example: [
            "wait(1000);   // 1000 ms",
            "wait(20t);    // 20 ticks"
        ].join("\n")
    },
    // Adicione o resto aqui...
};