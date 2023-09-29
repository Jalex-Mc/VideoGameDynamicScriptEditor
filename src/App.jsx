import "./styles.css"
import {Editor} from "./Editor.jsx";

export default function App() {
  return (
    <>
      <button className='switch'>here</button>
    <main className='container'>
    <div className='flexbox-left'>
    <nav className="inner-nav">
            <div className="icon-box">
              <div>
              <img src="/icons/logo.png" alt="logo-img"/>
              </div>
              </div>
            <div className="menu">
              <ol className='outliner' role='list'>
                {/* <li className='parent-list'><div>menu item</div><div className='parent-arrow'>^</div></li> */}
                <li className='outliner-name'><span>Outliner</span></li>
                <li className='child'>menu item</li>
                <li className='child'>menu item</li>
                <li className='child'>menu item</li>
              </ol>
            </div>
        </nav>
    </div>
    <div className='flexbox-right'>
      {/* <DocumentMenu editor={editor}/> */}
      {/* <ScriptMenu editor={editor} /> */}
          <div className='top-menu'>
            <button className='font-family'>
              <img src="/icons/font-family-dark-mode.svg" alt="font-fam"/>
              <p class='hover-text'>font-family</p>
            </button>
            <button className='font-size'>
            <img src="/icons/font-size-dark.svg" alt="font-size"/>
            </button>
            <button className='font-color'>
            <img src="/icons/font-color.svg" alt="font-size"/>
            </button>
            <button className='bold'>
            <img src="/icons/bold-dark-mode.svg" alt="font-size"/>
            </button>
            <button className='italics'>
            <img src="/icons/italic-dark.svg" alt="font-size"/>
            </button>
            <button className='underline'>
            <img src="/icons/underline-dark.svg" alt="font-size"/>
            </button>
            <button className='page-number'>
            <img src="/icons/font-size-dark.svg" alt="font-size"/>
            </button>
            <button className='alignment'>
            <img src="/icons/font-size-dark.svg" alt="font-size"/>
            </button>
            <button className='bullets'>
            <img src="/icons/list-ordered-dark.svg" alt="font-size"/>
            </button>
            <button className='ordered=list'>
            <img src="/icons/font-size-dark.svg" alt="font-size"/>
            </button>
            <button className='add-image'>
            <img src="/icons/image-add-line.svg" alt="font-size"/>
            </button>
      </div>
      <div className='document-case'>
        <Editor />
      {/* <EditorContent className='main-text' editor={editor} /> */}
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu editor={editor}> */}
        <div class="bubble-menu-document-mode">
            <button>font family</button>
            <button>font-size</button>
            <button>font color</button>
            <button onClick={() => editor.chain().focus().toggleBold().run()}>bold</button>
            <button>italicaze</button>
            <button>underline</button>
            <button>page number</button>
            <button>text alignment</button>
            <button>bullet list</button>
            <button>ordered list</button>
            <button>Image insertion</button>
          </div>
      {/* </BubbleMenu> */}
      </div>
    </div>
    </main>
    <div className='add-document'>
          <span>+</span>
          <span>Add Document</span>
        </div>
    <div className='menu-close-open'>menu</div>
    </>
  )
}