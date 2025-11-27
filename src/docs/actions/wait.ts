import { IActionDoc } from '../interfaces/IActionDoc'

export const waitDoc: IActionDoc = {
    signature: "wait(<time>)",
    en: "Pauses the script for the time (in seconds) specified, suffix ms for a wait in milliseconds or t to wait in ticks.",
    pt: "Pausa o script pelo tempo (em segundos) especificado; use o sufixo ms para aguardar em milissegundos ou t para aguardar em ticks."
}