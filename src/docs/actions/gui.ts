import { IActionDoc } from '../interfaces/IActionDoc'

export const guiDoc: IActionDoc = {
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
}