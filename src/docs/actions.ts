import { IActionDoc } from './interfaces/IActionDoc'

//Import functions
import { guiDoc } from './actions/gui';
import { logDoc } from './actions/log';
import { stopDoc } from './actions/stop';
import { waitDoc } from './actions/wait';

export type Lang = 'en' | 'pt';

export const actionsDocs: Record<string, IActionDoc> = {
    gui: guiDoc,
    log: logDoc,
    stop: stopDoc,
    wait: waitDoc,

};
