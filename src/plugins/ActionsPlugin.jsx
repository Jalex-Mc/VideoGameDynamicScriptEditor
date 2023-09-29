import { useMemo } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { CLEAR_EDITOR_COMMAND } from 'lexical';
import { Button } from '../components/Button';

export function ActionsPlugin() {
    const [editor] = useLexicalComposerContext();

    const MandatoryPlugins = useMemo(() => {
        return <ClearEditorPlug />; // so we are getting the clear editor command that's already made, and we are
    }, []);

return (
    <>
        {MandatoryPlugins}
        <div className='my-4'>
            <Button onClick={() => {
                editor.dispathCommand(CLEAR_EDITOR_COMMAND, undefined);
            }}
            >
                {ActionIcons.Clear}
            </Button>
        </div>
    </>
);
        }