import * as vscode from 'vscode';
import { functionDocs, FunctionDoc, Lang } from './docs/functions';



function getCurrentLang(): Lang {
    const config = vscode.workspace.getConfiguration('macro');
    const setting = config.get<string>('docsLanguage');

    if (setting === 'pt') return 'pt';
    if (setting === 'en') return 'en';

    return vscode.env.language.startsWith('pt') ? 'pt' : 'en';
}

function getDocText(doc: FunctionDoc, lang: Lang): string {
    return lang === 'pt' ? doc.pt : doc.en;
}

export function activate(context: vscode.ExtensionContext) {
    const langId = 'macro';

    // AUTOCOMPLETE
    const completionProvider = vscode.languages.registerCompletionItemProvider(
        { language: langId },
        {
            provideCompletionItems() {
                const items: vscode.CompletionItem[] = [];
                const lang = getCurrentLang();

                for (const [name, info] of Object.entries(functionDocs)) {
                    const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Function);
                    item.detail = info.signature;

                    const md = new vscode.MarkdownString(undefined, true);
                    md.supportHtml = true;
                    md.appendCodeblock(info.signature, "macro");
                    md.appendMarkdown("\n\n" + getDocText(info, lang).replace(/\n/g, "\n\n"));

                    if (info.example) {
                        if (lang === 'pt') {
                            md.appendMarkdown("\n\n**Exemplo:**\n");
                        } else {
                            md.appendMarkdown("\n\n**Example:**\n");
                        }
                        md.appendCodeblock(info.example, "macro");
                    }

                    item.documentation = md;
                    items.push(item);
                }

                return items;
            }
        }
    );

    // HOVER
    const hoverProvider = vscode.languages.registerHoverProvider(
        { language: langId },
        {
            provideHover(document, position) {
                const range = document.getWordRangeAtPosition(position);
                if (!range) return;

                const word = document.getText(range);
                const info = functionDocs[word];
                if (!info) return;

                const lang = getCurrentLang();
                const md = new vscode.MarkdownString(undefined, true);

                md.supportHtml = true;
                md.appendCodeblock(info.signature, "macro");
                md.appendMarkdown("\n\n" + getDocText(info, lang).replace(/\n/g, "\n\n"));

                if (info.example) {
                    md.appendMarkdown("\n\n**Example / Exemplo:**\n");
                    md.appendCodeblock(info.example, "macro");
                }

                return new vscode.Hover(md);
            }
        }
    );

    context.subscriptions.push(completionProvider, hoverProvider);
}

export function deactivate() { }
