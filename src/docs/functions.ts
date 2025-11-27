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
        signature: "gui([name])",
        en:
            `Show (or hide) a gui screen.
            
**Possible values:**
- \`chat\`
- \`filterablechat\`
- \`menu\`
- \`inventory\`
- \`options\`
- \`video\`
- \`controls\`
- \`macrobind\`
- \`macroplayback\`
- \`macroconfig\`
- \`texteditor\`
- \`repl\`
            
If no name is specified it will close the currently open gui.`,
        pt:
            `Abre (ou fecha) a interface (GUI).
            
**Possible values:**
- \`chat\`
- \`filterablechat\`
- \`menu\`
- \`inventory\`
- \`options\`
- \`video\`
- \`controls\`
- \`macrobind\`
- \`macroplayback\`
- \`macroconfig\`
- \`texteditor\`
- \`repl\`

Se nenhum nome for especificado, será fechado a atual interface aberta.`
    },
    log: {
        signature: "log(<text>)",
        en: "Shows the specified text only on the client-side in the chat window.",
        pt: "Exibe o texto especificado apenas no lado do cliente, na janela de bate-papo."
    },
    stop: {
        signature: "stop([id])",
        en: `
        Stops the current macro, or macros matching the specified ID
        For stopping all macros you can use either "all" or "*".
        `,
        pt: `
        Interrompe a macro atual ou as macros que correspondem ao ID especificado.
        Para interromper todas as macros, você pode usar "all" ou "*".
        `
    },
    wait: {
        signature: "wait(<time>)",
        en: "Pauses the script for the time (in seconds) specified, suffix ms for a wait in milliseconds or t to wait in ticks.",
        pt: "Pausa o script pelo tempo (em segundos) especificado; use o sufixo ms para aguardar em milissegundos ou t para aguardar em ticks."
    },
    // Adicione o resto aqui...
};