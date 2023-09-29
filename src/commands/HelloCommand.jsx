// import { createCommand } from 'lexical';
// import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND } from 'lexical';

// export function useHelloCommandListener() {
//     // const [editor] = useLexicalComposerContext();
//     // editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")
//     return console.log('Fucking work you piece of shit')
// }

const useHelloCommand = () => {
    const onClick = (event) => {
        console.log("working", event)
    }
}

export default useHelloCommand;

// const useHelloCommandListener = () => {
//     const [editor] = useLexicalComposerContext();
//     return helloClick = () => {
//         editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
//         console.log("hello world")
//     }
// }


// export default useHelloCommandListener;

// export function TestCommand() {
//     const [editor] = useLexicalComposerContext();

    
//     const HELLO_WORLD_COMMAND = createCommand(); // defining the name of the command
    
//     // This is registering it so we can access it from anywhere
//     editor.registerCommand( // so with this, we are saying what the command is doing, so this is print
//     // hello world into the console. We are also giving it low priority.
//       HELLO_WORLD_COMMAND, (payload) => {
//         console.log(payload); 
//         return false;
//       },
//       LowPriority
//     )
//     // this is what activates the command for the DOM, so it can be activated
//     return editor.dispatchCommand(HELLO_WORLD_COMMAND, "works")
// }
