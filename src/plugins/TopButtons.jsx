import React from 'react'
// import { testListener } from '../commands/TestListener';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';


export function TopMenu() {
  // const onClick = testListener();
  // you have to define onClick because of some React quirk. 
  // https://stackoverflow.com/questions/66921434/onclick-not-working-in-form-element-in-react-but-works-in-button
  // will I have to define every single one? How?
  // First get commands to work. 
  // Then add the commands in an array with if statement to cycle through the onClick commands? 
  // or i can just not have it named onclick.

  // have to get the editor inside the function. Now, to fix the hook issues.
  const HelloCommand = () => {
    const [editor] = useLexicalComposerContext();
    return editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  }
  
  return (
    <div className="top-menu">
      <button className="font-family" onClick={ HelloCommand }>
        <img src="/icons/font-family-dark-mode.svg" alt="font-fam" />
        {/* <p className="hover-text">font-family</p> */}
      </button>
      <button className="font-size">
        <img src="/icons/font-size-dark.svg" alt="font-size" />
      </button>
      <button className="font-color">
        <img src="/icons/font-color.svg" alt="font-size" />
      </button>
      <button className="bold">
        <img src="/icons/bold-dark-mode.svg" alt="font-size" />
      </button>
      <button className="italics">
        <img src="/icons/italic-dark.svg" alt="font-size" />
      </button>
      <button className="underline">
        <img src="/icons/underline-dark.svg" alt="font-size" />
      </button>
      <button className="page-number">
        <img src="/icons/font-size-dark.svg" alt="font-size" />
      </button>
      <button className="alignment">
        <img src="/icons/font-size-dark.svg" alt="font-size" />
      </button>
      <button className="bullets">
        <img src="/icons/list-ordered-dark.svg" alt="font-size" />
      </button>
      <button className="ordered=list">
        <img src="/icons/font-size-dark.svg" alt="font-size" />
      </button>
      <button className="add-image">
        <img src="/icons/image-add-line.svg" alt="font-size" />
      </button>
    </div>
  );
}
