import { useCallback, useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { debounce } from '../utils/debounce';

const LocalStoragePluginProps = {
    namespace: "",
};

export function LocalStoragePlugin(LocalStoragePluginProps) {
    const [editor] = useLexicalComposerContext();

    const saveContent = useCallback(() => { 
    localStorage.setItem(LocalStoragePluginProps, content);
},
[LocalStoragePluginProps])

const debouncedSaveContent = debounce(saveContent, 500);

useEffect(() => {
    return editor.registerUpdateListener(
        ({ editorState, dirtyElements, dirtyLeaves }) => {
            // Don't update if nothing changed
            if (dirtyElements.size === 0 && dirtyLeaves.size === 0) return;

            const serializedState = JSON.stringify(editorState);
            debouncedSaveContent(serializedState);
        }
    );
}, [debouncedSaveContent, editor]);

return null;
}