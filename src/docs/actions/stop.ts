import { IActionDoc } from '../interfaces/IActionDoc'

export const stopDoc: IActionDoc = {
    signature: "stop([id])",
    en: `
    Stops the current macro, or macros matching the specified ID
    For stopping all macros you can use either "all" or "*".
    `,
    pt: `
    Interrompe a macro atual ou as macros que correspondem ao ID especificado.
    Para interromper todas as macros, você pode usar "all" ou "*".
    `
}