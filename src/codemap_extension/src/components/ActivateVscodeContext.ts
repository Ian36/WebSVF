"use strict";

import * as vscode from "vscode";

export class ActivateVscodeContext {
    private static _context: vscode.ExtensionContext;
    private static _have_not_store_yet: boolean = true;
    public static get have_not_store_yet(): boolean {
        return ActivateVscodeContext._have_not_store_yet;
    }
    public static get context(): vscode.ExtensionContext {
        return ActivateVscodeContext._context;
    }
    public static set context(value: vscode.ExtensionContext) {
        // The '_context' cannot rewrite once been written
        if (ActivateVscodeContext._have_not_store_yet) {
            ActivateVscodeContext._context = value;
            ActivateVscodeContext._have_not_store_yet = false;
        }
    }
}

export function StoreVscodeContext(context: vscode.ExtensionContext): boolean {
    const store_success_or_not: boolean =
        ActivateVscodeContext.have_not_store_yet;
    ActivateVscodeContext.context = context;

    return store_success_or_not;
}
