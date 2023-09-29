// import {$getRoot, $getSelection} from 'lexical';
import {useEffect, useState} from 'react';
// import { LexicalCommand } from 'lexical';
// import { createCommand } from 'lexical';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {TabIndentationPlugin} from '@lexical/react/LexicalTabIndentationPlugin'
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
// import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { LinkNode } from "@lexical/link";
import { CodeNode } from "@lexical/code";
// import { TestCommand } from './commands/HelloCommand.jsx'
import { TopMenu } from './plugins/TopButtons.jsx'



// import exampleTheme from './Themes.jsx'

// import { LocalStoragePlugin } from './plugins/LocalStoragePlugin';


// const theme = {
//   // Theme styling goes here
  
// }
// for the above we define the stylings in it's own file. and give the theme value the imported name.

// const HELLO_WORLD_COMMAND = createCommand(); // defining the name of the command

// // This is registering it so we can access it from anywhere
// editor.registerCommand( // so with this, we are saying what the command is doing, so this is print
// // hello world into the console. We are also giving it low priority.
//   HELLO_WORLD_COMMAND, (payload) => {
//     console.log(payload); 
//     return false;
//   },
//   LowPriority
// )
// // this is what activates the command for the DOM, so it can be activated
// editor.dispatchCommand(HELLO_WORLD_COMMAND, "works")


const EDITOR_NODES = [
  CodeNode,
  HeadingNode,
  LinkNode,
  ListNode,
  ListItemNode,
  QuoteNode,
];

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

// when the editor changes, you can get notified via the OnChangePlugin
function OnChangePlugin({ onChange }) {
  // Access the editor through the LexicalComposerContext
  const [editor] = useLexicalComposerContext();
  // Wrap our listener in useEffect to handle the teardown and avoid stale references. So I think this cleans/clears the reference once the the
  //listener finishes.
  useEffect(() => {
    //most listeners return a teardown function that can be called to clean them up.
    return editor.registerUpdateListener(({editorState}) => {
      // call onChange here to pass the latest state up to the parent.
      onChange(editorState);
      // So, we first get the onChange to see when the editor changes, then we access the editor through the LexicalComposerContent.
      // We don't need to use the useEffect but it'll make sure the references don't stay the same once the on change function finishes so there aren't any errors.
      // then we return the registerUpdateLister, which will activate the onChange plugin which we use the plugin to get the state and then update it to the editor?
      // so we return the thing that says the editor has changed/updated, and moved it up so that we can see the change? Then we put it in our editor function so we can access
      // that information using the onchange. 
      // we return onChange which will be updated with the state of the editor, and we can then access it in the editor.
    });
  }, [editor, onChange]);
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}


//to get the Editor to work, I had to add export to the function, not export default for some reason? Maybe ES syntax reason while using JavaScript with 
// React because I don't typescript yet? Or JSX vs TSX vs EJS vs basic ass JavaScript? Also have to use brackets around Editor in App.jsx. 
// there's also 20,000 ways to import CSS into React.

export function Editor() {
  const initialConfig = {
    namespace: 'MyEditor',
    // theme: exampleTheme,
    onError,
  };

  // so with this, we are saving the state of the editor in a useState, we define the editorState in the function, it's recursion? we give it a state, and put it in the function
  // which will then define the editor state for use, set it as the new state and give us an object with the information?
  const [editorState, setEditorState] = useState();
  // function onChange(editorState) {
  //   setEditorState(editorState);
  // }
  function onChange(editorState) { //with the above way, we can't save what's in the editor to a database, so we have to turn it into a Json(serialize) so we can do so.
    // Call to JSON on the EditorState object, which produces a serialization safe string
    const editorStateJSON = editorState.toJSON();
    // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
    setEditorState(JSON.stringify(editorStateJSON));
    // we then activate this function below in the return using the onChange attribute, which can be confusing, I don't know why Docs like doing that.
  } // remember that most of the code in lexical is component based, so below we want to use the onChangeplugin(they call it plugin even though it's a component, makes since in context)
  // we then pass in our function onChange into the props(which the props name is onChange)
// the docs made it seem like it would work from the template they provided when it actually wasn't.



  return (
    <>
    {/* <TopMenu /> */}
    
    <LexicalComposer initialConfig={initialConfig} 
    config={{
      nodes: EDITOR_NODES,
    }}>
      {/* <TestCommand /> */}
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <TabIndentationPlugin />
      <MyCustomAutoFocusPlugin />
      <OnChangePlugin onChange={onChange}/> 
    </LexicalComposer>
    </>
  );
}